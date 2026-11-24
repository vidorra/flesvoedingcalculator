import { NextResponse } from 'next/server'
import { fetchPrice, generatePriceHtml } from '../../../../lib/price-fetcher.js'
import { verifyAdminAndGetWebsite } from '../../../../lib/jwt-utils.js'
import { assertPubliekeUrl, veiligFetch, GeweigerdeUrlFout } from '../../../../lib/safe-fetch.js'
import { readJsonCapped } from '../../../../lib/read-body.js'

const MAX_URL_LENGTE = 2048

// Gescrapete titels en URL's komen in HTML terecht die op de site wordt
// getoond. Alles escapen; entiteiten uit <title> eerst terugzetten zodat
// "&amp;" niet als "&amp;amp;" eindigt.
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ))
}

function codepunt(n) {
  return Number.isInteger(n) && n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : ''
}

function decodeEntities(value) {
  return String(value)
    .replace(/&#(\d+);/g, (_, n) => codepunt(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => codepunt(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&(#39|apos);/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
}

function schoneTitel(ruw, fallback) {
  const titel = decodeEntities(ruw).replace(/\s+/g, ' ').trim().slice(0, 200)
  return titel || fallback
}

// Alleen https-afbeeldingen; al het andere wordt de standaardafbeelding.
function veiligeAfbeelding(url, fallback) {
  try {
    return new URL(url).protocol === 'https:' ? url : fallback
  } catch {
    return fallback
  }
}

// Force dynamic route
export const dynamic = 'force-dynamic'

// Simple in-memory rate limiter: max 10 requests per minute
const requestLog = []
function checkRateLimit() {
  const now = Date.now()
  const oneMinuteAgo = now - 60000
  // Remove old entries
  while (requestLog.length > 0 && requestLog[0] < oneMinuteAgo) {
    requestLog.shift()
  }
  if (requestLog.length >= 10) {
    return false
  }
  requestLog.push(now)
  return true
}

// Verify admin JWT token
function isAuthenticated(request) {
  try {
    verifyAdminAndGetWebsite(request)
    return true
  } catch {
    return false
  }
}

// Extract Amazon ASIN from various URL formats
function extractAmazonASIN(url) {
  const patterns = [
    /\/dp\/([A-Z0-9]{10})/i,      // /dp/B0FN47MMXK
    /\/product\/([A-Z0-9]{10})/i,  // /product/B0FN47MMXK
    /\/gp\/product\/([A-Z0-9]{10})/i, // /gp/product/B0FN47MMXK
    /asin=([A-Z0-9]{10})/i,        // asin=B0FN47MMXK
    /\/([A-Z0-9]{10})\?/i,         // /B0FN47MMXK?
    /\/([A-Z0-9]{10})$/i           // /B0FN47MMXK
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) {
      return match[1]
    }
  }
  
  return null
}

// Follow redirects to get final URL. Elke hop gaat eerst langs
// assertPubliekeUrl; een geweigerde hop gooit GeweigerdeUrlFout door.
async function followRedirects(shortUrl, maxRedirects = 5) {
  let currentUrl = shortUrl

  for (let hop = 0; hop < maxRedirects; hop++) {
    await assertPubliekeUrl(currentUrl)
    let response
    try {
      // GET met browser-headers: Amazon weigert HEAD-requests en kale
      // datacenter-fetches vaak; de redirect-Location komt bij GET meestal
      // wel door voordat een bot-check kan ingrijpen.
      response = await fetch(currentUrl, {
        method: 'GET',
        redirect: 'manual',
        headers: {
          'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,*/*;q=0.8',
          'Accept-Language': 'nl-NL,nl;q=0.9'
        }
      })
    } catch {
      break
    }

    const location = response.status >= 300 && response.status < 400
      ? response.headers.get('location')
      : null
    if (!location) break
    currentUrl = new URL(location, currentUrl).href
  }

  return currentUrl
}

// Fetch Amazon product details by scraping the page
async function fetchAmazonProductDetails(asin, finalUrl) {
  try {
    console.log('Fetching Amazon product details for ASIN:', asin)
    
    // Try to fetch the Amazon page
    const response = await veiligFetch(finalUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'en-US,en;q=0.9,nl;q=0.8'
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    
    const html = await response.text()
    
    // Extract title
    const fallbackTitle = `Amazon Product ${asin}`
    let title = fallbackTitle
    const titlePatterns = [
      /<span[^>]*id="productTitle"[^>]*>([^<]+)<\/span>/i,
      /<title[^>]*>([^:]+)/i
    ]

    for (const pattern of titlePatterns) {
      const match = html.match(pattern)
      if (match) {
        title = schoneTitel(match[1], fallbackTitle)
        break
      }
    }

    // Extract image URL
    const fallbackImage = `https://m.media-amazon.com/images/I/${asin}._AC_SL1500_.jpg`
    let imageUrl = fallbackImage
    const imagePatterns = [
      /"hiRes":"([^"]*images\/I\/[^"]*\.jpg[^"]*)"/i,
      /"large":"([^"]*images\/I\/[^"]*\.jpg[^"]*)"/i,
      /src="([^"]*images\/I\/[^"]*\.jpg[^"]*)"/i
    ]

    for (const pattern of imagePatterns) {
      const match = html.match(pattern)
      if (match) {
        imageUrl = veiligeAfbeelding(match[1].replace(/\\u002F/g, '/'), fallbackImage)
        break
      }
    }

    console.log('Extracted Amazon data:', { title, imageUrl })
    
    return {
      title: title,
      imageUrl: imageUrl,
      description: `Amazon product: ${title}`
    }
    
  } catch (error) {
    console.error('Failed to fetch Amazon product details:', error.message)
    
    // Return fallback data
    return {
      title: `Amazon Product ${asin}`,
      imageUrl: `https://m.media-amazon.com/images/I/${asin}._AC_SL1500_.jpg`,
      description: `Amazon product with ASIN: ${asin}`
    }
  }
}

// Generate HTML snippet for Amazon product
function generateAmazonSnippet(productData, affiliateUrl, priceData = null, width = 300) {
  const { title, imageUrl } = productData
  const priceHtml = priceData ? generatePriceHtml(priceData.price, priceData.originalPrice) : ''
  
  return `<div style="text-align: center"><a href="${escapeHtml(affiliateUrl)}" target="_blank" rel="nofollow" align="center"><img src="${escapeHtml(imageUrl)}" class="cg-img-1" alt="${escapeHtml(title)}" width="${Number(width) || 300}" height="auto"></a>${priceHtml}</div>`
}

// Extract product ID from Bol.com URL
function extractBolProductId(url) {
  const patterns = [
    /\/p\/[^\/]+\/([0-9]+)\//i,     // /p/product-name/9300000062682298/
    /\/([0-9]{10,})\/$/i,           // /9300000062682298/
    /\/([0-9]{10,})\?/i,            // /9300000062682298?
    /\/([0-9]{10,})$/i              // /9300000062682298
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) {
      return match[1]
    }
  }
  
  return null
}

// Generate HTML snippet for Bol.com product
function generateBolSnippet(title, imageUrl, productUrl, priceData = null, width = 300) {
  const priceHtml = priceData ? generatePriceHtml(priceData.price, priceData.originalPrice) : ''
  
  // Extract product ID from URL for the code snippet
  const productId = extractBolProductId(productUrl)
  
  // Generate Bol.com JavaScript code snippet
  const uniqueId = `bol_${Date.now()}`
  const codeSnippet = `<script type="text/javascript">var bol_sitebar_v2={"id":"${uniqueId}", "baseUrl":"partner.bol.com","productId":"${productId}","familyId":"","siteId":"1472968","target":true,"rating":true,"price":true,"deliveryDescription":true,"button":false,"linkName":"${encodeURIComponent(title)}","linkSubId":""};</script><script type="text/javascript" src="https://partner.bol.com/promotion/static/js/partnerProductlinkV2.js" id="${uniqueId}"></script>`
  
  // Generate the new format with full code snippet after title
  return `<div class="bg-white rounded-xl border border-gray-200 p-4">
    <div class="text-center">
      <a href="${escapeHtml(productUrl)}" target="_blank" rel="nofollow noopener" class="block hover:opacity-90 transition-opacity">
        <div class="mb-3">
          <img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(title)}" class="mx-auto rounded-lg max-w-full h-auto" style="max-height: 200px;">
        </div>
        <h4 class="font-medium text-primary text-sm mb-2 line-clamp-2 min-h-[40px] flex items-center">${escapeHtml(title)}</h4>
        <div class="mt-2 mb-3 p-3 bg-gray-100 rounded-lg text-left">
          <h5 class="text-xs font-medium text-gray-700 mb-2">Bol.com Code Snippet:</h5>
          <code class="text-xs text-gray-600 break-all block">${codeSnippet}</code>
        </div>
        ${priceHtml}
        <div class="bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors inline-block">Bekijk op bol.com →</div>
      </a>
    </div>
  </div>`
}

// POST - Generate snippet from URL
export async function POST(request) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    if (!checkRateLimit()) {
      return NextResponse.json(
        { message: 'Too many requests. Please wait a moment.' },
        { status: 429 }
      )
    }
    
    const { tooLarge, data } = await readJsonCapped(request, 16 * 1024)
    if (tooLarge) {
      return NextResponse.json({ message: 'Request too large' }, { status: 413 })
    }
    const { url, type } = data || {}

    if (typeof url !== 'string' || !url || url.length > MAX_URL_LENGTE) {
      return NextResponse.json(
        { message: 'URL is required' },
        { status: 400 }
      )
    }

    // Geen requests naar de server zelf, het interne netwerk of metadata.
    try {
      await assertPubliekeUrl(url)
    } catch (error) {
      return NextResponse.json(
        { message: error instanceof GeweigerdeUrlFout ? error.message : 'URL kon niet worden gecontroleerd' },
        { status: 400 }
      )
    }

    if (type === 'amazon') {
      try {
        // Follow redirects to get the final Amazon URL
        const finalUrl = await followRedirects(url)
        console.log('Final URL after redirects:', finalUrl)
        
        // Extract ASIN from the final URL
        const asin = extractAmazonASIN(finalUrl)
        
        if (!asin) {
          // Shortlinks (amzn.to / amzn.eu) bevatten de ASIN niet in de URL en
          // het herleiden van de redirect wordt door Amazon op server-IP's
          // vaak geblokkeerd. De volledige productlink werkt altijd.
          const isShortlink = /amzn\.(to|eu)|\/d\//i.test(url)
          return NextResponse.json(
            {
              message: isShortlink
                ? 'Amazon-shortlink kon niet worden herleid (Amazon blokkeert dit vanaf de server). Open de shortlink in je browser en plak hier de volledige productlink (met /dp/... erin).'
                : 'Geen ASIN gevonden in deze URL. Plak de volledige Amazon-productlink (met /dp/... erin).'
            },
            { status: 400 }
          )
        }
        
        console.log('Extracted ASIN:', asin)
        
        // Build the affiliate URL
        const affiliateTag = process.env.AMAZON_AFFILIATE_TAG || 'baby260c-21'
        const affiliateUrl = `https://www.amazon.nl/-/en/dp/${asin}?tag=${affiliateTag}`
        
        // Fetch product details by scraping
        const productData = await fetchAmazonProductDetails(asin, finalUrl)
        
        // Amazon-prijs bewust NIET automatisch ophalen: server-side scraping
        // wordt door Amazon geblokkeerd en levert vaak geen of een foute prijs.
        // Vul de prijs voor Amazon-producten handmatig in het dashboard in.
        const priceData = null
        
        if (!productData) {
          // Fallback with basic data
          const fallbackData = {
            title: `Amazon Product ${asin}`,
            imageUrl: `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.L.jpg`
          }
          const html = generateAmazonSnippet(fallbackData, affiliateUrl, priceData)
          
          return NextResponse.json({
            success: true,
            html,
            productName: fallbackData.title,
            imageUrl: fallbackData.imageUrl,
            asin,
            affiliateUrl,
            price: priceData?.price,
            originalPrice: priceData?.originalPrice,
            currency: priceData?.currency
          })
        }
        
        // Generate the HTML snippet
        const html = generateAmazonSnippet(productData, affiliateUrl, priceData)
        
        return NextResponse.json({
          success: true,
          html,
          productName: productData.title,
          imageUrl: productData.imageUrl,
          asin,
          affiliateUrl,
          price: priceData?.price,
          originalPrice: priceData?.originalPrice,
          currency: priceData?.currency
        })
        
      } catch (error) {
        if (error instanceof GeweigerdeUrlFout) {
          return NextResponse.json({ message: error.message }, { status: 400 })
        }
        console.error('Error processing Amazon URL:', error.message)
        return NextResponse.json(
          { message: 'Failed to process Amazon URL' },
          { status: 500 }
        )
      }
    }
    
    if (type === 'bol') {
      try {
        // Extract product ID from Bol.com URL
        const productId = extractBolProductId(url)
        
        if (!productId) {
          return NextResponse.json(
            { message: 'Could not extract product ID from Bol.com URL' },
            { status: 400 }
          )
        }
        
        console.log('Extracted Bol.com Product ID:', productId)
        
        // Fetch price information
        let priceData = null
        try {
          priceData = await fetchPrice(url, 'bol')
          console.log('🛒 Bol.com price fetched:', priceData)
        } catch (priceError) {
          console.warn('⚠️ Could not fetch Bol.com price:', priceError.message)
        }
        
        // Try to fetch the page to extract title and image
        try {
          const response = await veiligFetch(url, {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
          })

          if (response.ok) {
            const html = await response.text()

            // Extract title
            const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
            const fallbackTitle = `Product ${productId}`
            const title = titleMatch
              ? schoneTitel(titleMatch[1].replace(' | bol.com', ''), fallbackTitle)
              : fallbackTitle

            // Extract image URL
            const fallbackImage = `https://media.s-bol.com/placeholder/${productId}/550x550.jpg`
            let imageUrl = fallbackImage
            const imgMatches = html.match(/<img[^>]+src="([^"]*media\.s-bol\.com[^"]*)"[^>]*>/gi)
            if (imgMatches && imgMatches.length > 0) {
              const imgMatch = imgMatches[0].match(/src="([^"]+)"/i)
              if (imgMatch) {
                imageUrl = veiligeAfbeelding(decodeEntities(imgMatch[1]), fallbackImage)
              }
            }
            
            const html_snippet = generateBolSnippet(title, imageUrl, url, priceData)
            
            return NextResponse.json({
              success: true,
              html: html_snippet,
              productName: title,
              productId,
              productUrl: url,
              imageUrl,
              price: priceData?.price,
              originalPrice: priceData?.originalPrice,
              currency: priceData?.currency
            })
          }
        } catch (fetchError) {
          console.log('Could not fetch Bol.com page, using fallback data')
        }
        
        // Fallback with basic data
        const fallbackTitle = `Bol.com Product ${productId}`
        const fallbackImage = `https://media.s-bol.com/placeholder/${productId}/550x550.jpg`
        const html_snippet = generateBolSnippet(fallbackTitle, fallbackImage, url, priceData)
        
        return NextResponse.json({
          success: true,
          html: html_snippet,
          productName: fallbackTitle,
          productId,
          productUrl: url,
          imageUrl: fallbackImage,
          price: priceData?.price,
          originalPrice: priceData?.originalPrice,
          currency: priceData?.currency
        })
        
      } catch (error) {
        console.error('Error processing Bol.com URL:', error.message)
        return NextResponse.json(
          { message: 'Failed to process Bol.com URL' },
          { status: 500 }
        )
      }
    }
    
    // For other types
    return NextResponse.json(
      { message: 'URL generation for this type is not implemented yet' },
      { status: 501 }
    )

  } catch (error) {
    console.error('Failed to generate snippet:', error)
    return NextResponse.json(
      { message: 'Unauthorized or failed to generate snippet' },
      { status: error.message.includes('token') ? 401 : 500 }
    )
  }
}