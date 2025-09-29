import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Force dynamic route
export const dynamic = 'force-dynamic'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here'
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

// Load snippets from file
function loadSnippets() {
  ensureDataDir()
  const data = fs.readFileSync(SNIPPETS_FILE, 'utf8')
  return JSON.parse(data)
}

// Save snippets to file
function saveSnippets(snippets) {
  ensureDataDir()
  fs.writeFileSync(SNIPPETS_FILE, JSON.stringify(snippets, null, 2))
}

// GET - List all snippets
export async function GET(request) {
  try {
    verifyAdmin(request)
    
    const url = new URL(request.url)
    const activeOnly = url.searchParams.get('active') === 'true'
    
    let snippets = loadSnippets()
    
    if (activeOnly) {
      snippets = snippets.filter(snippet => snippet.active)
    }
    
    return NextResponse.json({
      success: true,
      snippets
    })

  } catch (error) {
    console.error('Failed to load snippets:', error)
    return NextResponse.json(
      { message: 'Unauthorized or failed to load snippets' },
      { status: error.message.includes('token') ? 401 : 500 }
    )
  }
}

// POST - Create new snippet
export async function POST(request) {
  try {
    verifyAdmin(request)
    
    const snippetData = await request.json()
    const snippets = loadSnippets()
    
    const newSnippet = {
      id: snippetData.id || Date.now().toString(),
      name: snippetData.name,
      type: snippetData.type,
      url: snippetData.url,
      tag: snippetData.tag || null,
      generatedHtml: snippetData.generatedHtml,
      active: snippetData.active ?? true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    snippets.push(newSnippet)
    saveSnippets(snippets)
    
    return NextResponse.json({
      success: true,
      snippet: newSnippet
    })

  } catch (error) {
    console.error('Failed to create snippet:', error)
    return NextResponse.json(
      { message: 'Unauthorized or failed to create snippet' },
      { status: error.message.includes('token') ? 401 : 500 }
    )
  }
}