import { JSDOM } from 'jsdom'

/**
 * Fetch price information from Bol.com product page
 * @param {string} url - Bol.com product URL
 * @returns {Promise<{price: string, originalPrice?: string, currency: string}>}
 */
export async function fetchBolPrice(url) {
  try {
    console.log('🛒 Fetching Bol.com price for:', url)
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    
    const html = await response.text()
    const dom = new JSDOM(html)
    const document = dom.window.document
    
    // Bol.com price selectors (they use multiple formats)
    const priceSelectors = [
      '[data-test="price-current"]',
      '.promo-price',
      '.price-current',
      '.js_price_current',
      '[class*="price"][class*="current"]'
    ]
    
    const originalPriceSelectors = [
      '[data-test="price-from"]',
      '.was-price',
      '.price-was',
      '.js_price_was',
      '[class*="price"][class*="was"]'
    ]
    
    let price = null
    let originalPrice = null
    
    // Try to find current price
    for (const selector of priceSelectors) {
      const priceElement = document.querySelector(selector)
      if (priceElement) {
        price = priceElement.textContent.trim()
        break
      }
    }
    
    // Try to find original price (if discounted)
    for (const selector of originalPriceSelectors) {
      const priceElement = document.querySelector(selector)
      if (priceElement) {
        originalPrice = priceElement.textContent.trim()
        break
      }
    }
    
    // Clean price text (remove extra whitespace, keep € symbol)
    if (price) {
      price = price.replace(/\s+/g, ' ').trim()
    }
    if (originalPrice) {
      originalPrice = originalPrice.replace(/\s+/g, ' ').trim()
    }
    
    console.log('✅ Bol.com price found:', { price, originalPrice })
    
    return {
      price: price || null,
      originalPrice: originalPrice || null,
      currency: 'EUR'
    }
    
  } catch (error) {
    console.error('❌ Error fetching Bol.com price:', error.message)
    return {
      price: null,
      originalPrice: null,
      currency: 'EUR'
    }
  }
}

/**
 * Fetch price information from Amazon product page
 * @param {string} url - Amazon product URL
 * @returns {Promise<{price: string, originalPrice?: string, currency: string}>}
 */
export async function fetchAmazonPrice(url) {
  try {
    console.log('🛒 Fetching Amazon price for:', url)
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'nl-NL,nl;q=0.9,en;q=0.8'
      }
    })
    
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
      '.a-price-current .a-offscreen'
    ]
    
    const originalPriceSelectors = [
      '.a-price.a-text-strike .a-offscreen',
      '#priceblock_listprice',
      '.a-price-was .a-offscreen',
      '.a-text-strike .a-offscreen'
    ]
    
    let price = null
    let originalPrice = null
    
    // Try to find current price
    for (const selector of priceSelectors) {
      const priceElement = document.querySelector(selector)
      if (priceElement && priceElement.textContent.trim()) {
        price = priceElement.textContent.trim()
        break
      }
    }
    
    // Try to find original price (if discounted)
    for (const selector of originalPriceSelectors) {
      const priceElement = document.querySelector(selector)
      if (priceElement && priceElement.textContent.trim()) {
        originalPrice = priceElement.textContent.trim()
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
    console.error('❌ Error fetching Amazon price:', error.message)
    return {
      price: null,
      originalPrice: null,
      currency: 'EUR'
    }
  }
}

/**
 * Fetch price for any supported platform
 * @param {string} url - Product URL
 * @param {string} type - Platform type ('bol' or 'amazon')
 * @returns {Promise<{price: string, originalPrice?: string, currency: string}>}
 */
export async function fetchPrice(url, type) {
  switch (type) {
    case 'bol':
      return await fetchBolPrice(url)
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