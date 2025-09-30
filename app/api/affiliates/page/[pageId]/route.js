import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const PAGE_SNIPPETS_FILE = path.join(DATA_DIR, 'page-snippets.json')
const SNIPPETS_FILE = path.join(DATA_DIR, 'snippets.json')

// Load page snippets
function loadPageSnippets() {
  if (!fs.existsSync(PAGE_SNIPPETS_FILE)) {
    console.log('Page snippets file does not exist, creating with default data')
    // Initialize with default page-snippet mappings
    const defaultPageSnippets = {
      "hygiene-bereiding_flessen-steriliseren": [
        {
          "id": "ps_1759151278392_0",
          "pageId": "hygiene-bereiding_flessen-steriliseren",
          "snippetId": "philips-avent-sterilisator",
          "order": 0,
          "active": true,
          "createdAt": "2025-09-29T13:07:58.392Z"
        },
        {
          "id": "ps_1759151278392_1",
          "pageId": "hygiene-bereiding_flessen-steriliseren",
          "snippetId": "mam-sterilisator",
          "order": 1,
          "active": true,
          "createdAt": "2025-09-29T13:07:58.392Z"
        },
        {
          "id": "ps_1759151278392_2",
          "pageId": "hygiene-bereiding_flessen-steriliseren",
          "snippetId": "chicco-sterilisator",
          "order": 2,
          "active": true,
          "createdAt": "2025-09-29T13:07:58.392Z"
        },
        {
          "id": "ps_1759151278392_3",
          "pageId": "hygiene-bereiding_flessen-steriliseren",
          "snippetId": "lifejxwen-sterilizer",
          "order": 3,
          "active": true,
          "createdAt": "2025-09-29T13:07:58.392Z"
        }
      ]
    }
    
    // Ensure data directory exists
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    }
    
    fs.writeFileSync(PAGE_SNIPPETS_FILE, JSON.stringify(defaultPageSnippets, null, 2))
    return defaultPageSnippets
  }
  const data = fs.readFileSync(PAGE_SNIPPETS_FILE, 'utf8')
  return JSON.parse(data)
}

// Load snippets
function loadSnippets() {
  if (!fs.existsSync(SNIPPETS_FILE)) {
    return []
  }
  const data = fs.readFileSync(SNIPPETS_FILE, 'utf8')
  return JSON.parse(data)
}

// GET - Get affiliate snippets for a specific page
export async function GET(request, { params }) {
  try {
    const pageId = params.pageId
    const pageSnippets = loadPageSnippets()
    const allSnippets = loadSnippets()
    
    console.log(`🔍 API Debug: Requested PageId="${pageId}"`)
    console.log(`🔍 API Debug: Available page keys:`, Object.keys(pageSnippets))
    console.log(`🔍 API Debug: PageId exists in data:`, pageSnippets.hasOwnProperty(pageId))
    
    const pageSnippetList = pageSnippets[pageId] || []
    
    console.log(`🔍 API Debug: PageId=${pageId}, Found ${pageSnippetList.length} page snippets`)
    console.log(`🔍 API Debug: Page snippet IDs:`, pageSnippetList.map(ps => ps.snippetId))
    console.log(`🔍 API Debug: All snippets count: ${allSnippets.length}`)
    
    // Get active snippets for this page, sorted by order
    const activeSnippets = pageSnippetList
      .filter(ps => ps.active)
      .map(ps => ({
        ...ps,
        snippet: allSnippets.find(s => s.id === ps.snippetId)
      }))
      .filter(ps => ps.snippet && ps.snippet.active) // Only active snippets
      .sort((a, b) => (a.order || 0) - (b.order || 0))
      .map(ps => ps.snippet) // Return just the snippet data
    
    console.log(`🔍 API Debug: Final active snippets count: ${activeSnippets.length}`)
    
    // Convert admin format to frontend format
    const frontendSnippets = activeSnippets.map(snippet => {
      if (snippet.type === 'amazon') {
        return {
          id: snippet.id,
          name: snippet.name,
          tag: snippet.tag,
          active: snippet.active,
          type: 'amazon_image', // Convert to frontend format
          data: {
            url: extractAffiliateUrl(snippet.generatedHtml),
            imageUrl: extractImageUrl(snippet.generatedHtml),
            alt: snippet.name,
            width: 300
          }
        }
      } else if (snippet.type === 'bol') {
        return {
          id: snippet.id,
          name: snippet.name,
          tag: snippet.tag,
          active: snippet.active,
          type: 'bol_iframe', // Convert to frontend format
          data: {
            title: snippet.name,
            fallbackImage: extractImageUrl(snippet.generatedHtml) || 'https://via.placeholder.com/200x200?text=Product',
            productUrl: extractAffiliateUrl(snippet.generatedHtml) || '#'
          }
        }
      }
      
      return null
    }).filter(Boolean)
    
    console.log(`🔍 API Debug: Frontend snippets count: ${frontendSnippets.length}`)
    console.log(`🔍 API Debug: Frontend snippet types:`, frontendSnippets.map(s => `${s.id} (${s.type})`))
    
    return NextResponse.json({
      success: true,
      snippets: frontendSnippets
    })

  } catch (error) {
    console.error('Failed to load page affiliates:', error)
    return NextResponse.json(
      { success: false, snippets: [] },
      { status: 200 } // Return 200 with empty array to prevent frontend errors
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