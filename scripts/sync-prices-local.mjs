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

// amazon.nl/-/en/ toont "26.99", de NL-locale "26,99", en bij grotere bedragen
// komen 1.234,56 en 1,234.56 allebei voor. Het laatste scheidingsteken is dus
// de decimaal, de rest zijn duizendtallen.
function formatEuro(raw) {
  let s = String(raw).trim()
  const decimaal = Math.max(s.lastIndexOf(','), s.lastIndexOf('.'))
  if (decimaal !== -1) {
    s = s.slice(0, decimaal).replace(/[.,]/g, '') + '.' + s.slice(decimaal + 1)
  }
  const n = Number(s)
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

// amazon.nl/-/en/dp/<asin>?tag=... -> schone product-URL. Een prijssync mag
// geen klik registreren in Associates, dus de tracking-parameters gaan eruit.
// Variant-selectors (th/psc) blijven staan: die bepalen wélke uitvoering je ziet.
const AMAZON_TRACKING_PARAMS = ['tag', 'linkCode', 'linkId', 'ascsubtag', 'ref_', 'creative', 'creativeASIN', 'camp']
function resolveAmazonProductUrl(url) {
  try {
    const u = new URL(url)
    for (const param of AMAZON_TRACKING_PARAMS) u.searchParams.delete(param)
    return u.toString()
  } catch {
    return url
  }
}

// Amazon rendert de prijs alleen server-side als de buy box meekomt, en dat
// doet hij wisselend. Ontbreekt die, dan staan er nog steeds tientallen
// prijzen in de HTML, maar die horen bij de aanbevelings-carousels, dus bij
// ANDERE producten. Een paginabrede regex pakte daar een willekeurige van:
// zo kregen losse producten allemaal dezelfde vreemde prijs (€35,46).
// Daarom nu: alleen uit de prijs-container zelf, en anders liever niets.
const AMAZON_PRICE_CONTAINERS = ['corePriceDisplay_desktop_feature_div', 'corePrice_feature_div', 'apex_desktop']
function extractAmazonPrice(html) {
  // priceAmount hoort bij de buy box zelf en is de betrouwbaarste bron.
  const direct = html.match(/"priceAmount":\s*([0-9]+[.,][0-9]{1,2})/)
  if (direct) return { price: formatEuro(direct[1]), bron: 'priceAmount' }

  // Anders de eerste a-offscreen BINNEN de prijs-container, nooit daarbuiten.
  for (const id of AMAZON_PRICE_CONTAINERS) {
    const start = html.indexOf(`id="${id}"`)
    if (start === -1) continue
    const container = html.slice(start, start + 4000)
    const m = container.match(/a-offscreen"[^>]*>\s*€\s?([0-9][0-9.,]*[.,][0-9]{2})/)
    if (m) return { price: formatEuro(m[1]), bron: id }
  }
  return { price: null, bron: null }
}

async function fetchAmazon(url) {
  const res = await fetch(resolveAmazonProductUrl(url), {
    headers: { 'User-Agent': UA, 'Accept': 'text/html,*/*;q=0.8', 'Accept-Language': 'nl-NL,nl;q=0.9' },
    redirect: 'follow'
  })
  if (!res.ok) return { price: null, reason: `HTTP ${res.status}` }
  const html = await res.text()
  if (/captcha|automated access|api-services-support/i.test(html.slice(0, 5000))) {
    return { price: null, reason: 'captcha/bot' }
  }
  const { price, bron } = extractAmazonPrice(html)
  if (price) return { price, reason: `ok (${bron})` }

  // Expliciet benoemen waaróm er niets uitkwam. "Niet leverbaar" is een ander
  // probleem dan een gewijzigde URL, en dat verschil wil je in de melding zien
  // staan: het eerste vraagt om een vervangend product, het tweede om een
  // nieuwe link. Zonder dit onderscheid lijkt alles op een mislukte fetch en
  // blijft er ongemerkt een verouderde prijs op de site staan.
  if (/currently unavailable|momenteel niet beschikbaar|niet op voorraad|outOfStock/i.test(html)) {
    return { price: null, reason: 'niet leverbaar op Amazon (currently unavailable)' }
  }
  return { price: null, reason: `geen prijs in de buy box (${html.length}b, URL of ASIN gewijzigd?)` }
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
  const failures = []
  for (let i = 0; i < snippets.length; i++) {
    const s = snippets[i]
    const basis = { id: s.id, name: s.name, website: s.website, type: s.type, url: s.url }
    try {
      const { price, reason } = await fetchPrice(s.type, s.url)
      if (price) {
        updates.push({ id: s.id, price })
        console.log(`  ✓ ${price.padEnd(9)} ${s.name} [${s.website}]`)
      } else {
        failures.push({ ...basis, reason })
        console.log(`  ✗ ${'—'.padEnd(9)} ${s.name} (${reason})`)
      }
    } catch (err) {
      failures.push({ ...basis, reason: `fout: ${err.message}` })
      console.log(`  ✗ ${'—'.padEnd(9)} ${s.name} (fout: ${err.message})`)
    }
    if (i < snippets.length - 1) await sleep(2000) // rustig richting bol
  }

  if (!updates.length && !failures.length) {
    console.log('\nNiets te doen.')
    return
  }

  // Altijd rapporteren, ook als er 0 prijzen uitkwamen: juist zo'n run wil de
  // server weten, want die stuurt de melding naar info@vidorra.nl.
  const postRes = await fetch(`${SITE_URL}/api/cron/prices-local`, {
    method: 'POST',
    headers: { 'x-cron-secret': CRON_SECRET, 'Content-Type': 'application/json' },
    body: JSON.stringify({ updates, failures })
  })
  const result = await postRes.json().catch(() => ({}))
  console.log(`\nWeggeschreven: ${result.updated ?? 0}/${updates.length}${result.errors?.length ? ` (fouten: ${result.errors.join('; ')})` : ''}`)
  if (failures.length) {
    const a = result.alert || {}
    console.log(`Zonder prijs: ${failures.length}. Melding: ${a.sent ? `verstuurd naar ${a.to}` : `niet verstuurd (${a.reason || 'onbekend'})`}`)
  }
}

main().catch((err) => { console.error('Onverwachte fout:', err); process.exit(1) })
