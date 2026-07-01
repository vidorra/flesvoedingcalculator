import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { fetchPrice } from '../../../../lib/price-fetcher.js'
import { verifyAdminAndGetWebsite } from '../../../../lib/jwt-utils.js'
import { db } from '../../../../lib/db/connection.js'
import { snippets as snippetsTable } from '../../../../lib/db/schema.js'
import { eq, and } from 'drizzle-orm'

// Force dynamic route
export const dynamic = 'force-dynamic'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const SNIPPETS_FILE = path.join(DATA_DIR, 'snippets.json')

// Verify admin JWT token
function isAuthenticated(request) {
  try {
    verifyAdminAndGetWebsite(request)
    return true
  } catch {
    return false
  }
}

// Load snippets from file
function loadSnippets() {
  try {
    if (!fs.existsSync(SNIPPETS_FILE)) {
      return []
    }
    const data = fs.readFileSync(SNIPPETS_FILE, 'utf8')
    const parsed = JSON.parse(data)
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    console.error('Error loading snippets:', error)
    return []
  }
}

// Save snippets to file
function saveSnippets(snippets) {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true })
    }
    fs.writeFileSync(SNIPPETS_FILE, JSON.stringify(snippets, null, 2))
  } catch (error) {
    console.error('Error saving snippets:', error)
    throw error
  }
}

// POST - Sync prices for all active snippets
export async function POST(request) {
  try {
    let website
    try {
      website = verifyAdminAndGetWebsite(request).website
    } catch {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    console.log('🔄 Starting price sync for all snippets...')

    // Snippets live in the DB now (website-scoped)
    const snippets = await db
      .select()
      .from(snippetsTable)
      .where(eq(snippetsTable.website, website))
    const activeSnippets = snippets.filter(snippet => snippet.active && snippet.url)
    
    console.log(`📊 Found ${activeSnippets.length} active snippets to sync`)
    
    let successCount = 0
    let errorCount = 0
    const errors = []
    
    // Sync prices for each active snippet
    for (let i = 0; i < activeSnippets.length; i++) {
      const snippet = activeSnippets[i]
      
      try {
        console.log(`🔄 Syncing prices for "${snippet.name}" (${i + 1}/${activeSnippets.length})`)
        console.log(`🌐 URL: ${snippet.url}`)
        console.log(`🏷️ Type: ${snippet.type}`)
        
        // Fetch updated price information, passing snippet data for script-based extraction
        const priceData = await fetchPrice(snippet.url, snippet.type, snippet)
        
        console.log(`📊 Price fetch result for "${snippet.name}":`, {
          success: !!(priceData && (priceData.price || priceData.originalPrice)),
          priceData: priceData,
          hasPrice: !!priceData?.price,
          hasOriginalPrice: !!priceData?.originalPrice,
          currency: priceData?.currency
        })
        
        if (priceData && (priceData.price || priceData.originalPrice)) {
          // Update the row directly in the DB (website-scoped)
          await db
            .update(snippetsTable)
            .set({
              price: priceData.price,
              originalPrice: priceData.originalPrice,
              currency: priceData.currency || 'EUR',
              priceLastUpdated: new Date(),
              updatedAt: new Date()
            })
            .where(and(eq(snippetsTable.id, snippet.id), eq(snippetsTable.website, website)))

          console.log(`✅ Updated prices for "${snippet.name}": ${priceData.price}${priceData.originalPrice ? ` (was ${priceData.originalPrice})` : ''}`)
          successCount++
        } else {
          const errorDetail = priceData ? 
            `Price data returned but no valid price found. Response: ${JSON.stringify(priceData)}` :
            `No price data returned from fetcher`
          
          console.log(`⚠️ No price data found for "${snippet.name}": ${errorDetail}`)
          errors.push(`No price data found for "${snippet.name}": ${errorDetail}`)
          errorCount++
        }
        
        // Add delay to avoid overwhelming the servers and reduce 403 errors
        if (i < activeSnippets.length - 1) {
          console.log(`⏳ Waiting 3 seconds before next request...`)
          await new Promise(resolve => setTimeout(resolve, 3000))
        }
        
      } catch (error) {
        console.error(`❌ Error syncing prices for "${snippet.name}":`, error.message)
        errors.push(`Error syncing "${snippet.name}": ${error.message}`)
        errorCount++
      }
    }
    
    // Price updates were written to the DB inline above.

    console.log(`🏁 Price sync completed: ${successCount} successful, ${errorCount} errors`)
    
    return NextResponse.json({
      success: true,
      message: `Price sync completed: ${successCount} successful, ${errorCount} errors`,
      stats: {
        total: activeSnippets.length,
        successful: successCount,
        errors: errorCount,
        errorDetails: errors
      }
    })

  } catch (error) {
    console.error('❌ Failed to sync prices:', error)
    return NextResponse.json(
      { 
        success: false,
        message: 'Failed to sync prices', 
        error: error.message 
      },
      { status: 500 }
    )
  }
}