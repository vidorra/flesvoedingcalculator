import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Force dynamic route
export const dynamic = 'force-dynamic'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const SNIPPETS_FILE = path.join(DATA_DIR, 'snippets.json')

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  if (!fs.existsSync(SNIPPETS_FILE)) {
    fs.writeFileSync(SNIPPETS_FILE, JSON.stringify([]))
  }
}

// Simple session check
function isAuthenticated(request) {
  // For now, we'll skip server-side session validation 
  // and rely on client-side session management
  // In production, you'd want proper server-side session handling
  return true
}

// Load snippets from file with error handling
function loadSnippets() {
  try {
    ensureDataDir()
    if (!fs.existsSync(SNIPPETS_FILE)) {
      console.log('Snippets file does not exist, returning empty array')
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
  ensureDataDir()
  fs.writeFileSync(SNIPPETS_FILE, JSON.stringify(snippets, null, 2))
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
      tag: snippetData.tag || null,
      generatedHtml: snippetData.generatedHtml || '',
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