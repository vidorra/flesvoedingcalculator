import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { JSDOM } from 'jsdom'

export const dynamic = 'force-dynamic'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const SNIPPETS_FILE = path.join(DATA_DIR, 'snippets.json')
const HEALTH_FILE = path.join(DATA_DIR, 'health-check.json')

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15'
]

const UNAVAILABLE_PATTERNS = [
  'niet leverbaar',
  'niet beschikbaar',
  'uitverkocht',
  'currently unavailable',
  'out of stock'
]

function loadSnippets() {
  try {
    if (!fs.existsSync(SNIPPETS_FILE)) return []
    return JSON.parse(fs.readFileSync(SNIPPETS_FILE, 'utf8'))
  } catch { return [] }
}

function saveHealthResults(data) {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true })
  fs.writeFileSync(HEALTH_FILE, JSON.stringify(data, null, 2))
}

function loadHealthResults() {
  try {
    if (!fs.existsSync(HEALTH_FILE)) return null
    return JSON.parse(fs.readFileSync(HEALTH_FILE, 'utf8'))
  } catch { return null }
}

// Get direct (non-affiliate) product URL
function getDirectUrl(snippet) {
  if (snippet.type === 'bol' && snippet.url) {
    return snippet.url
  }
  if (snippet.type === 'bol_snippet' && snippet.productId) {
    return `https://www.bol.com/nl/nl/p/-/${snippet.productId}/`
  }
  if ((snippet.type === 'amazon' || snippet.type === 'amazon_image') && snippet.url) {
    return snippet.url
  }
  return null
}

// Parse price string to number (handles "€24,99", "€ 24.99", "24,99", etc.)
function parsePrice(priceStr) {
  if (!priceStr) return null
  const cleaned = priceStr.replace(/[€\s]/g, '').replace(',', '.')
  const num = parseFloat(cleaned)
  return isNaN(num) ? null : num
}

// Check a single snippet's product page
async function checkSnippet(snippet) {
  const url = getDirectUrl(snippet)
  if (!url) {
    return {
      id: snippet.id,
      name: snippet.name,
      url: null,
      status: 'skipped',
      available: null,
      currentPrice: null,
      storedPrice: snippet.price || null,
      priceChange: null,
      issues: ['No direct URL available for this snippet type']
    }
  }

  const ua = USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': ua,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'nl-NL,nl;q=0.9,en;q=0.8',
          'Cache-Control': 'no-cache',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
          'Upgrade-Insecure-Requests': '1'
        }
      })

      const issues = []
      let available = true
      let currentPrice = null
      let status = 'ok'

      if (response.status === 404) {
        return {
          id: snippet.id, name: snippet.name, url,
          status: 'error', available: false, currentPrice: null,
          storedPrice: snippet.price || null, priceChange: null,
          issues: ['Product page returns 404 - page not found']
        }
      }

      if (response.status === 403) {
        if (attempt < 2) {
          await new Promise(r => setTimeout(r, 2000))
          continue
        }
        return {
          id: snippet.id, name: snippet.name, url,
          status: 'error', available: null, currentPrice: null,
          storedPrice: snippet.price || null, priceChange: null,
          issues: ['Blocked by website (403) - could not check']
        }
      }

      if (!response.ok) {
        return {
          id: snippet.id, name: snippet.name, url,
          status: 'error', available: null, currentPrice: null,
          storedPrice: snippet.price || null, priceChange: null,
          issues: [`HTTP ${response.status} error`]
        }
      }

      const html = await response.text()
      const dom = new JSDOM(html)
      const doc = dom.window.document
      const bodyText = doc.body?.textContent?.toLowerCase() || ''

      // Check availability
      for (const pattern of UNAVAILABLE_PATTERNS) {
        if (bodyText.includes(pattern)) {
          available = false
          issues.push(`Product marked as "${pattern}"`)
          status = 'error'
          break
        }
      }

      // Also check for data-test attribute
      if (doc.querySelector('[data-test="not-available"]')) {
        available = false
        issues.push('Product marked as unavailable (data-test)')
        status = 'error'
      }

      // Extract price (Bol.com selectors)
      if (url.includes('bol.com')) {
        const bolSelectors = [
          '[data-test="price"]',
          '.promo-price',
          '.product-prices__bol-promo-price',
          '[data-test="buy-block-sticky-cta-price"]'
        ]
        for (const sel of bolSelectors) {
          const el = doc.querySelector(sel)
          if (el && el.textContent.trim()) {
            let priceText = el.textContent.trim()
            const fractionEl = el.querySelector('[data-test="price-fraction"], .promo-price__fraction')
            if (fractionEl && fractionEl.textContent.trim()) {
              const whole = priceText.replace(fractionEl.textContent.trim(), '').trim()
              priceText = `€${whole},${fractionEl.textContent.trim()}`
            } else if (!priceText.includes('€')) {
              priceText = `€${priceText}`
            }
            if (priceText.length > 1) {
              currentPrice = priceText.replace(/\s+/g, ' ').trim()
              break
            }
          }
        }
      }

      // Extract price (Amazon selectors)
      if (url.includes('amazon')) {
        const amzSelectors = [
          '.a-price.a-text-price.a-size-medium.apexPriceToPay .a-offscreen',
          '.a-price-whole',
          '#price_inside_buybox',
          '.a-price .a-offscreen'
        ]
        for (const sel of amzSelectors) {
          const el = doc.querySelector(sel)
          if (el && el.textContent.trim()) {
            currentPrice = el.textContent.trim()
            break
          }
        }
      }

      // Compare prices
      const storedPrice = snippet.price || null
      let priceChange = null

      if (currentPrice && storedPrice) {
        const currentNum = parsePrice(currentPrice)
        const storedNum = parsePrice(storedPrice)
        if (currentNum && storedNum && storedNum > 0) {
          priceChange = Math.round(((currentNum - storedNum) / storedNum) * 100)
          if (Math.abs(priceChange) > 15) {
            const direction = priceChange > 0 ? 'increased' : 'decreased'
            issues.push(`Price ${direction} by ${Math.abs(priceChange)}% (${storedPrice} → ${currentPrice})`)
            if (status !== 'error') status = 'warning'
          }
        }
      }

      if (issues.length === 0) status = 'ok'

      return {
        id: snippet.id, name: snippet.name, url,
        status, available, currentPrice,
        storedPrice, priceChange, issues
      }

    } catch (error) {
      if (attempt === 2) {
        return {
          id: snippet.id, name: snippet.name, url,
          status: 'error', available: null, currentPrice: null,
          storedPrice: snippet.price || null, priceChange: null,
          issues: [`Fetch error: ${error.message}`]
        }
      }
      await new Promise(r => setTimeout(r, 2000))
    }
  }
}

// POST - Run health check on all active snippets
export async function POST() {
  try {
    console.log('🏥 Starting snippet health check...')
    const snippets = loadSnippets()
    const activeSnippets = snippets.filter(s => s.active !== false)

    console.log(`📊 Checking ${activeSnippets.length} active snippets`)

    const results = []

    for (let i = 0; i < activeSnippets.length; i++) {
      const snippet = activeSnippets[i]
      console.log(`🔍 Checking "${snippet.name}" (${i + 1}/${activeSnippets.length})`)

      const result = await checkSnippet(snippet)
      results.push(result)

      console.log(`  → ${result.status}: ${result.issues.length > 0 ? result.issues.join(', ') : 'OK'}`)

      // Delay between requests
      if (i < activeSnippets.length - 1) {
        await new Promise(r => setTimeout(r, 2000))
      }
    }

    // Save results
    const healthData = {
      lastChecked: new Date().toISOString(),
      results: {}
    }
    for (const r of results) {
      healthData.results[r.id] = {
        status: r.status,
        available: r.available,
        currentPrice: r.currentPrice,
        priceChange: r.priceChange,
        issues: r.issues,
        checkedAt: new Date().toISOString()
      }
    }
    saveHealthResults(healthData)

    const okCount = results.filter(r => r.status === 'ok').length
    const warnCount = results.filter(r => r.status === 'warning').length
    const errorCount = results.filter(r => r.status === 'error').length
    const skippedCount = results.filter(r => r.status === 'skipped').length

    console.log(`🏁 Health check complete: ${okCount} OK, ${warnCount} warnings, ${errorCount} errors, ${skippedCount} skipped`)

    return NextResponse.json({
      success: true,
      summary: { ok: okCount, warnings: warnCount, errors: errorCount, skipped: skippedCount, total: results.length },
      results
    })

  } catch (error) {
    console.error('❌ Health check failed:', error)
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }
}

// GET - Return last health check results
export async function GET() {
  const data = loadHealthResults()
  if (!data) {
    return NextResponse.json({ success: true, lastChecked: null, results: {} })
  }
  return NextResponse.json({ success: true, ...data })
}
