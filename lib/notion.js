const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

const database_id = process.env.NOTION_DATABASE_ID;

async function getAllCaseStudies() {
  try {
    const response = await notion.databases.query({
      database_id: database_id,
      filter: {
        property: "Status",
        status: {
          equals: "Published",
        },
      },
      sorts: [
        {
          property: "Year",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page) => ({
      id: page.id,
      slug: page.properties.Slug?.rich_text[0]?.plain_text || "",
      title: page.properties.Title?.title[0]?.plain_text || "",
      company: page.properties.Company?.rich_text[0]?.plain_text || "",
      year: page.properties.Year?.rich_text[0]?.plain_text || "",
      role: page.properties.Role?.rich_text[0]?.plain_text || "",
    }));
  } catch (error) {
    console.error('Error fetching all case studies:', error);
    return [];
  }
}

async function getCaseStudyBySlug(slug) {
  try {
    const response = await notion.databases.query({
      database_id: database_id,
      filter: {
        and: [
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
          {
            property: "Status",
            status: {
              equals: "Published",
            },
          },
        ],
      },
    });

    if (response.results.length === 0) {
      return null;
    }

    const page = response.results[0];
    const contentPageId = page.properties.PageID?.rich_text[0]?.plain_text || page.id;

    const metadata = {
      id: page.id,
      slug: page.properties.Slug?.rich_text[0]?.plain_text || "",
      title: page.properties.Title?.title[0]?.plain_text || "",
      company: page.properties.Company?.rich_text[0]?.plain_text || "",
      year: page.properties.Year?.rich_text[0]?.plain_text || "",
      role: page.properties.Role?.rich_text[0]?.plain_text || "",
    };

    const mdblocks = await n2m.pageToMarkdown(contentPageId);
    const mdString = n2m.toMarkdownString(mdblocks);

    return {
      ...metadata,
      content: mdString.parent,
    };
  } catch (error) {
    console.error('Error fetching case study:', error);
    return null;
  }
}

module.exports = { getAllCaseStudies, getCaseStudyBySlug, database_id };
