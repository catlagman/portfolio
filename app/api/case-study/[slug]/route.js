import { NextResponse } from 'next/server'
import { getCaseStudyBySlug } from '../../../../lib/notion.js'

export async function GET(request, { params }) {
  try {
    const { slug } = params
    const caseStudy = await getCaseStudyBySlug(slug)

    if (!caseStudy) {
      return NextResponse.json(
        { error: 'Case study not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(caseStudy)
  } catch (error) {
    console.error('Error fetching case study:', error)
    return NextResponse.json(
      { error: 'Failed to fetch case study' },
      { status: 500 }
    )
  }
}
