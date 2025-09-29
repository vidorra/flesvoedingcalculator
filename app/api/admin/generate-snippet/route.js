import { NextResponse } from 'next/server'
import * as jwt from 'jsonwebtoken'

// Force dynamic route
export const dynamic = 'force-dynamic'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here'

// Verify admin token
function verifyAdmin(request) {
  const authHeader = request.headers.get('Authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Missing or invalid token')
  }
  
  const token = authHeader.substring(7)
  const decoded = jwt.verify(token, JWT_SECRET)
  
  if (!decoded.admin) {
    throw new Error('Invalid token')
  }
  
  return decoded
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

// Follow redirects to get final URL
async function followRedirects(shortUrl, maxRedirects = 5) {
  let currentUrl = shortUrl
  let redirectCount = 0
  
  while (redirectCount < maxRedirects) {
    try {
      const response = await fetch(currentUrl, { 
        method: 'HEAD', 
        redirect: 'manual' 
      })
      
      if (response.status >= 300 && response.status < 400) {
        const locationHeader = response.headers.get('location')
        if (locationHeader) {
          currentUrl = locationHeader
          redirectCount++
          continue
        }
      }
      
      break
    } catch (error) {
      break
    }
  }
  
  return currentUrl
}

// Fetch Amazon product details
async function fetchAmazonProductDetails(asin) {
  try {
    // In a real implementation, you would use Amazon Product Advertising API
    // For now, we'll create a basic structure with placeholder data
    
    const productData = {
      title: `Product ${asin}`,
      imageUrl: `https://m.media-amazon.com/images/I/${asin}._AC_SL1500_.jpg`,
      description: `Amazon product with ASIN: ${asin}`
    }
    
    return productData
  } catch (error) {
    console.error('Failed to fetch Amazon product details:', error)
    return null
  }
}

// Generate HTML snippet for Amazon product
function generateAmazonSnippet(productData, affiliateUrl, width = 300) {
  const { title, imageUrl } = productData
  
  return `<div style="text-align: center"><a href="${affiliateUrl}" target="_blank" rel="nofollow" align="center"><img src="${imageUrl}" class="cg-img-1" alt="${title}" width="${width}" height="auto"></a></div>`
}

// POST - Generate snippet from URL
export async function POST(request) {
  try {
    verifyAdmin(request)
    
    const { url, type } = await request.json()
    
    if (!url) {
      return NextResponse.json(
        { message: 'URL is required' },
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
          return NextResponse.json(
            { message: 'Could not extract ASIN from Amazon URL' },
            { status: 400 }
          )
        }
        
        console.log('Extracted ASIN:', asin)
        
        // Build the affiliate URL
        const affiliateTag = 'flesvoedingca-21'
        const affiliateUrl = `https://www.amazon.nl/-/en/dp/${asin}?tag=${affiliateTag}`
        
        // Fetch product details (in real implementation, use Amazon API)
        const productData = await fetchAmazonProductDetails(asin)
        
        if (!productData) {
          // Fallback with basic data
          const fallbackData = {
            title: `Amazon Product ${asin}`,
            imageUrl: `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.L.jpg`
          }
          const html = generateAmazonSnippet(fallbackData, affiliateUrl)
          
          return NextResponse.json({
            success: true,
            html,
            productName: fallbackData.title,
            asin,
            affiliateUrl
          })
        }
        
        // Generate the HTML snippet
        const html = generateAmazonSnippet(productData, affiliateUrl)
        
        return NextResponse.json({
          success: true,
          html,
          productName: productData.title,
          asin,
          affiliateUrl
        })
        
      } catch (error) {
        console.error('Error processing Amazon URL:', error)
        return NextResponse.json(
          { message: 'Failed to process Amazon URL: ' + error.message },
          { status: 500 }
        )
      }
    }
    
    // For other types (bol.com, etc.), we can add similar logic later
    return NextResponse.json(
      { message: `URL generation for ${type} not implemented yet` },
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