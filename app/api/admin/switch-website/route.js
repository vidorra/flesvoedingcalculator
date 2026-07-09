import { NextResponse } from 'next/server'
import { verifyAdminAndGetWebsite, signAdminToken } from '../../../../lib/jwt-utils.js'

// Force dynamic route
export const dynamic = 'force-dynamic'

const VALID_WEBSITES = ['flesvoedingcalculator', 'togwaarde']

/**
 * POST /api/admin/switch-website - Switch admin context to different website
 *
 * Allows an authenticated admin to switch their JWT token to manage a different
 * website. Both websites share the same admin password and JWT_SECRET, and the
 * snippets/pages live in one shared database scoped by the `website` column.
 *
 * Request body: { newWebsite: 'togwaarde' }
 * Response: { success: true, token: '<new-jwt>', website: 'togwaarde' }
 */
export async function POST(request) {
  try {
    const { website } = verifyAdminAndGetWebsite(request)

    const body = await request.json()
    const { newWebsite } = body

    if (!newWebsite || !VALID_WEBSITES.includes(newWebsite)) {
      return NextResponse.json(
        { success: false, message: `Invalid website. Must be one of: ${VALID_WEBSITES.join(', ')}` },
        { status: 400 }
      )
    }

    // Same-website switch: harmless, return a fresh token so the client can
    // proceed without special-casing.
    const newToken = signAdminToken(newWebsite)

    console.log(`Admin switched from ${website} to ${newWebsite}`)

    return NextResponse.json({
      success: true,
      token: newToken,
      website: newWebsite,
      message: `Switched to ${newWebsite}`,
    })
  } catch (error) {
    console.error('Website switch error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to switch website' },
      { status: 401 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  )
}
