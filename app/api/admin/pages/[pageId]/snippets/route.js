import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Force dynamic route
export const dynamic = 'force-dynamic'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here'
const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const PAGE_SNIPPETS_FILE = path.join(DATA_DIR, 'page-snippets.json')

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
  if (!fs.existsSync(PAGE_SNIPPETS_FILE)) {
    fs.writeFileSync(PAGE_SNIPPETS_FILE, JSON.stringify({}))
  }
}

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

// Load page snippets
function loadPageSnippets() {
  ensureDataDir()
  const data = fs.readFileSync(PAGE_SNIPPETS_FILE, 'utf8')
  return JSON.parse(data)
}

// Save page snippets
function savePageSnippets(pageSnippets) {
  ensureDataDir()
  fs.writeFileSync(PAGE_SNIPPETS_FILE, JSON.stringify(pageSnippets, null, 2))
}

// Load snippets
function loadSnippets() {
  const SNIPPETS_FILE = path.join(DATA_DIR, 'snippets.json')
  if (!fs.existsSync(SNIPPETS_FILE)) {
    return []
  }
  const data = fs.readFileSync(SNIPPETS_FILE, 'utf8')
  return JSON.parse(data)
}

// GET - Get snippets for a specific page
export async function GET(request, { params }) {
  try {
    verifyAdmin(request)
    
    const pageId = params.pageId
    const pageSnippets = loadPageSnippets()
    const snippets = loadSnippets()
    
    const pageSnippetList = pageSnippets[pageId] || []
    
    // Add snippet details to each page snippet
    const enrichedSnippets = pageSnippetList
      .map(ps => ({
        ...ps,
        snippet: snippets.find(s => s.id === ps.snippetId)
      }))
      .filter(ps => ps.snippet) // Remove orphaned references
      .sort((a, b) => (a.order || 0) - (b.order || 0))
    
    return NextResponse.json({
      success: true,
      snippets: enrichedSnippets
    })

  } catch (error) {
    console.error('Failed to load page snippets:', error)
    return NextResponse.json(
      { message: 'Unauthorized or failed to load page snippets' },
      { status: error.message.includes('token') ? 401 : 500 }
    )
  }
}

// POST - Add snippet to page
export async function POST(request, { params }) {
  try {
    verifyAdmin(request)
    
    const pageId = params.pageId
    const { snippetId, order } = await request.json()
    
    const pageSnippets = loadPageSnippets()
    
    if (!pageSnippets[pageId]) {
      pageSnippets[pageId] = []
    }
    
    // Check if snippet is already on this page
    const existingIndex = pageSnippets[pageId].findIndex(ps => ps.snippetId === snippetId)
    if (existingIndex !== -1) {
      return NextResponse.json(
        { message: 'Snippet is already on this page' },
        { status: 400 }
      )
    }
    
    const newPageSnippet = {
      id: Date.now().toString(),
      pageId,
      snippetId,
      order: order ?? pageSnippets[pageId].length,
      active: true,
      createdAt: new Date().toISOString()
    }
    
    pageSnippets[pageId].push(newPageSnippet)
    savePageSnippets(pageSnippets)
    
    return NextResponse.json({
      success: true,
      pageSnippet: newPageSnippet
    })

  } catch (error) {
    console.error('Failed to add snippet to page:', error)
    return NextResponse.json(
      { message: 'Unauthorized or failed to add snippet to page' },
      { status: error.message.includes('token') ? 401 : 500 }
    )
  }
}