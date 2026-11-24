import { NextResponse } from 'next/server'
import { createHash } from 'crypto'
import { and, eq, inArray, sql } from 'drizzle-orm'
import { db } from '../../../../lib/db/connection.js'
import { snippets } from '../../../../lib/db/schema.js'
import { ensurePriceAlertStateTable } from '../../../../lib/db/ensure-events.js'
import { sendMail, mailerConfigured, ownerEmail } from '../../../../lib/mailer.js'
import { safeEqual } from '../../../../lib/safe-compare.js'

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
  return safeEqual(auth, `Bearer ${secret}`) || safeEqual(headerSecret, secret)
}

// Meldingen over producten die geen prijs opleveren. Een Amazon-product dat op
// "currently unavailable" staat, of waarvan de ASIN/URL is veranderd, levert
// stilletjes niets meer op; dan blijft er een verouderde prijs op de site staan
// zonder dat iemand het merkt. Daarom mailen we het.
//
// Niet elke run mailen: de launchd-job draait om 07:00 én bij elke login/boot,
// dus een product dat een week stuk staat zou tientallen identieke mails geven.
// We mailen als de verzameling kapotte producten verandert, en verder hooguit
// eens per ~20 uur zodat je het bij een blijvend probleem toch dagelijks ziet.
const ALERT_MIN_INTERVAL_MS = 20 * 60 * 60 * 1000
const MAX_FAILURES_IN_MAIL = 50

function failureHash(failures) {
  const ids = failures.map(f => f.id).sort().join('|')
  return createHash('sha256').update(ids).digest('hex').slice(0, 32)
}

async function shouldSendAlert(hash) {
  try {
    await ensurePriceAlertStateTable()
    const result = await db.execute(sql`
      SELECT failing_hash, last_sent_at FROM price_alert_state WHERE id = 'global'`)
    const row = result.rows?.[0]
    if (!row) return true
    if (row.failing_hash !== hash) return true
    return Date.now() - new Date(row.last_sent_at).getTime() > ALERT_MIN_INTERVAL_MS
  } catch (error) {
    // Bij twijfel liever mailen dan stil blijven: een gemiste melding is erger
    // dan een dubbele.
    console.error('price-alert state lezen mislukt:', error.message)
    return true
  }
}

async function rememberAlert(hash) {
  try {
    await db.execute(sql`
      INSERT INTO price_alert_state (id, failing_hash, last_sent_at)
      VALUES ('global', ${hash}, now())
      ON CONFLICT (id) DO UPDATE SET failing_hash = ${hash}, last_sent_at = now()`)
  } catch (error) {
    console.error('price-alert state opslaan mislukt:', error.message)
  }
}

async function maybeSendFailureAlert(failures) {
  if (!failures.length) return { sent: false, reason: 'geen mislukkingen' }
  if (!mailerConfigured()) return { sent: false, reason: 'mailer niet geconfigureerd' }

  const hash = failureHash(failures)
  if (!(await shouldSendAlert(hash))) {
    return { sent: false, reason: 'al gemeld (ongewijzigd en < 20u geleden)' }
  }

  const getoond = failures.slice(0, MAX_FAILURES_IN_MAIL)
  const rest = failures.length - getoond.length
  const regels = getoond.map(f => `- ${f.name || f.id} [${f.website || '?'}, ${f.type || '?'}]\n  reden: ${f.reason || 'onbekend'}\n  ${f.url || ''}`)
  if (rest > 0) regels.push(`- (+${rest} meer)`)

  const onderwerp = failures.length === 1
    ? `Prijssync: 1 product zonder prijs (${getoond[0].name || getoond[0].id})`
    : `Prijssync: ${failures.length} producten zonder prijs`

  const text = [
    'De dagelijkse prijssync kon voor deze affiliate-producten geen prijs ophalen.',
    'Meestal betekent dat: niet meer leverbaar, of de URL/ASIN is gewijzigd.',
    'De oude prijs blijft staan op de site tot je het corrigeert.',
    '',
    ...regels,
    '',
    'Beheer: https://flesvoedingcalculator.nl/admin/dashboard'
  ].join('\n')

  const html = `<p>De dagelijkse prijssync kon voor deze affiliate-producten geen prijs ophalen.<br>
Meestal betekent dat: niet meer leverbaar, of de URL/ASIN is gewijzigd.<br>
De oude prijs blijft staan op de site tot je het corrigeert.</p>
<ul>${getoond.map(f => `<li><strong>${escapeHtml(f.name || f.id)}</strong> <em>(${escapeHtml(f.website || '?')}, ${escapeHtml(f.type || '?')})</em><br>
reden: ${escapeHtml(f.reason || 'onbekend')}${f.url ? `<br><a href="${escapeHtml(f.url)}">${escapeHtml(f.url)}</a>` : ''}</li>`).join('')}
${rest > 0 ? `<li>(+${rest} meer)</li>` : ''}</ul>
<p><a href="https://flesvoedingcalculator.nl/admin/dashboard">Naar het dashboard</a></p>`

  const res = await sendMail({ to: ownerEmail(), subject: onderwerp, text, html })
  if (!res.ok) {
    console.error('Prijssync-melding versturen mislukt:', res.error)
    return { sent: false, reason: res.error }
  }
  await rememberAlert(hash)
  return { sent: true, to: ownerEmail(), count: failures.length }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, c => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ))
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
  // `failures` is optioneel, maar een run waarin ALLES misging is juist de
  // interessantste: daarom mag updates nu leeg zijn zolang er wel een rapport
  // is. Zonder allebei is er niets te doen.
  const failures = Array.isArray(body?.failures) ? body.failures : []
  if (!updates.length && !failures.length) {
    return NextResponse.json({ success: false, message: 'Geen updates of failures meegegeven' }, { status: 400 })
  }
  if (updates.length > MAX_UPDATES || failures.length > MAX_UPDATES) {
    return NextResponse.json({ success: false, message: `Te veel regels (max ${MAX_UPDATES})` }, { status: 400 })
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
      const set = {
        price: u.price,
        currency,
        priceLastUpdated: new Date(),
        updatedAt: new Date()
      }

      // originalPrice (de doorgestreepte vanprijs) alleen aanraken als de
      // aanroeper hem echt meestuurt. Stond hier `u.originalPrice ?? null`,
      // waardoor elke sync-run hem leegde: de runner stuurt alleen { id, price },
      // dus een handmatig gezette kortingsprijs was de volgende ochtend weg.
      // Expliciet null blijft wissen; ontbreken laat de kolom met rust.
      if (Object.prototype.hasOwnProperty.call(u, 'originalPrice')) {
        set.originalPrice = u.originalPrice ?? null
      }

      await db
        .update(snippets)
        .set(set)
        .where(eq(snippets.id, u.id))
      updated++
    } catch (err) {
      errors.push(`Fout bij ${u.id}: ${err.message}`)
    }
  }

  // Alleen regels met een geldige id mee de melding in; de rest is ruis en zou
  // de dedupe-hash onnodig laten wisselen.
  const schoneFailures = failures
    .filter(f => f?.id && typeof f.id === 'string' && ID_PATTERN.test(f.id))
    .map(f => ({
      id: f.id,
      name: typeof f.name === 'string' ? f.name.slice(0, 200) : '',
      website: typeof f.website === 'string' ? f.website.slice(0, 40) : '',
      type: typeof f.type === 'string' ? f.type.slice(0, 20) : '',
      reason: typeof f.reason === 'string' ? f.reason.slice(0, 200) : '',
      url: typeof f.url === 'string' ? f.url.slice(0, 500) : ''
    }))

  const alert = await maybeSendFailureAlert(schoneFailures)

  return NextResponse.json({ success: true, updated, errors, failures: schoneFailures.length, alert })
}
