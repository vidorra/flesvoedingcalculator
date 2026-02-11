/**
 * Public Settings API
 *
 * GET /api/settings - Fetch settings
 * Query params:
 *   - key: specific setting key (optional)
 *   - website: website identifier (optional, defaults to 'flesvoedingcalculator')
 *
 * Returns JSON with settings
 *
 * No authentication required - safe to expose as settings are non-sensitive
 */

import { NextRequest, NextResponse } from 'next/server'
import { getSetting, getAllSettings } from '../../../lib/settings-service'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')
    const website = searchParams.get('website') || 'flesvoedingcalculator'

    if (key) {
      // Fetch specific setting
      const value = await getSetting(key, website)
      return NextResponse.json(
        {
          success: true,
          key,
          value,
          website
        },
        {
          headers: {
            'Cache-Control': 'public, max-age=30' // Cache for 30 seconds
          }
        }
      )
    } else {
      // Fetch all settings for website
      const allSettings = await getAllSettings(website)
      return NextResponse.json(
        {
          success: true,
          settings: allSettings,
          website
        },
        {
          headers: {
            'Cache-Control': 'public, max-age=30' // Cache for 30 seconds
          }
        }
      )
    }
  } catch (error) {
    console.error('Error in GET /api/settings:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch settings'
      },
      { status: 500 }
    )
  }
}
