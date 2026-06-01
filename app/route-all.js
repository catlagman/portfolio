import { NextResponse } from 'next/server'
import { getAllCaseStudies } from '../../../lib/notion.js'

export async function GET() {
  try {
    const caseStudies = await getAllCaseStudies()
    return NextResponse.json(caseStudies)
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return NextResponse.json(
      { error: 'Failed to fetch case studies' },
      { status: 500 }
    )
  }
}
