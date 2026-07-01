import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { verifyAdminAndGetWebsite } from '../../../lib/jwt-utils.js'
import { db } from '../../../lib/db/connection.js'
import { snippets as snippetsTable } from '../../../lib/db/schema.js'
import { eq } from 'drizzle-orm'

// Force dynamic route - Fresh deployment fix after disk space issue
export const dynamic = 'force-dynamic'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const SNIPPETS_FILE = path.join(DATA_DIR, 'snippets.json')
const CLICK_STATS_FILE = path.join(DATA_DIR, 'click-stats.json')

function loadClickStats() {
  try {
    if (!fs.existsSync(CLICK_STATS_FILE)) return {}
    return JSON.parse(fs.readFileSync(CLICK_STATS_FILE, 'utf8'))
  } catch {
    return {}
  }
}

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  // Don't create empty file here - let loadSnippets() handle default data
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

// Load snippets from file with error handling
function loadSnippets() {
  try {
    ensureDataDir()
    if (!fs.existsSync(SNIPPETS_FILE)) {
      console.log('Snippets file does not exist, creating with default data')
      // Initialize with default snippets if file doesn't exist
      const defaultSnippets = []
      fs.writeFileSync(SNIPPETS_FILE, JSON.stringify(defaultSnippets, null, 2))
      return defaultSnippets
    }
    console.log(`📖 Loading snippets from file: ${SNIPPETS_FILE}`)
    const data = fs.readFileSync(SNIPPETS_FILE, 'utf8')
    const parsed = JSON.parse(data)
    console.log(`📊 Loaded ${parsed.length} snippets from file`)
    return Array.isArray(parsed) ? parsed : []
  } catch (error) {
    console.error('Error loading snippets:', error)
    return []
  }
}

// Save snippets to file
function saveSnippets(snippets) {
  try {
    ensureDataDir()
    console.log(`💾 Saving ${snippets.length} snippets to file: ${SNIPPETS_FILE}`)
    fs.writeFileSync(SNIPPETS_FILE, JSON.stringify(snippets, null, 2))
    console.log('✅ File saved successfully')
  } catch (error) {
    console.error('❌ Error saving snippets file:', error)
    throw error
  }
}

// GET - List all snippets with timeout protection
export async function GET(request) {
  try {
    // Quick auth check (no expensive operations)
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const url = new URL(request.url)
    const activeOnly = url.searchParams.get('active') === 'true'
    
    // Load snippets with timeout protection
    const startTime = Date.now()
    let snippets = loadSnippets()
    const loadTime = Date.now() - startTime
    
    if (loadTime > 5000) {
      console.warn(`Snippets loading took ${loadTime}ms - this is too slow for production`)
    }
    
    if (activeOnly) {
      snippets = snippets.filter(snippet => snippet.active)
    }

    // Merge click counts
    const clickStats = loadClickStats()
    snippets = snippets.map(snippet => ({
      ...snippet,
      clicks: clickStats[snippet.id]?.count || 0
    }))

    return NextResponse.json({
      success: true,
      snippets,
      loadTime: loadTime
    })

  } catch (error) {
    console.error('Failed to load snippets:', error)
    return NextResponse.json(
      { message: 'Failed to load snippets', error: error.message },
      { status: 500 }
    )
  }
}

// POST - Create new snippet with production-safe error handling
export async function POST(request) {
  try {
    // Simple auth check for creating snippets
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const snippetData = await request.json()
    
    // Validate required fields
    if (!snippetData.name || !snippetData.type) {
      return NextResponse.json(
        { message: 'Name and type are required' },
        { status: 400 }
      )
    }
    
    const snippets = loadSnippets()
    
    const newSnippet = {
      id: snippetData.id || `${snippetData.type}-${Date.now()}`,
      name: snippetData.name,
      type: snippetData.type,
      url: snippetData.url || '',
      shortUrl: snippetData.shortUrl || '',
      imageUrl: snippetData.imageUrl || null, // Add imageUrl field
      tag: snippetData.tag || null,
      generatedHtml: snippetData.generatedHtml || '',
      codeSnippet: snippetData.codeSnippet || '',
      price: snippetData.price || null,
      originalPrice: snippetData.originalPrice || null,
      currency: snippetData.currency || 'EUR',
      priceLastUpdated: snippetData.price ? new Date().toISOString() : null,
      active: snippetData.active ?? true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    snippets.push(newSnippet)
    saveSnippets(snippets)
    
    console.log('Created new snippet:', newSnippet.id)
    
    return NextResponse.json({
      success: true,
      snippet: newSnippet
    })

  } catch (error) {
    console.error('Failed to create snippet:', error)
    return NextResponse.json(
      { message: 'Failed to create snippet', error: error.message },
      { status: 500 }
    )
  }
}

// PUT - Update existing snippet
export async function PUT(request) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const updateData = await request.json()
    
    if (!updateData.id) {
      return NextResponse.json(
        { message: 'Snippet ID is required' },
        { status: 400 }
      )
    }
    
    const snippets = loadSnippets()
    const snippetIndex = snippets.findIndex(s => s.id === updateData.id)
    
    if (snippetIndex === -1) {
      return NextResponse.json(
        { message: 'Snippet not found' },
        { status: 404 }
      )
    }
    
    // Update the snippet with new data
    const updatedSnippet = {
      ...snippets[snippetIndex],
      ...updateData,
      // Update priceLastUpdated if price fields are being updated
      priceLastUpdated: (updateData.price || updateData.originalPrice) ? new Date().toISOString() : snippets[snippetIndex].priceLastUpdated,
      updatedAt: new Date().toISOString()
    }
    
    snippets[snippetIndex] = updatedSnippet
    saveSnippets(snippets)
    
    console.log('Updated snippet:', updatedSnippet.id)
    
    return NextResponse.json({
      success: true,
      snippet: updatedSnippet
    })

  } catch (error) {
    console.error('Failed to update snippet:', error)
    return NextResponse.json(
      { message: 'Failed to update snippet', error: error.message },
      { status: 500 }
    )
  }
}

// DELETE - Delete snippet
export async function DELETE(request) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await request.json()

    // Bulk "delete all" — true reset for the current site. Clears the admin
    // JSON list AND the DB snippets for this website (page_snippets cascade).
    // Pages and inherit flags are left untouched.
    if (body?.all === true) {
      const { website } = verifyAdminAndGetWebsite(request)

      // 1. Clear the admin JSON list
      saveSnippets([])

      // 2. Clear the DB snippets for this website (cascades to page_snippets)
      let dbDeleted = 0
      try {
        const deleted = await db
          .delete(snippetsTable)
          .where(eq(snippetsTable.website, website))
          .returning({ id: snippetsTable.id })
        dbDeleted = deleted.length
      } catch (dbError) {
        console.error('Failed to clear DB snippets:', dbError)
        return NextResponse.json(
          { message: 'Cleared admin list but failed to clear database snippets', error: dbError.message },
          { status: 500 }
        )
      }

      console.log(`🧹 Deleted all snippets for ${website}: DB rows removed = ${dbDeleted}`)
      return NextResponse.json({
        success: true,
        message: `All snippets deleted for ${website}`,
        dbDeleted,
        website
      })
    }

    const { id } = body

    if (!id) {
      return NextResponse.json(
        { message: 'Snippet ID is required' },
        { status: 400 }
      )
    }
    
    const snippets = loadSnippets()
    const snippetIndex = snippets.findIndex(s => s.id === id)
    
    if (snippetIndex === -1) {
      return NextResponse.json(
        { message: 'Snippet not found' },
        { status: 404 }
      )
    }
    
    // Remove the snippet
    const deletedSnippet = snippets.splice(snippetIndex, 1)[0]
    console.log('Before save - snippets count:', snippets.length)
    console.log('Deleting snippet:', deletedSnippet.id)
    
    saveSnippets(snippets)
    
    // Verify the file was updated by reading it back
    const verifySnippets = loadSnippets()
    console.log('After save - snippets count:', verifySnippets.length)
    const stillExists = verifySnippets.find(s => s.id === deletedSnippet.id)
    if (stillExists) {
      console.error('🚨 DELETION FAILED: Snippet still exists after save!')
      return NextResponse.json(
        { message: 'Failed to delete snippet - still exists after save' },
        { status: 500 }
      )
    }
    
    console.log('✅ Snippet successfully deleted:', deletedSnippet.id)
    
    return NextResponse.json({
      success: true,
      message: 'Snippet deleted successfully',
      snippet: deletedSnippet
    })

  } catch (error) {
    console.error('Failed to delete snippet:', error)
    return NextResponse.json(
      { message: 'Failed to delete snippet', error: error.message },
      { status: 500 }
    )
  }
}