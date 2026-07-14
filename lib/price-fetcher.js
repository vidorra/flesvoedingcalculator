import { JSDOM } from 'jsdom'

const BOL_UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

/**
 * Zet een partner.bol.com/click-URL om naar de schone product-URL.
 * De affiliate-link is een redirect met de echte product-URL in de
 * `url=`-parameter; die productpagina bevat de JSON-LD met de prijs.
 */
function resolveBolProductUrl(url) {
  try {
    const u = new URL(url)
    if (/partner\.bol\.com/i.test(u.hostname)) {
      const target = u.searchParams.get('url')
      if (target) return decodeURIComponent(target)
    }
  } catch {
    // geen geldige URL: gebruik zoals hij is
  }
  return url
}

// "31.14" of "31" -> "€31,14" (Nederlandse notatie)
function formatEuro(raw) {
  const n = Number(String(raw).replace(',', '.'))
  if (!isFinite(n) || n <= 0) return null
  return '€' + n.toFixed(2).replace('.', ',')
}

/**
 * Haal de prijs uit de JSON-LD van een bol.com-productpagina.
 *
 * Bol rendert de prijs client-side: er staat GEEN data-test="price" in de
 * server-HTML (daarom werkten de oude CSS-selectors nooit). De prijs staat
 * wél server-side in een <script type="application/ld+json"> als offers.price,
 * genest in een ProductGroup/Product. Dat is de stabiele bron.
 *
 * @returns {{price: string|null, originalPrice: string|null, currency: string}}
 */
function extractOfferFromJsonLd(html) {
  const blocks = [...html.matchAll(
    /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi
  )].map((m) => m[1])

  const offers = []
  const walk = (node) => {
    if (!node || typeof node !== 'object') return
    if (Array.isArray(node)) {
      node.forEach(walk)
      return
    }
    const collect = (o) => {
      if (o && typeof o === 'object' && o.price != null) {
        offers.push({ price: String(o.price), currency: o.priceCurrency || 'EUR' })
      }
    }
    if (Array.isArray(node.offers)) node.offers.forEach(collect)
    else collect(node.offers)
    Object.values(node).forEach(walk)
  }

  for (const block of blocks) {
    try {
      walk(JSON.parse(block.trim()))
    } catch {
      // JSON kapot of te groot: regex-fallback op het ruwe blok
      const m = block.match(/"offers"\s*:\s*\{[^}]*?"price"\s*:\s*"?([0-9]+(?:\.[0-9]{1,2})?)"?/)
      if (m) offers.push({ price: m[1], currency: 'EUR' })
    }
  }

  // Laatste redmiddel: geen ld+json-blok gevonden of niks eruit gehaald, maar de
  // prijs kan alsnog ergens in de ruwe HTML als offers-object staan.
  if (!offers.length) {
    const m = html.match(/"offers"\s*:\s*\{[^}]*?"price"\s*:\s*"?([0-9]+(?:\.[0-9]{1,2})?)"?/)
    if (m) offers.push({ price: m[1], currency: 'EUR' })
  }

  if (!offers.length) {
    return { price: null, originalPrice: null, currency: 'EUR' }
  }
  // De eerste offer in de JSON-LD is het hoofdproduct van de pagina
  // (variant-offers volgen erna). Dat is de prijs die de bezoeker ziet.
  return { price: formatEuro(offers[0].price), originalPrice: null, currency: offers[0].currency }
}

/**
 * Fetch price information from a Bol.com product page.
 * @param {string} url - Bol.com product- of partner-click-URL
 * @returns {Promise<{price: string|null, originalPrice: string|null, currency: string}>}
 */
export async function fetchBolPrice(url, snippetData = null) {
  const productUrl = resolveBolProductUrl(url)
  let debug = 'geen poging'

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(productUrl, {
        headers: {
          'User-Agent': BOL_UA,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'nl-NL,nl;q=0.9,en;q=0.8'
        },
        redirect: 'follow'
      })

      if (!res.ok) {
        debug = `HTTP ${res.status}`
        // 403/429: bol weert ons kortstondig; even wachten en opnieuw
        if ((res.status === 403 || res.status === 429) && attempt < 3) {
          await new Promise((r) => setTimeout(r, 1500 * attempt))
          continue
        }
        return { price: null, originalPrice: null, currency: 'EUR', _debug: debug }
      }

      const html = await res.text()
      const hasLdJson = /application\/ld\+json/i.test(html)
      const result = extractOfferFromJsonLd(html)
      // Diagnostisch stempel: onderscheidt bot-pagina (klein, geen ld+json)
      // van een parserfout (grote pagina met ld+json maar geen prijs eruit).
      result._debug = `HTTP 200, ${html.length}b, ld+json:${hasLdJson ? 'ja' : 'nee'}, prijs:${result.price || 'nee'}`
      return result
    } catch (err) {
      debug = `fetch-fout: ${err.message}`
      if (attempt === 3) return { price: null, originalPrice: null, currency: 'EUR', _debug: debug }
      await new Promise((r) => setTimeout(r, 1500 * attempt))
    }
  }

  return { price: null, originalPrice: null, currency: 'EUR', _debug: debug }
}

/**
 * Fetch price information from Amazon product page
 * @param {string} url - Amazon product URL
 * @returns {Promise<{price: string, originalPrice?: string, currency: string}>}
 */
export async function fetchAmazonPrice(url) {
  // Use more realistic headers similar to Bol.com approach
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15'
  ]

  // Try up to 3 times with different user agents if we get 403
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`🛒 Fetching Amazon price for: ${url} (attempt ${attempt}/3)`)

      const randomUserAgent = userAgents[Math.floor(Math.random() * userAgents.length)]
      console.log(`🤖 Using User-Agent: ${randomUserAgent.substring(0, 50)}...`)

      const response = await fetch(url, {
        headers: {
          'User-Agent': randomUserAgent,
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
          'Accept-Language': 'nl-NL,nl;q=0.9,en;q=0.8',
          'Accept-Encoding': 'gzip, deflate, br',
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
          'Upgrade-Insecure-Requests': '1'
        }
      })

      if (response.status === 403) {
        console.warn(`⚠️ Amazon blocked request (403) on attempt ${attempt}, retrying with different user agent...`)
        if (attempt < 3) {
          await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000)) // Random delay 1-3s
          continue
        }
        throw new Error(`HTTP 403 - Amazon blocked requests after ${attempt} attempts`)
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`)
      }

      const html = await response.text()
      const dom = new JSDOM(html)
      const document = dom.window.document

      // Amazon price selectors (they use many different formats)
      const priceSelectors = [
        '.a-price.a-text-price.a-size-medium.apexPriceToPay .a-offscreen',
        '.a-price-whole',
        '#price_inside_buybox',
        '.a-price .a-offscreen',
        '#priceblock_dealprice',
        '#priceblock_ourprice',
        '.a-price-range .a-price .a-offscreen',
        '[data-asin-price]',
        '.a-price-current .a-offscreen',
        '.a-price .a-text-bold',
        '.a-price-current',
        '.a-text-price .a-offscreen'
      ]

      const originalPriceSelectors = [
        '.a-price.a-text-strike .a-offscreen',
        '#priceblock_listprice',
        '.a-price-was .a-offscreen',
        '.a-text-strike .a-offscreen',
        '.a-price-old .a-offscreen'
      ]

      let price = null
      let originalPrice = null

      // Try to find current price
      for (const selector of priceSelectors) {
        const priceElement = document.querySelector(selector)
        if (priceElement && priceElement.textContent.trim()) {
          price = priceElement.textContent.trim()
          console.log(`💰 Found price with selector "${selector}": ${price}`)
          break
        }
      }

      // Try to find original price (if discounted)
      for (const selector of originalPriceSelectors) {
        const priceElement = document.querySelector(selector)
        if (priceElement && priceElement.textContent.trim()) {
          originalPrice = priceElement.textContent.trim()
          console.log(`💰 Found original price with selector "${selector}": ${originalPrice}`)
          break
        }
      }

      // Clean price text
      if (price) {
        price = price.replace(/\s+/g, ' ').trim()
      }
      if (originalPrice) {
        originalPrice = originalPrice.replace(/\s+/g, ' ').trim()
      }

      console.log('✅ Amazon price found:', { price, originalPrice })

      return {
        price: price || null,
        originalPrice: originalPrice || null,
        currency: 'EUR'
      }

    } catch (error) {
      console.error(`❌ Error fetching Amazon price (attempt ${attempt}):`, error.message)
      if (attempt === 3) {
        return {
          price: null,
          originalPrice: null,
          currency: 'EUR'
        }
      }
      // Continue to next attempt
    }
  }

  // Fallback if all attempts failed
  console.error('❌ All Amazon price fetching attempts failed')
  return {
    price: null,
    originalPrice: null,
    currency: 'EUR'
  }
}

/**
 * Fetch price for any supported platform
 * @param {string} url - Product URL
 * @param {string} type - Platform type ('bol' or 'amazon')
 * @param {object} snippetData - Additional snippet data for script-based extraction
 * @returns {Promise<{price: string, originalPrice?: string, currency: string}>}
 */
export async function fetchPrice(url, type, snippetData = null) {
  switch (type) {
    case 'bol':
      return await fetchBolPrice(url, snippetData)
    case 'amazon':
      return await fetchAmazonPrice(url)
    default:
      console.warn(`❌ Unsupported platform type: ${type}`)
      return {
        price: null,
        originalPrice: null,
        currency: 'EUR'
      }
  }
}

/**
 * Generate price display HTML for snippets
 * @param {string} price - Current price
 * @param {string} originalPrice - Original price (if discounted)
 * @returns {string} - HTML for price display
 */
export function generatePriceHtml(price, originalPrice) {
  if (!price) return ''

  let priceHtml = `<div class="price-info" style="margin-top: 8px; text-align: center;">`

  if (originalPrice && originalPrice !== price) {
    // Discounted price
    priceHtml += `<span style="color: #e74c3c; font-weight: bold; font-size: 18px;">${price}</span>`
    priceHtml += `<span style="color: #7f8c8d; text-decoration: line-through; margin-left: 8px; font-size: 14px;">${originalPrice}</span>`
  } else {
    // Regular price
    priceHtml += `<span style="color: #2c3e50; font-weight: bold; font-size: 16px;">${price}</span>`
  }

  priceHtml += `</div>`
  return priceHtml
}
