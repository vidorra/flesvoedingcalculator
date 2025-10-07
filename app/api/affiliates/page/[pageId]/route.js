import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Force dynamic route - prevent caching issues
export const dynamic = 'force-dynamic'
export const revalidate = 0

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const PAGE_SNIPPETS_FILE = path.join(DATA_DIR, 'page-snippets.json')
const SNIPPETS_FILE = path.join(DATA_DIR, 'snippets.json')

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

// Load page snippets with auto-creation
function loadPageSnippets() {
  ensureDataDir()
  
  // Force recreation if file is older than October 7, 2025 (today's deployment)
  const forceRecreateAfter = new Date('2025-10-07T12:00:00Z')
  let shouldRecreate = false
  
  if (fs.existsSync(PAGE_SNIPPETS_FILE)) {
    const fileStats = fs.statSync(PAGE_SNIPPETS_FILE)
    if (fileStats.mtime < forceRecreateAfter) {
      console.log('🔄 Force recreating page-snippets.json - outdated file detected')
      fs.unlinkSync(PAGE_SNIPPETS_FILE)
      shouldRecreate = true
    }
  }
  
  if (!fs.existsSync(PAGE_SNIPPETS_FILE)) {
    console.log('Creating page-snippets.json with default data in production')
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
        },
        {
          "id": "ps_1759151278392_4",
          "pageId": "hygiene-bereiding_flessen-steriliseren",
          "snippetId": "sterilizing-tablets",
          "order": 4,
          "active": true,
          "createdAt": "2025-09-30T13:11:58.392Z"
        }
      ]
    }
    
    try {
      fs.writeFileSync(PAGE_SNIPPETS_FILE, JSON.stringify(defaultPageSnippets, null, 2))
      return defaultPageSnippets
    } catch (error) {
      console.error('❌ Failed to create page-snippets.json:', error)
      return {}
    }
  }
  
  try {
    const data = fs.readFileSync(PAGE_SNIPPETS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('❌ Error reading page snippets file:', error)
    return {}
  }
}

// Load snippets with auto-creation (matches admin-snippets logic)
function loadSnippets() {
  ensureDataDir()
  
  // Force recreation if file is older than October 7, 2025 (today's deployment)
  const forceRecreateAfter = new Date('2025-10-07T12:00:00Z')
  
  if (fs.existsSync(SNIPPETS_FILE)) {
    const fileStats = fs.statSync(SNIPPETS_FILE)
    if (fileStats.mtime < forceRecreateAfter) {
      console.log('🔄 Force recreating snippets.json - outdated file detected')
      fs.unlinkSync(SNIPPETS_FILE)
    }
  }
  
  if (!fs.existsSync(SNIPPETS_FILE)) {
    console.log('Creating snippets.json with default data in production')
    // Initialize with complete 9-snippet dataset (prevents data loss)
    const defaultSnippets = [
      {
        "id": "philips-avent-sterilisator",
        "name": "Philips Avent Flessterilisator",
        "type": "bol",
        "url": "https://www.bol.com/nl/nl/p/philips-avent-flessterilisator-damp-droger/9300000062682298/",
        "tag": "Aanbevolen",
        "generatedHtml": "<script type=\"text/javascript\">var bol_sitebar_v2={\"id\":\"bol_1759399100001\", \"baseUrl\":\"partner.bol.com\",\"productId\":\"9300000062682298\",\"familyId\":\"\",\"siteId\":\"1472968\",\"target\":true,\"rating\":true,\"price\":true,\"deliveryDescription\":true,\"button\":false,\"linkName\":\"Philips%20Avent%20Flessterilisator%20Damp%20%26%20Droger\",\"linkSubId\":\"\"};</script><script type=\"text/javascript\" src=\"https://partner.bol.com/promotion/static/js/partnerProductlinkV2.js\" id=\"bol_1759399100001\"></script>",
        "active": true,
        "createdAt": "2025-09-29T13:07:58.390Z",
        "updatedAt": "2025-09-29T13:07:58.391Z"
      },
      {
        "id": "mam-sterilisator",
        "name": "MAM Sterilisator",
        "type": "bol",
        "url": "https://www.bol.com/nl/nl/p/mam-sterilisator-grijs-bpa-vrij/9300000050911914/",
        "tag": "Beste prijs/kwaliteit",
        "generatedHtml": "<script type=\"text/javascript\">var bol_sitebar_v2={\"id\":\"bol_1759399123998\", \"baseUrl\":\"partner.bol.com\",\"productId\":\"9300000050911914\",\"familyId\":\"\",\"siteId\":\"1472968\",\"target\":true,\"rating\":true,\"price\":true,\"deliveryDescription\":true,\"button\":false,\"linkName\":\"MAM%20Sterilisator%20Grijs%20BPA-vrij\",\"linkSubId\":\"\"};</script><script type=\"text/javascript\" src=\"https://partner.bol.com/promotion/static/js/partnerProductlinkV2.js\" id=\"bol_1759399123998\"></script>",
        "active": true,
        "createdAt": "2025-09-29T13:07:58.391Z",
        "updatedAt": "2025-09-29T13:07:58.391Z"
      },
      {
        "id": "chicco-sterilisator",
        "name": "Chicco 3-in-1 Sterilisator",
        "type": "bol",
        "url": "https://www.bol.com/nl/nl/p/chicco-3-in-1-sterilisator-sterilnatural/9300000013318604/",
        "tag": null,
        "generatedHtml": "<script type=\"text/javascript\">var bol_sitebar_v2={\"id\":\"bol_1759399100002\", \"baseUrl\":\"partner.bol.com\",\"productId\":\"9300000013318604\",\"familyId\":\"\",\"siteId\":\"1472968\",\"target\":true,\"rating\":true,\"price\":true,\"deliveryDescription\":true,\"button\":false,\"linkName\":\"Chicco%203%20In%201%20Sterilisator%20Sterilnatural\",\"linkSubId\":\"\"};</script><script type=\"text/javascript\" src=\"https://partner.bol.com/promotion/static/js/partnerProductlinkV2.js\" id=\"bol_1759399100002\"></script>",
        "active": true,
        "createdAt": "2025-09-29T13:07:58.391Z",
        "updatedAt": "2025-09-29T13:07:58.391Z"
      },
      {
        "id": "lifejxwen-sterilizer",
        "name": "LIFEJXWEN 5-in-1 Electric Sterilizer",
        "type": "amazon",
        "url": "https://www.amazon.nl/-/en/dp/B0FN47MMXK?tag=flesvoedingca-21",
        "tag": "Budget",
        "generatedHtml": "<div style=\"text-align: center\"><a href=\"https://www.amazon.nl/-/en/dp/B0FN47MMXK?tag=flesvoedingca-21\" target=\"_blank\" rel=\"nofollow\" align=\"center\"><img src=\"https://m.media-amazon.com/images/I/517904cDV3L._AC_SL1500_.jpg\" class=\"cg-img-1\" alt=\"LIFEJXWEN 5-in-1 Electric Sterilizer for Baby Bottles, Sterilizing, Drying, Auto-Sterilizing & Drying, Warming Food, Keeping Bottles Warm, Capacity 8 Bottles, 24 Hours Germination Protection\" width=\"300\" height=\"auto\"></a></div>",
        "active": true,
        "createdAt": "2025-09-29T13:07:58.391Z",
        "updatedAt": "2025-09-29T13:07:58.391Z"
      },
      {
        "id": "microwave-sterilizer-bags",
        "name": "Medela Magnetron Sterilisatiezakken",
        "type": "bol",
        "url": "https://www.bol.com/nl/nl/p/medela-quick-clean-magnetronzakken-5-stuks/9200000027648944/",
        "tag": "Onderweg",
        "generatedHtml": "<div style=\"text-align: center\"><a href=\"https://www.bol.com/nl/nl/p/medela-quick-clean-magnetronzakken-5-stuks/9200000027648944/\" target=\"_blank\" rel=\"nofollow\"><img src=\"https://media.s-bol.com/W6W9N8Q9m1J1/PDNnlLr/550x550.jpg\" alt=\"Medela Quick Clean Magnetronzakken\" width=\"300\" height=\"auto\" style=\"border-radius: 8px;\"></a><br><strong>Medela Quick Clean Magnetronzakken</strong></div>",
        "active": true,
        "createdAt": "2025-09-30T05:00:00.000Z",
        "updatedAt": "2025-09-30T05:00:00.000Z"
      },
      {
        "id": "sterilizing-tablets",
        "name": "Milton Sterilisatie Tabletten",
        "type": "bol",
        "url": "https://www.bol.com/nl/nl/p/milton-steriliseertabletten-28-stuks/9200000020075414/",
        "tag": "Chemisch",
        "generatedHtml": "<script type=\"text/javascript\">var bol_sitebar_v2={\"id\":\"bol_1759399100003\", \"baseUrl\":\"partner.bol.com\",\"productId\":\"9200000020075414\",\"familyId\":\"\",\"siteId\":\"1472968\",\"target\":true,\"rating\":true,\"price\":true,\"deliveryDescription\":true,\"button\":false,\"linkName\":\"Milton%20Steriliseertabletten\",\"linkSubId\":\"\"};</script><script type=\"text/javascript\" src=\"https://partner.bol.com/promotion/static/js/partnerProductlinkV2.js\" id=\"bol_1759399100003\"></script>",
        "active": true,
        "createdAt": "2025-09-30T05:00:00.000Z",
        "updatedAt": "2025-09-30T05:00:00.000Z"
      },
      {
        "id": "bottle-brush",
        "name": "Philips Avent Flessenborstel Set",
        "type": "bol",
        "url": "https://www.bol.com/nl/nl/p/philips-avent-flessenborstel-set/9200000009372844/",
        "tag": "Accessoire",
        "generatedHtml": "<div style=\"text-align: center\"><a href=\"https://www.bol.com/nl/nl/p/philips-avent-flessenborstel-set/9200000009372844/\" target=\"_blank\" rel=\"nofollow\"><img src=\"https://media.s-bol.com/71Jx52yE3r6E/550x550.jpg\" alt=\"Philips Avent Flessenborstel Set\" width=\"300\" height=\"auto\" style=\"border-radius: 8px;\"></a><br><strong>Philips Avent Flessenborstel Set</strong></div>",
        "active": true,
        "createdAt": "2025-09-30T05:00:00.000Z",
        "updatedAt": "2025-09-30T05:00:00.000Z"
      },
      {
        "id": "premium-sterilizer-dryer",
        "name": "Philips Avent 4-in-1 Sterilisator & Droger",
        "type": "bol",
        "url": "https://www.bol.com/nl/nl/p/philips-avent-4-in-1-elektrische-stoomsterilisator-en-droger/9300000082123414/",
        "tag": "Premium",
        "generatedHtml": "<div style=\"text-align: center\"><a href=\"https://www.bol.com/nl/nl/p/philips-avent-4-in-1-elektrische-stoomsterilisator-en-droger/9300000082123414/\" target=\"_blank\" rel=\"nofollow\"><img src=\"https://media.s-bol.com/mq9vPQNZ01Jr/YP6Qo8r/550x593.jpg\" alt=\"Philips Avent 4-in-1 Elektrische Stoomsterilisator en Droger\" width=\"300\" height=\"auto\" style=\"border-radius: 8px;\"></a><br><strong>Philips Avent 4-in-1 Elektrische Stoomsterilisator en Droger</strong></div>",
        "active": true,
        "createdAt": "2025-09-30T05:00:00.000Z",
        "updatedAt": "2025-09-30T05:00:00.000Z"
      },
      {
        "id": "amazon-1759328398760",
        "name": "Dr. Browns Anti-Colic Brede Halsfles",
        "type": "amazon",
        "url": "https://amzn.to/4h01hmP",
        "tag": "Anti-Colic",
        "generatedHtml": "<div style=\"text-align: center\"><a href=\"https://www.amazon.nl/-/en/dp/B08QRDVX4S?tag=flesvoedingca-21\" target=\"_blank\" rel=\"nofollow\" align=\"center\"><img src=\"https://m.media-amazon.com/images/I/61uaq4Sp-XL._AC_SL1500_.jpg\" class=\"cg-img-1\" alt=\"Dr. Brown's Options+ Anti-Colic Wide Mouth Bottle, 270 ml, Blue, Forest Bottle, 0 Months\" width=\"300\" height=\"auto\"></a></div>",
        "active": true,
        "createdAt": "2025-10-01T14:19:58.760Z",
        "updatedAt": "2025-10-01T14:19:58.761Z"
      }
    ]
    
    try {
      fs.writeFileSync(SNIPPETS_FILE, JSON.stringify(defaultSnippets, null, 2))
      return defaultSnippets
    } catch (error) {
      console.error('❌ Failed to create snippets.json:', error)
      return []
    }
  }
  
  try {
    const data = fs.readFileSync(SNIPPETS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('❌ Error reading snippets file:', error)
    return []
  }
}

// GET - Get affiliate snippets for a specific page
export async function GET(request, { params }) {
  // Force cache clear with headers
  const headers = {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    'Pragma': 'no-cache',
    'Expires': '0'
  }
  
  try {
    const pageId = params.pageId
    const pageSnippets = loadPageSnippets()
    const allSnippets = loadSnippets()
    
    const pageSnippetList = pageSnippets[pageId] || []
    
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
    
    // Convert admin format to frontend format
    const frontendSnippets = activeSnippets.map(snippet => {
      if (snippet.type === 'amazon') {
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
          price: snippet.price,
          originalPrice: snippet.originalPrice,
          currency: snippet.currency,
          priceLastUpdated: snippet.priceLastUpdated,
          type: 'bol_snippet', // Changed to show JavaScript code widget
          generatedHtml: snippet.generatedHtml, // Include the HTML for the widget
          data: {
            title: snippet.name,
            fallbackImage: extractImageUrl(snippet.generatedHtml) || 'https://via.placeholder.com/200x200?text=Product',
            productUrl: extractAffiliateUrl(snippet.generatedHtml) || '#'
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