import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { JSDOM } from 'jsdom'
import bolAPI from '../../../../lib/bol-api.js'
import { verifyAdminAndGetWebsite } from '../../../../lib/jwt-utils.js'

export const dynamic = 'force-dynamic'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const SNIPPETS_FILE = path.join(DATA_DIR, 'snippets.json')
const HEALTH_FILE = path.join(DATA_DIR, 'health-check.json')

const USER_AGENTS = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
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

// Extract productId from snippet (from url, productId field, or generatedHtml)
function extractBolProductId(snippet) {
  if (snippet.productId) return snippet.productId
  // Extract from URL like https://www.bol.com/nl/nl/p/product-name/9300000062682298/
  if (snippet.url) {
    const match = snippet.url.match(/\/(\d{10,})\/?\s*$/)
    if (match) return match[1]
  }
  // Extract from generatedHtml
  if (snippet.generatedHtml) {
    const match = snippet.generatedHtml.match(/"productId"\s*:\s*"(\d+)"/)
    if (match) return match[1]
  }
  return null
}

function parsePrice(priceStr) {
  if (!priceStr) return null
  if (typeof priceStr === 'number') return priceStr
  const cleaned = String(priceStr).replace(/[€\s]/g, '').replace(',', '.')
  const num = parseFloat(cleaned)
  return isNaN(num) ? null : num
}

// Check Bol.com product via Partner API (no scraping, no 403s)
async function checkBolSnippet(snippet) {
  const productId = extractBolProductId(snippet)
  if (!productId) {
    return {
      id: snippet.id, name: snippet.name, url: snippet.url || null,
      status: 'skipped', available: null, currentPrice: null,
      storedPrice: snippet.price || null, priceChange: null,
      issues: ['No productId found - cannot check via API']
    }
  }

  try {
    const product = await bolAPI.getProduct(productId)

    const issues = []
    let available = true
    let currentPrice = null
    let status = 'ok'

    // Check availability from API response
    const offers = product.offerData?.offers || product.offers || []
    if (offers.length === 0) {
      available = false
      issues.push('Niet leverbaar - geen aanbieders gevonden')
      status = 'error'
    } else {
      // Check if any offer is available
      const hasAvailable = offers.some(o =>
        o.availabilityCode !== 'OUT_OF_STOCK' &&
        o.availabilityDescription !== 'Niet leverbaar'
      )
      if (!hasAvailable) {
        available = false
        issues.push('Niet leverbaar - alle aanbieders uitverkocht')
        status = 'error'
      }

      // Get best price from offers
      const prices = offers
        .map(o => o.price || o.bestOffer?.price)
        .filter(Boolean)
      if (prices.length > 0) {
        const lowestPrice = Math.min(...prices)
        currentPrice = `€${lowestPrice.toFixed(2).replace('.', ',')}`
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
          const direction = priceChange > 0 ? 'gestegen' : 'gedaald'
          issues.push(`Prijs ${direction} met ${Math.abs(priceChange)}% (${storedPrice} → ${currentPrice})`)
          if (status !== 'error') status = 'warning'
        }
      }
    }

    if (issues.length === 0) status = 'ok'

    return {
      id: snippet.id, name: snippet.name,
      url: snippet.url || `https://www.bol.com/nl/nl/p/-/${productId}/`,
      status, available, currentPrice,
      storedPrice, priceChange, issues
    }

  } catch (error) {
    // If API fails (e.g. product not found = 404), mark as error
    const is404 = error.message.includes('404')
    return {
      id: snippet.id, name: snippet.name,
      url: snippet.url || `https://www.bol.com/nl/nl/p/-/${productId}/`,
      status: 'error', available: is404 ? false : null, currentPrice: null,
      storedPrice: snippet.price || null, priceChange: null,
      issues: [is404 ? 'Product niet gevonden (404) - verwijderd van bol.com' : `API error: ${error.message}`]
    }
  }
}

// Check Amazon product via scraping (no API available)
async function checkAmazonSnippet(snippet) {
  if (!snippet.url) {
    return {
      id: snippet.id, name: snippet.name, url: null,
      status: 'skipped', available: null, currentPrice: null,
      storedPrice: snippet.price || null, priceChange: null,
      issues: ['No URL available']
    }
  }

  const ua = USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]

  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const response = await fetch(snippet.url, {
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

      if (response.status === 403 && attempt < 2) {
        await new Promise(r => setTimeout(r, 2000))
        continue
      }
      if (!response.ok) {
        return {
          id: snippet.id, name: snippet.name, url: snippet.url,
          status: 'error', available: null, currentPrice: null,
          storedPrice: snippet.price || null, priceChange: null,
          issues: [response.status === 403 ? 'Blocked by Amazon (403)' : `HTTP ${response.status} error`]
        }
      }

      const html = await response.text()
      const dom = new JSDOM(html)
      const doc = dom.window.document
      const bodyText = doc.body?.textContent?.toLowerCase() || ''

      const issues = []
      let available = true
      let currentPrice = null
      let status = 'ok'

      // Check availability
      const unavailablePatterns = ['currently unavailable', 'out of stock', 'niet leverbaar', 'niet beschikbaar']
      for (const pattern of unavailablePatterns) {
        if (bodyText.includes(pattern)) {
          available = false
          issues.push(`Product marked as "${pattern}"`)
          status = 'error'
          break
        }
      }

      // Extract price
      const amzSelectors = [
        '.a-price.a-text-price.a-size-medium.apexPriceToPay .a-offscreen',
        '.a-price-whole',
        '#price_inside_buybox',
        '.a-price .a-offscreen'
      ]
      for (const sel of amzSelectors) {
        const el = doc.querySelector(sel)
        if (el && el.textContent.trim()) {
          currentPrice = el.textContent.trim().replace(/\s+/g, ' ')
          break
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
        id: snippet.id, name: snippet.name, url: snippet.url,
        status, available, currentPrice,
        storedPrice, priceChange, issues
      }

    } catch (error) {
      if (attempt === 2) {
        return {
          id: snippet.id, name: snippet.name, url: snippet.url,
          status: 'error', available: null, currentPrice: null,
          storedPrice: snippet.price || null, priceChange: null,
          issues: [`Fetch error: ${error.message}`]
        }
      }
      await new Promise(r => setTimeout(r, 2000))
    }
  }
}

// Route snippet to the right checker
async function checkSnippet(snippet) {
  if (snippet.type === 'bol' || snippet.type === 'bol_snippet') {
    return await checkBolSnippet(snippet)
  }
  if (snippet.type === 'amazon' || snippet.type === 'amazon_image') {
    return await checkAmazonSnippet(snippet)
  }
  return {
    id: snippet.id, name: snippet.name, url: snippet.url || null,
    status: 'skipped', available: null, currentPrice: null,
    storedPrice: snippet.price || null, priceChange: null,
    issues: [`Unknown snippet type: ${snippet.type}`]
  }
}

// POST - Run health check on all active snippets
export async function POST(request) {
  try {
    verifyAdminAndGetWebsite(request)
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

      // Delay between requests (shorter for API calls, longer for scraping)
      if (i < activeSnippets.length - 1) {
        const delay = (snippet.type === 'amazon' || snippet.type === 'amazon_image') ? 2000 : 500
        await new Promise(r => setTimeout(r, delay))
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
    if (error.message.includes('token') || error.message.includes('Token')) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }
    console.error('❌ Health check failed:', error)
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// GET - Return last health check results
export async function GET(request) {
  try {
    verifyAdminAndGetWebsite(request)
  } catch {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
  }
  const data = loadHealthResults()
  if (!data) {
    return NextResponse.json({ success: true, lastChecked: null, results: {} })
  }
  return NextResponse.json({ success: true, ...data })
}
