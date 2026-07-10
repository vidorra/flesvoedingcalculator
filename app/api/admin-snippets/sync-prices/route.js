import { NextResponse } from 'next/server'
import { verifyAdminAndGetWebsite } from '../../../../lib/jwt-utils.js'
import { syncPricesForWebsite } from '../../../../lib/price-sync.js'

// Force dynamic route; sync kan even duren
export const dynamic = 'force-dynamic'
export const maxDuration = 300

// POST - handmatige prijssync vanuit de admin ("Sync prices"-knop).
// Was file-based (dood JSON-bestand); nu dezelfde DB-sync als de
// nachtelijke cron (lib/price-sync.js), voor BEIDE websites in de
// gedeelde database. Response-vorm blijft compatibel met de dashboard-
// verwachting: { success, stats: { total, successful, errors, errorDetails } }.
export async function POST(request) {
  try {
    verifyAdminAndGetWebsite(request)
  } catch {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  try {
    const results = []
    for (const website of ['flesvoedingcalculator', 'togwaarde']) {
      results.push(await syncPricesForWebsite(website))
    }

    const stats = {
      total: results.reduce((s, r) => s + r.total, 0),
      successful: results.reduce((s, r) => s + r.successful, 0),
      errors: results.reduce((s, r) => s + r.errors, 0),
      errorDetails: results.flatMap(r => r.errorDetails),
      deactivated: results.flatMap(r => r.deactivated)
    }

    return NextResponse.json({
      success: true,
      message: `Price sync completed: ${stats.successful} successful, ${stats.errors} errors`,
      stats
    })
  } catch (error) {
    console.error('Admin price sync failed:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to sync prices', error: error.message },
      { status: 500 }
    )
  }
}
