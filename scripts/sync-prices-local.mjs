#!/usr/bin/env node
/**
 * Lokale prijssync voor bol.com- en amazon.nl-producten.
 *
 * Waarom lokaal: bol.com én amazon.nl serveren server-IP's (Hetzner/CapRover
 * en ook GitHub-runners) HTTP 403 / captcha, dus de nachtelijke cloud-sync kan
 * de prijs nooit ophalen. Vanaf een gewone thuis-/kantoorverbinding lukt het
 * wél. Dit script
 * draait dus op de laptop van de beheerder: het haalt de bol-productpagina op,
 * leest de prijs uit de JSON-LD, en POST de prijzen naar de productie-DB via
 * /api/cron/prices-local. Bezoekers zien nooit een extern script (geen cookies).
 *
 * Gebruik:
 *   CRON_SECRET=... node scripts/sync-prices-local.mjs
 *   (of: npm run sync:prices   met CRON_SECRET in je omgeving)
 *
 * Env:
 *   CRON_SECRET  (verplicht)  hetzelfde geheim als in CapRover
 *   SITE_URL     (optioneel)  standaard https://flesvoedingcalculator.nl
 */

const SITE_URL = (process.env.SITE_URL || 'https://flesvoedingcalculator.nl').replace(/\/$/, '')
const CRON_SECRET = process.env.CRON_SECRET
const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

if (!CRON_SECRET) {
  console.error('CRON_SECRET ontbreekt. Draai: CRON_SECRET=... node scripts/sync-prices-local.mjs')
  process.exit(1)
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// partner.bol.com/click...url=<encoded> -> schone product-URL
function resolveBolProductUrl(url) {
  try {
    const u = new URL(url)
    if (/partner\.bol\.com/i.test(u.hostname)) {
      const target = u.searchParams.get('url')
      if (target) return decodeURIComponent(target)
    }
  } catch {}
  return url
}

function formatEuro(raw) {
  const n = Number(String(raw).replace(',', '.'))
  if (!isFinite(n) || n <= 0) return null
  return '€' + n.toFixed(2).replace('.', ',')
}

// Prijs uit de JSON-LD (offers.price); eerste offer = hoofdproduct.
function extractPrice(html) {
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1])
  const found = []
  const walk = (node) => {
    if (!node || typeof node !== 'object') return
    if (Array.isArray(node)) return node.forEach(walk)
    const collect = (o) => { if (o && typeof o === 'object' && o.price != null) found.push(String(o.price)) }
    if (Array.isArray(node.offers)) node.offers.forEach(collect)
    else collect(node.offers)
    Object.values(node).forEach(walk)
  }
  for (const b of blocks) {
    try { walk(JSON.parse(b.trim())) }
    catch {
      const m = b.match(/"offers"\s*:\s*\{[^}]*?"price"\s*:\s*"?([0-9]+(?:\.[0-9]{1,2})?)"?/)
      if (m) found.push(m[1])
    }
  }
  if (!found.length) {
    const m = html.match(/"offers"\s*:\s*\{[^}]*?"price"\s*:\s*"?([0-9]+(?:\.[0-9]{1,2})?)"?/)
    if (m) found.push(m[1])
  }
  return found.length ? formatEuro(found[0]) : null
}

async function fetchBol(url) {
  const productUrl = resolveBolProductUrl(url)
  const res = await fetch(productUrl, {
    headers: { 'User-Agent': UA, 'Accept': 'text/html,*/*;q=0.8', 'Accept-Language': 'nl-NL,nl;q=0.9' },
    redirect: 'follow'
  })
  if (!res.ok) return { price: null, reason: `HTTP ${res.status}` }
  const html = await res.text()
  const price = extractPrice(html)
  return { price, reason: price ? 'ok' : `geen prijs (${html.length}b)` }
}

// Amazon rendert de prijs wél server-side. Stabielste bron is "priceAmount"
// in de embedded JSON; anders de eerste a-offscreen met een euro-bedrag
// (dat is de buy-box-prijs; latere zijn doorstreepte/andere aanbiedingen).
async function fetchAmazon(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': UA, 'Accept': 'text/html,*/*;q=0.8', 'Accept-Language': 'nl-NL,nl;q=0.9' },
    redirect: 'follow'
  })
  if (!res.ok) return { price: null, reason: `HTTP ${res.status}` }
  const html = await res.text()
  if (/captcha|automated access|api-services-support/i.test(html.slice(0, 5000))) {
    return { price: null, reason: 'captcha/bot' }
  }
  let m = html.match(/"priceAmount":\s*([0-9]+\.[0-9]{1,2})/)
  if (m) return { price: formatEuro(m[1]), reason: 'ok' }
  m = html.match(/a-offscreen">\s*€\s?([0-9][0-9.]*,[0-9]{2})/)
  if (m) return { price: `€${m[1]}`, reason: 'ok' }
  return { price: null, reason: `geen prijs (${html.length}b)` }
}

async function fetchPrice(type, url) {
  return String(type).includes('amazon') ? fetchAmazon(url) : fetchBol(url)
}

async function main() {
  console.log(`Doel: ${SITE_URL}`)

  const listRes = await fetch(`${SITE_URL}/api/cron/prices-local`, {
    headers: { 'x-cron-secret': CRON_SECRET }
  })
  if (!listRes.ok) {
    console.error(`Lijst ophalen mislukt: HTTP ${listRes.status} ${await listRes.text()}`)
    process.exit(1)
  }
  const { snippets = [] } = await listRes.json()
  console.log(`${snippets.length} producten te prijzen (bol + amazon).\n`)

  const updates = []
  for (let i = 0; i < snippets.length; i++) {
    const s = snippets[i]
    try {
      const { price, reason } = await fetchPrice(s.type, s.url)
      if (price) {
        updates.push({ id: s.id, price })
        console.log(`  ✓ ${price.padEnd(9)} ${s.name} [${s.website}]`)
      } else {
        console.log(`  ✗ ${'—'.padEnd(9)} ${s.name} (${reason})`)
      }
    } catch (err) {
      console.log(`  ✗ ${'—'.padEnd(9)} ${s.name} (fout: ${err.message})`)
    }
    if (i < snippets.length - 1) await sleep(2000) // rustig richting bol
  }

  if (!updates.length) {
    console.log('\nGeen prijzen gevonden; niets weggeschreven.')
    return
  }

  const postRes = await fetch(`${SITE_URL}/api/cron/prices-local`, {
    method: 'POST',
    headers: { 'x-cron-secret': CRON_SECRET, 'Content-Type': 'application/json' },
    body: JSON.stringify({ updates })
  })
  const result = await postRes.json().catch(() => ({}))
  console.log(`\nWeggeschreven: ${result.updated ?? 0}/${updates.length}${result.errors?.length ? ` (fouten: ${result.errors.join('; ')})` : ''}`)
}

main().catch((err) => { console.error('Onverwachte fout:', err); process.exit(1) })
