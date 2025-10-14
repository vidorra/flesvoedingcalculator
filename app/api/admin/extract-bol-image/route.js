import { NextResponse } from 'next/server'

// Force dynamic route
export const dynamic = 'force-dynamic'

// Simple session check - matches other admin endpoints
function isAuthenticated(request) {
  // For now, we'll skip server-side session validation 
  // and rely on client-side session management
  // In production, you'd want proper server-side session handling
  return true
}

// Extract product ID from Bol.com JavaScript snippet
function extractProductIdFromSnippet(snippet) {
  try {
    // Look for productId in the JavaScript variable
    const productIdMatch = snippet.match(/"productId":"([^"]+)"/i)
    if (productIdMatch && productIdMatch[1]) {
      return productIdMatch[1]
    }
    
    // Alternative pattern
    const altMatch = snippet.match(/productId["']:\s*["']([^"']+)["']/i)
    if (altMatch && altMatch[1]) {
      return altMatch[1]
    }
    
    return null
  } catch (error) {
    console.error('Error extracting product ID from snippet:', error)
    return null
  }
}

// Extract product name from Bol.com JavaScript snippet
function extractProductNameFromSnippet(snippet) {
  try {
    // Look for linkName in the JavaScript variable
    const linkNameMatch = snippet.match(/"linkName":"([^"]+)"/i)
    if (linkNameMatch && linkNameMatch[1]) {
      // Decode URI component
      return decodeURIComponent(linkNameMatch[1])
    }
    
    return null
  } catch (error) {
    console.error('Error extracting product name from snippet:', error)
    return null
  }
}

// Fetch product image from Bol.com using product ID
async function fetchBolProductImage(productId, productName = null) {
  try {
    // Try to construct Bol.com product URL and fetch the page
    const productUrl = `https://www.bol.com/nl/nl/p/${productId}/`
    
    console.log('Fetching Bol.com product page:', productUrl)
    
    const response = await fetch(productUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept-Language': 'nl-NL,nl;q=0.9,en;q=0.8'
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    
    const html = await response.text()
    
    // Extract title if not provided
    let title = productName
    if (!title) {
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
      title = titleMatch ? titleMatch[1].replace(' | bol.com', '').trim() : `Product ${productId}`
    }
    
    // Extract image URL - try multiple patterns
    let imageUrl = `https://media.s-bol.com/placeholder/${productId}/550x550.jpg`
    
    const imagePatterns = [
      // High-res product images
      /"(https:\/\/media\.s-bol\.com\/[^"]*\/\d+x\d+\.jpg)"/g,
      // Alternative image patterns
      /src="(https:\/\/media\.s-bol\.com\/[^"]*\.jpg)"/g,
      // General media patterns
      /<img[^>]+src="([^"]*media\.s-bol\.com[^"]*\.jpg)"[^>]*>/gi
    ]
    
    for (const pattern of imagePatterns) {
      const matches = [...html.matchAll(pattern)]
      if (matches.length > 0) {
        // Find the largest image (highest resolution)
        let bestImage = matches[0][1]
        let maxRes = 0
        
        for (const match of matches) {
          const img = match[1]
          // Extract resolution from URL like .../300x300.jpg
          const resMatch = img.match(/\/(\d+)x(\d+)\.jpg/)
          if (resMatch) {
            const res = parseInt(resMatch[1]) * parseInt(resMatch[2])
            if (res > maxRes) {
              maxRes = res
              bestImage = img
            }
          }
        }
        
        imageUrl = bestImage
        break
      }
    }
    
    console.log('Extracted Bol.com data:', { title, imageUrl, productId })
    
    return {
      success: true,
      title,
      imageUrl,
      productId,
      productUrl
    }
    
  } catch (error) {
    console.error('Failed to fetch Bol.com product details:', error)
    
    // Return fallback data
    return {
      success: false,
      title: productName || `Product ${productId}`,
      imageUrl: `https://media.s-bol.com/placeholder/${productId}/550x550.jpg`,
      productId,
      productUrl: `https://www.bol.com/nl/nl/p/${productId}/`,
      error: error.message
    }
  }
}

// Generate Image HTML for Bol.com product
function generateBolImageHtml(title, imageUrl, productUrl, width = 300) {
  return `<div style="text-align: center"><a href="${productUrl}"><img src="${imageUrl}" alt="${title}" width="${width}" height="auto" style="border-radius: 8px;"></a><br><strong>${title}</strong></div>`
}

// POST - Extract image from Bol.com snippet
export async function POST(request) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const { snippet } = await request.json()
    
    if (!snippet) {
      return NextResponse.json(
        { message: 'Bol.com snippet is required' },
        { status: 400 }
      )
    }
    
    console.log('Processing Bol.com snippet for image extraction')
    
    // Extract product ID from the snippet
    const productId = extractProductIdFromSnippet(snippet)
    
    if (!productId) {
      return NextResponse.json(
        { message: 'Could not extract product ID from Bol.com snippet' },
        { status: 400 }
      )
    }
    
    console.log('Extracted Product ID:', productId)
    
    // Extract product name from snippet (if available)
    const productName = extractProductNameFromSnippet(snippet)
    console.log('Extracted Product Name:', productName)
    
    // Fetch product details and image
    const productData = await fetchBolProductImage(productId, productName)
    
    if (!productData.success) {
      console.warn('Failed to fetch product details, using fallback')
    }
    
    // Generate Image HTML
    const imageHtml = generateBolImageHtml(
      productData.title, 
      productData.imageUrl, 
      productData.productUrl
    )
    
    return NextResponse.json({
      success: true,
      productId,
      title: productData.title,
      imageUrl: productData.imageUrl,
      productUrl: productData.productUrl,
      imageHtml,
      extractedName: productName,
      message: productData.success ? 'Image extracted successfully' : 'Using fallback image data'
    })
    
  } catch (error) {
    console.error('Failed to extract Bol.com image:', error)
    return NextResponse.json(
      { message: 'Failed to extract image from Bol.com snippet: ' + error.message },
      { status: 500 }
    )
  }
}