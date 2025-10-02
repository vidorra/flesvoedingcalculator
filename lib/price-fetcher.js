import { JSDOM } from 'jsdom'

/**
 * Fetch price information from Bol.com product page
 * @param {string} url - Bol.com product URL
 * @returns {Promise<{price: string, originalPrice?: string, currency: string}>}
 */
export async function fetchBolPrice(url) {
  // Use more realistic headers to avoid 403 blocking
  const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:121.0) Gecko/20100101 Firefox/121.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Safari/605.1.15'
  ]

  console.log('🛒 Fetching Bol.com price for:', url)
  
  // Try up to 3 times with different user agents if we get 403
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`📝 Starting HTTP request (attempt ${attempt}/3)...`)
      
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
      
      if (!response.ok) {
        console.error(`❌ HTTP Error (attempt ${attempt}): ${response.status} ${response.statusText}`)
        
        // If it's a 403 and we have more attempts, try again with delay
        if (response.status === 403 && attempt < 3) {
          console.log(`⏳ Waiting 2 seconds before retry due to 403 error...`)
          await new Promise(resolve => setTimeout(resolve, 2000))
          continue
        }
        
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      // Success! Continue with parsing
      console.log('✅ HTTP request successful, parsing HTML...')
      const html = await response.text()
      console.log(`📄 HTML length: ${html.length} characters`)
      
      const dom = new JSDOM(html)
    const document = dom.window.document
    console.log('🔍 Starting price element search...')
    
    // Bol.com price selectors (updated for current structure)
    const priceSelectors = [
      '[data-test="price"]',
      '.promo-price',
      '.product-prices__bol-promo-price',
      '[data-test="buy-block-sticky-cta-price"]',
      '.price-block__price [data-test="price"]',
      '[data-test="priceBlockPrice"] [data-test="price"]'
    ]
    
    const originalPriceSelectors = [
      '[data-test="price-from"]',
      '[data-test="priceWithDiscount"]',
      '.price-block__price [data-test="price-was"]',
      '.was-price',
      '.price-was'
    ]
    
    let price = null
    let originalPrice = null
    
    // Try to find current price
    console.log('🔎 Trying price selectors:', priceSelectors)
    for (let i = 0; i < priceSelectors.length; i++) {
      const selector = priceSelectors[i]
      console.log(`🔍 Trying selector ${i + 1}/${priceSelectors.length}: ${selector}`)
      const priceElement = document.querySelector(selector)
      
      if (priceElement) {
        console.log(`✅ Found element with selector: ${selector}`)
        console.log(`📝 Element text content: "${priceElement.textContent.trim()}"`)
        
        if (priceElement.textContent.trim()) {
          let priceText = priceElement.textContent.trim()
        
          // Handle Bol.com's split price format (whole number + cents)
          const fractionElement = priceElement.querySelector('[data-test="price-fraction"], .promo-price__fraction')
          if (fractionElement && fractionElement.textContent.trim()) {
            console.log(`🔢 Found fraction element: "${fractionElement.textContent.trim()}"`)
            const wholePart = priceText.replace(fractionElement.textContent.trim(), '').trim()
            const fractionPart = fractionElement.textContent.trim()
            priceText = `€${wholePart},${fractionPart}`
            console.log(`💰 Assembled price: "${priceText}"`)
          } else if (priceText && !priceText.includes('€')) {
            // Add € symbol if missing and format as European price
            priceText = `€${priceText.replace(',', ',')}`
            console.log(`💱 Added currency symbol: "${priceText}"`)
          }
          
          if (priceText && priceText.length > 1) {
            console.log(`✅ Final price found: "${priceText}"`)
            price = priceText
            break
          } else {
            console.log(`❌ Price text too short or empty: "${priceText}"`)
          }
        } else {
          console.log(`❌ Element has no text content`)
        }
      } else {
        console.log(`❌ No element found for selector: ${selector}`)
      }
    }
    
    // Try to find original price (if discounted)
    for (const selector of originalPriceSelectors) {
      const priceElement = document.querySelector(selector)
      if (priceElement && priceElement.textContent.trim()) {
        let priceText = priceElement.textContent.trim()
        
        // Handle Bol.com's split price format for original price too
        const fractionElement = priceElement.querySelector('[data-test="price-fraction"], .promo-price__fraction')
        if (fractionElement && fractionElement.textContent.trim()) {
          const wholePart = priceText.replace(fractionElement.textContent.trim(), '').trim()
          const fractionPart = fractionElement.textContent.trim()
          priceText = `€${wholePart},${fractionPart}`
        } else if (priceText && !priceText.includes('€')) {
          // Add € symbol if missing and format as European price
          priceText = `€${priceText.replace(',', ',')}`
        }
        
        if (priceText && priceText.length > 1) {
          originalPrice = priceText
          break
        }
      }
    }
    
    // Clean price text (remove extra whitespace, keep € symbol)
    if (price) {
      price = price.replace(/\s+/g, ' ').trim()
    }
    if (originalPrice) {
      originalPrice = originalPrice.replace(/\s+/g, ' ').trim()
    }
    
    // Summary of results
    if (price) {
      console.log('✅ Bol.com price found:', { price, originalPrice })
      console.log('📊 Final price parsing result:', {
        raw_price: price,
        formatted_price: originalPrice ? `${price} (was ${originalPrice})` : price,
        currency: 'EUR',
        has_discount: !!originalPrice
      })
    } else {
      console.log('❌ No price found on Bol.com page')
      console.log('🔍 Available elements with "price" in class or attribute:')
      const allPriceElements = document.querySelectorAll('[class*="price"], [data-test*="price"], [id*="price"]')
      console.log(`📈 Found ${allPriceElements.length} price-related elements to analyze:`)
      allPriceElements.forEach((el, index) => {
        const textContent = el.textContent?.trim() || ''
        const hasEuroSymbol = textContent.includes('€')
        const hasNumbers = /\d/.test(textContent)
        console.log(`  ${index + 1}. ${el.tagName.toLowerCase()}`)
        console.log(`     class: "${el.className}"`)
        console.log(`     data-test: "${el.getAttribute('data-test') || 'none'}"`)
        console.log(`     text: "${textContent.substring(0, 100)}"`)
        console.log(`     has €: ${hasEuroSymbol}, has numbers: ${hasNumbers}`)
        console.log(`     `)
      })
      
      // Additional debug: Check for any elements containing price-like patterns
      const pricePatternElements = document.querySelectorAll('*')
      const priceMatches = []
      pricePatternElements.forEach(el => {
        const text = el.textContent?.trim() || ''
        if (text.match(/€\s*\d+[,.]?\d*/)) {
          priceMatches.push({
            tag: el.tagName.toLowerCase(),
            class: el.className || 'none',
            text: text.substring(0, 100)
          })
        }
      })
      
      if (priceMatches.length > 0) {
        console.log('💰 Found elements with €-price patterns:')
        priceMatches.slice(0, 10).forEach((match, index) => {
          console.log(`  ${index + 1}. ${match.tag} class="${match.class}" text="${match.text}"`)
        })
      } else {
        console.log('💸 No elements found with €-price patterns on the page')
      }
    }
    
      return {
        price: price || null,
        originalPrice: originalPrice || null,
        currency: 'EUR'
      }
      
    } catch (error) {
      console.error(`❌ Error on attempt ${attempt}:`, error.message)
      
      // If this was the last attempt, or not a 403 error, give up
      if (attempt === 3 || !error.message.includes('403')) {
        return {
          price: null,
          originalPrice: null,
          currency: 'EUR'
        }
      }
      
      // Wait before retrying
      console.log(`⏳ Waiting 2 seconds before retry due to error...`)
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
  }
  
  // Fallback if all attempts failed
  return {
    price: null,
    originalPrice: null,
    currency: 'EUR'
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