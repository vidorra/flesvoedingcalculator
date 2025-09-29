import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

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
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
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
      { message: 'Failed to load snippets' },
      { status: 500 }
    )
  }
}

// POST - Create new snippet
export async function POST(request) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
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
      { message: 'Failed to create snippet' },
      { status: 500 }
    )
  }
}