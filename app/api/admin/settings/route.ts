/**
 * Admin Settings API
 *
 * GET /api/admin/settings - Fetch settings for admin's website
 * PUT /api/admin/settings - Update settings for admin's website
 *
 * Request body for PUT:
 *   {
 *     "key": "hide_all_ads",
 *     "value": "true"
 *   }
 *
 * Requires JWT authentication with admin claim
 */

import { NextRequest, NextResponse } from 'next/server'
import { verifyAdminAndGetWebsite } from '../../../../lib/jwt-utils'
import { getSetting, updateSetting, getAllSettings, clearCache } from '../../../../lib/settings-service'

export async function GET(request: NextRequest) {
  try {
    const { website } = verifyAdminAndGetWebsite(request)

    // Fetch all settings for admin's website
    const allSettings = await getAllSettings(website)

    return NextResponse.json({
      success: true,
      settings: allSettings,
      website
    })
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Authentication failed'

    return NextResponse.json(
      {
        success: false,
        error: errorMessage
      },
      { status: errorMessage.includes('token') ? 401 : 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { website } = verifyAdminAndGetWebsite(request)

    // Parse request body
    const body = await request.json()
    const { key, value } = body

    if (!key || typeof value === 'undefined') {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: key and value'
        },
        { status: 400 }
      )
    }

    // Whitelist of allowed settings keys (security measure)
    const allowedKeys = ['hide_all_ads']
    if (!allowedKeys.includes(key)) {
      return NextResponse.json(
        {
          success: false,
          error: `Setting key "${key}" is not allowed`
        },
        { status: 400 }
      )
    }

    // Update setting
    const success = await updateSetting(key, String(value), website)

    if (!success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to update setting'
        },
        { status: 500 }
      )
    }

    // Clear cache for this setting
    clearCache(key, website)

    return NextResponse.json({
      success: true,
      message: `Setting ${key} updated successfully`,
      key,
      value: String(value),
      website
    })
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'An error occurred'

    if (errorMessage.includes('Unexpected end of JSON input')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid JSON in request body'
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: errorMessage
      },
      { status: errorMessage.includes('token') ? 401 : 500 }
    )
  }
}
