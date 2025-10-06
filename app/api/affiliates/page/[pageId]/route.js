import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Force dynamic route - prevent caching issues
export const dynamic = 'force-dynamic'

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
        "generatedHtml": "<div style=\"text-align: center\"><a href=\"https://www.bol.com/nl/nl/p/philips-avent-flessterilisator-damp-droger/9300000062682298/\" target=\"_blank\" rel=\"nofollow\"><img src=\"https://media.s-bol.com/NKX9XZWN3RGL/0RNmv15/550x707.jpg\" alt=\"Philips Avent Flessterilisator Damp & Droger\" width=\"300\" height=\"auto\" style=\"border-radius: 8px;\"></a><br><strong>Philips Avent Flessterilisator Damp & Droger</strong></div>",
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
        "generatedHtml": "<div style=\"text-align: center\"><a href=\"https://www.bol.com/nl/nl/p/mam-sterilisator-grijs-bpa-vrij/9300000050911914/\" target=\"_blank\" rel=\"nofollow\"><img src=\"https://media.s-bol.com/N7353O6nX5Bm/pgx9EzV/550x698.jpg\" alt=\"MAM Sterilisator Grijs BPA-vrij\" width=\"300\" height=\"auto\" style=\"border-radius: 8px;\"></a><br><strong>MAM Sterilisator Grijs BPA-vrij</strong></div>",
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
        "generatedHtml": "<div style=\"text-align: center\"><a href=\"https://www.bol.com/nl/nl/p/chicco-3-in-1-sterilisator-sterilnatural/9300000013318604/\" target=\"_blank\" rel=\"nofollow\"><img src=\"https://media.s-bol.com/g4ZkAnyvBWwG/BgPjL0N/550x645.jpg\" alt=\"Chicco 3 In 1 Sterilisator Sterilnatural\" width=\"300\" height=\"auto\" style=\"border-radius: 8px;\"></a><br><strong>Chicco 3 In 1 Sterilisator Sterilnatural</strong></div>",
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
        "generatedHtml": "<div style=\"text-align: center\"><a href=\"https://www.bol.com/nl/nl/p/milton-steriliseertabletten-28-stuks/9200000020075414/\" target=\"_blank\" rel=\"nofollow\"><img src=\"https://media.s-bol.com/pBnAOk7xvqmY/YlP2J6/550x733.jpg\" alt=\"Milton Steriliseertabletten\" width=\"300\" height=\"auto\" style=\"border-radius: 8px;\"></a><br><strong>Milton Steriliseertabletten</strong></div>",
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