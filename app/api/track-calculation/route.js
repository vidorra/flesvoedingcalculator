import { NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { db } from '../../../lib/db/connection.js'
import { calculatorEvents } from '../../../lib/db/schema.js'
import { ensureCalculatorEventsTable } from '../../../lib/db/ensure-events.js'

export const dynamic = 'force-dynamic'

const WEBSITE = 'flesvoedingcalculator'

// Only accept a short, known-shaped age category (bound + anti-abuse).
const AGE_PATTERN = /^[A-Za-z0-9_-]{1,32}$/

// Whitelist of coarse, non-personal data keys. Anything else is dropped so the
// stored payload can never carry identifying or free-form content.
function sanitizeData(raw) {
  if (!raw || typeof raw !== 'object') return {}
  const out = {}
  if (typeof raw.weightBucket === 'string' && raw.weightBucket.length <= 16) out.weightBucket = raw.weightBucket
  if (Number.isFinite(raw.feedings)) out.feedings = Math.max(0, Math.min(20, Math.round(raw.feedings)))
  if (typeof raw.isCombi === 'boolean') out.isCombi = raw.isCombi
  if (typeof raw.isPremature === 'boolean') out.isPremature = raw.isPremature
  if (typeof raw.variant === 'string' && raw.variant.length <= 16) out.variant = raw.variant
  return out
}

// POST - record one anonymous calculation event
export async function POST(request) {
  try {
    const body = await request.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ success: false, error: 'Invalid body' }, { status: 400 })
    }

    const ageCategory =
      typeof body.ageCategory === 'string' && AGE_PATTERN.test(body.ageCategory)
        ? body.ageCategory
        : null

    const data = sanitizeData(body.data)

    if (!process.env.DATABASE_URL) {
      // No DB configured (e.g. local/dev) - accept silently so the client never errors.
      return NextResponse.json({ success: true, stored: false })
    }

    await ensureCalculatorEventsTable()
    await db.insert(calculatorEvents).values({
      id: randomUUID(),
      website: WEBSITE,
      ageCategory,
      data
    })

    return NextResponse.json({ success: true, stored: true })
  } catch (error) {
    console.error('track-calculation error:', error)
    return NextResponse.json({ success: false, error: 'Failed to record event' }, { status: 500 })
  }
}
