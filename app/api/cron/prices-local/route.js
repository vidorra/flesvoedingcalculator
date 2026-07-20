import { NextResponse } from 'next/server'
import { and, eq, inArray } from 'drizzle-orm'
import { db } from '../../../../lib/db/connection.js'
import { snippets } from '../../../../lib/db/schema.js'

// Force dynamic; leest/schrijft de DB
export const dynamic = 'force-dynamic'
export const maxDuration = 60

// Validatie voor de POST-updates
const MAX_UPDATES = 500
const ID_PATTERN = /^[A-Za-z0-9_-]{1,128}$/          // bv. bol-9200000114317984
const PRICE_PATTERN = /^€?\s?\d{1,6}([.,]\d{1,2})?$/  // bv. €31,14 / 31.14 / 31
const CURRENCY_PATTERN = /^[A-Z]{3}$/                 // EUR

/**
 * Prijssync-endpoint voor de LOKALE runner (scripts/sync-prices-local.mjs).
 *
 * Waarom: bol.com blokkeert server-IP's (Hetzner/CapRover én GitHub-runners)
 * met HTTP 403, dus server-side scrapen levert nooit een prijs op. Vanaf een
 * residentieel IP (de laptop van de beheerder) lukt het wél. Dit endpoint is
 * de brug: de laptop haalt de prijzen op en POST ze hierheen; wij schrijven ze
 * in de gedeelde DB. Bezoekers zien geen enkel extern script (geen cookies).
 *
 * Auth: CRON_SECRET, als `Authorization: Bearer <secret>` of `x-cron-secret`.
 * GET  -> lijst met actieve bol- en amazon-snippets (beide websites) om lokaal
 *         te prijzen (bol via JSON-LD, amazon via de a-offscreen/priceAmount).
 * POST -> { updates: [{ id, price, originalPrice?, currency? }] } wegschrijven.
 */
function isAuthorized(request) {
  const secret = process.env.CRON_SECRET
  if (!secret) return null
  const auth = request.headers.get('authorization') || ''
  const headerSecret = request.headers.get('x-cron-secret') || ''
  return auth === `Bearer ${secret}` || headerSecret === secret
}

function guard(request) {
  const authorized = isAuthorized(request)
  if (authorized === null) {
    return NextResponse.json({ success: false, message: 'CRON_SECRET niet geconfigureerd' }, { status: 503 })
  }
  if (!authorized) {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 })
  }
  return null
}

export async function GET(request) {
  const blocked = guard(request)
  if (blocked) return blocked

  const rows = await db
    .select({ id: snippets.id, name: snippets.name, url: snippets.url, type: snippets.type, website: snippets.website })
    .from(snippets)
    .where(and(eq(snippets.active, true), inArray(snippets.type, ['bol', 'amazon'])))

  return NextResponse.json({ success: true, snippets: rows })
}

export async function POST(request) {
  const blocked = guard(request)
  if (blocked) return blocked

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ success: false, message: 'Ongeldige JSON' }, { status: 400 })
  }

  const updates = Array.isArray(body?.updates) ? body.updates : []
  if (!updates.length) {
    return NextResponse.json({ success: false, message: 'Geen updates meegegeven' }, { status: 400 })
  }
  if (updates.length > MAX_UPDATES) {
    return NextResponse.json({ success: false, message: `Te veel updates (max ${MAX_UPDATES})` }, { status: 400 })
  }

  let updated = 0
  const errors = []
  for (const u of updates) {
    // Strikte validatie: alleen een plausibel prijsstring + geldige snippet-id
    // mogen de DB in. Zo kan een houder van CRON_SECRET hooguit een echte
    // prijs zetten, geen willekeurige tekst (die wordt als tekst gerenderd,
    // maar we houden de kolommen schoon).
    if (!u?.id || typeof u.id !== 'string' || !ID_PATTERN.test(u.id)) {
      errors.push(`Overgeslagen (ongeldige id): ${JSON.stringify(u?.id)?.slice(0, 60)}`)
      continue
    }
    if (typeof u.price !== 'string' || !PRICE_PATTERN.test(u.price)) {
      errors.push(`Overgeslagen (ongeldige price) voor ${u.id}`)
      continue
    }
    if (u.originalPrice != null && (typeof u.originalPrice !== 'string' || !PRICE_PATTERN.test(u.originalPrice))) {
      errors.push(`Overgeslagen (ongeldige originalPrice) voor ${u.id}`)
      continue
    }
    const currency = typeof u.currency === 'string' && CURRENCY_PATTERN.test(u.currency) ? u.currency : 'EUR'
    try {
      await db
        .update(snippets)
        .set({
          price: u.price,
          originalPrice: u.originalPrice ?? null,
          currency,
          priceLastUpdated: new Date(),
          updatedAt: new Date()
        })
        .where(eq(snippets.id, u.id))
      updated++
    } catch (err) {
      errors.push(`Fout bij ${u.id}: ${err.message}`)
    }
  }

  return NextResponse.json({ success: true, updated, errors })
}
