import { NextResponse } from 'next/server'
import { verifyAdminAndGetWebsite } from '../../../lib/jwt-utils.js'

// Force dynamic route
export const dynamic = 'force-dynamic'

// Admin-only health check endpoint
export async function GET(request) {
  try {
    verifyAdminAndGetWebsite(request)
  } catch {
    return NextResponse.json(
      { success: false, message: 'Unauthorized' },
      { status: 401 }
    )
  }

  try {
    return NextResponse.json({
      success: true,
      status: 'healthy',
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Health check failed:', error)
    return NextResponse.json(
      { success: false, status: 'unhealthy' },
      { status: 500 }
    )
  }
}