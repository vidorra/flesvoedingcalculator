import { NextResponse } from 'next/server'
import { db } from '../../../../../lib/db/connection.js'
import { snippets, pageSnippets, pages } from '../../../../../lib/db/schema.js'
import { eq, and } from 'drizzle-orm'

// Force dynamic route - prevent caching issues
export const dynamic = 'force-dynamic'
export const revalidate = 0

/**
 * Detect website from request hostname
 * Maps domains to website identifiers
 */
function detectWebsiteFromHostname(request) {
  const host = request.headers.get('host') || 'localhost'

  // Extract domain from host (remove port if present)
  const domain = host.split(':')[0].toLowerCase()

  // Map domains to website identifiers
  if (domain.includes('togwaarde')) {
    return 'togwaarde'
  }
  // Default to flesvoedingcalculator for any other domain
  // This includes localhost, flesvoedingcalculator.nl, and any development domains
  return 'flesvoedingcalculator'
}

// GET - Get affiliate snippets for a specific page from database
export async function GET(request, { params }) {
  // Force cache clear with headers
  const headers = {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  }

  try {
    const pageId = (await params).pageId
    // CRITICAL: Detect website from hostname to filter results
    const website = detectWebsiteFromHostname(request)

    // Inherit resolution: by default a page shows the website's Default snippets
    // (pageId 'default'). If the page has explicitly opted out (inherit_default =
    // false) it shows its own. Missing row => inherit (default true).
    let inheritDefault = true
    if (pageId !== 'default') {
      const pageRow = await db
        .select({ inheritDefault: pages.inheritDefault })
        .from(pages)
        .where(and(eq(pages.id, pageId), eq(pages.website, website)))
        .limit(1)
      if (pageRow.length > 0) {
        inheritDefault = pageRow[0].inheritDefault
      }
    }
    const effectivePageId = inheritDefault ? 'default' : pageId

    // Load from database - filtered by website
    const pageSnippetsList = await db
      .select({
        id: pageSnippets.id,
        pageId: pageSnippets.pageId,
        snippetId: pageSnippets.snippetId,
        order: pageSnippets.order,
        active: pageSnippets.active,
        createdAt: pageSnippets.createdAt,
        snippet: snippets
      })
      .from(pageSnippets)
      .leftJoin(snippets, eq(pageSnippets.snippetId, snippets.id))
      // CRITICAL: Filter by both the effective pageId and website
      .where(and(eq(pageSnippets.pageId, effectivePageId), eq(pageSnippets.website, website)))
      .orderBy(pageSnippets.order)

    // Filter out orphaned references and inactive snippets
    const activeSnippets = pageSnippetsList
      .filter(ps => ps.snippet && ps.snippet.active && ps.active)
      .map(ps => ps.snippet)
    
    // Convert admin format to frontend format
    const frontendSnippets = activeSnippets.map(snippet => {
      if (snippet.type === 'amazon') {
        // For Amazon products
        const html = snippet.generatedHtml || (snippet.imageHtml && snippet.bolScript ? `${snippet.imageHtml}\n${snippet.bolScript}` : snippet.imageHtml || '')
        return {
          id: snippet.id,
          name: snippet.name,
          tag: snippet.tag,
          active: snippet.active,
          price: snippet.price,
          originalPrice: snippet.originalPrice,
          currency: snippet.currency,
          priceLastUpdated: snippet.priceLastUpdated,
          type: 'amazon_image', // Convert to frontend format
          data: {
            url: extractAffiliateUrl(html) || snippet.url,
            imageUrl: snippet.imageUrl || extractImageUrl(html),
            alt: snippet.name,
            width: 300
          }
        }
      } else if (snippet.type === 'bol' || snippet.type === 'bol_snippet') {
        // For Bol.com products - separate imageHtml and bolScript
        // generatedHtml should ONLY contain bolScript (not imageHtml to avoid duplicate images)

        return {
          id: snippet.id,
          name: snippet.name,
          tag: snippet.tag,
          active: snippet.active,
          price: snippet.price,
          originalPrice: snippet.originalPrice,
          currency: snippet.currency,
          priceLastUpdated: snippet.priceLastUpdated,
          type: 'bol_snippet', // Changed to show JavaScript code widget
          generatedHtml: snippet.bolScript || snippet.generatedHtml || '', // ONLY the Bol.com script
          imageHtml: snippet.imageHtml,
          bolScript: snippet.bolScript,
          url: snippet.url, // Add URL for affiliate link button
          data: {
            title: snippet.name,
            fallbackImage: snippet.imageUrl || getFallbackImageForProduct(snippet.id),
            productUrl: snippet.url || '#',
            // Voor eigen kaarten (uitkomstblok): foto en partnerlink zonder bol-script
            imageUrl: snippet.imageUrl
              || extractImgSrc(snippet.imageHtml || '')
              || extractImgSrc(snippet.generatedHtml || '')
              || getFallbackImageForProduct(snippet.id),
            cardUrl: bolPartnerUrl(snippet)
          }
        }
      }

      return null
    }).filter(Boolean)
    
    return NextResponse.json({
      success: true,
      snippets: frontendSnippets
    }, { headers })

  } catch (error) {
    console.error('Failed to load page affiliates:', error)
    return NextResponse.json(
      { success: false, snippets: [] },
      { status: 200, headers } // Return 200 with empty array to prevent frontend errors
    )
  }
}

// Helper function to extract affiliate URL from HTML
function extractAffiliateUrl(html) {
  const match = html.match(/href=["'](.*?)["']/i)
  return match ? match[1] : null
}

// Helper function to extract image URL from HTML  
function extractImageUrl(html) {
  const match = html.match(/src=["'](.*?)["']/i)
  return match ? match[1] : null
}

// src van de eerste <img> (niet van een <script>)
function extractImgSrc(html) {
  const match = String(html).match(/<img[^>]+src=["']([^"']+)["']/i)
  return match ? match[1] : null
}

// Bol-partnerlink voor een eigen kaart. Staat er al een partner.bol.com-link in
// de snippet, dan die. Anders bouwen we hem uit siteId + productId in het
// opgeslagen bol-script, zodat de klik altijd via het partnerprogramma loopt.
// Zelfde logica als in togwaarde.
const BOL_SITE_ID = '1472968'
function bolPartnerUrl(snippet) {
  const url = snippet.url || ''
  if (url.includes('partner.bol.com')) return url

  const script = `${snippet.bolScript || ''}\n${snippet.generatedHtml || ''}`
  const siteId = script.match(/"siteId"\s*:\s*"(\d+)"/)?.[1] || BOL_SITE_ID
  const productId = script.match(/"productId"\s*:\s*"(\d+)"/)?.[1]
    || url.match(/\/p\/[^/]*\/(\d{8,})/)?.[1]
  const linkName = script.match(/"linkName"\s*:\s*"([^"]*)"/)?.[1]

  const target = /bol\.com\/nl\/[a-z]{2}\/p\//.test(url)
    ? url
    : productId ? `https://www.bol.com/nl/nl/p/-/${productId}/` : null
  if (!target) return url || '#'

  const params = new URLSearchParams({ p: '2', t: 'url', s: siteId, f: 'TXL', url: target })
  let name = snippet.name || ''
  if (linkName) { try { name = decodeURIComponent(linkName) } catch { /* rauwe naam */ } }
  if (name) params.set('name', name)
  return `https://partner.bol.com/click/click?${params.toString()}`
}

// Helper function to get fallback images for specific products
function getFallbackImageForProduct(productId) {
  const productImages = {
    'philips-avent-sterilisator': 'https://media.s-bol.com/NKX9XZWN3RGL/0RNmv15/550x707.jpg',
    'mam-sterilisator': 'https://media.s-bol.com/N7353O6nX5Bm/pgx9EzV/550x698.jpg',
    'chicco-sterilisator': 'https://media.s-bol.com/g4ZkAnyvBWwG/BgPjL0N/550x645.jpg',
    'microwave-sterilizer-bags': 'https://media.s-bol.com/W6W9N8Q9m1J1/PDNnlLr/550x550.jpg',
    'sterilizing-tablets': 'https://media.s-bol.com/LKjnL0mAOJNp/1200x1200.jpg',
    'bottle-brush': 'https://media.s-bol.com/71Jx52yE3r6E/550x550.jpg',
    'premium-sterilizer-dryer': 'https://media.s-bol.com/mq9vPQNZ01Jr/YP6Qo8r/550x593.jpg'
  }
  
  return productImages[productId] || 'https://media.s-bol.com/NKX9XZWN3RGL/0RNmv15/550x707.jpg'
}