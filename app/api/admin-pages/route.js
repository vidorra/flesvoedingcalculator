import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Force dynamic route
export const dynamic = 'force-dynamic'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const PAGE_SNIPPETS_FILE = path.join(DATA_DIR, 'page-snippets.json')

// Simple session check
function isAuthenticated(request) {
  return true // Simplified for now
}

// Load page snippets to calculate real snippet counts
function loadPageSnippets() {
  if (!fs.existsSync(PAGE_SNIPPETS_FILE)) {
    return {}
  }
  
  try {
    const data = fs.readFileSync(PAGE_SNIPPETS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading page snippets file:', error)
    return {}
  }
}

// Production-safe pages list with dynamic snippet counts
function getKnownPages() {
  const pageSnippets = loadPageSnippets()
  
  // Static list of kennisbank pages 
  const basePages = [
    { 
      id: 'hygiene-bereiding_flessen-steriliseren', 
      title: 'Flessen Steriliseren', 
      path: '/kennisbank/hygiene-bereiding/flessen-steriliseren', 
      category: 'hygiene-bereiding'
    },
    { 
      id: 'basis-flesvoeding_flesvoeding-vs-borstvoeding', 
      title: 'Flesvoeding vs Borstvoeding', 
      path: '/kennisbank/basis-flesvoeding/flesvoeding-vs-borstvoeding', 
      category: 'basis-flesvoeding'
    },
    { 
      id: 'voedingstechnieken_overstappen-van-borst-naar-fles', 
      title: 'Overstappen van Borst naar Fles', 
      path: '/kennisbank/voedingstechnieken/overstappen-van-borst-naar-fles', 
      category: 'voedingstechnieken'
    },
    { 
      id: 'basis-flesvoeding_eerste-keer-flesvoeding-geven', 
      title: 'Eerste Keer Flesvoeding Geven', 
      path: '/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven', 
      category: 'basis-flesvoeding'
    },
    { 
      id: 'hygiene-bereiding_juiste-temperatuur-controleren', 
      title: 'Juiste Temperatuur Controleren', 
      path: '/kennisbank/hygiene-bereiding/juiste-temperatuur-controleren', 
      category: 'hygiene-bereiding'
    }
  ]
  
  // Add dynamic snippet counts based on actual data
  return basePages.map(page => ({
    ...page,
    snippetCount: pageSnippets[page.id]?.length || 0
  }))
}

// GET - List all kennisbank pages
export async function GET(request) {
  try {
    if (!isAuthenticated(request)) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    const pages = getKnownPages()
    
    return NextResponse.json({
      success: true,
      pages
    })

  } catch (error) {
    console.error('Failed to load pages:', error)
    return NextResponse.json(
      { message: 'Failed to load pages', error: error.message },
      { status: 500 }
    )
  }
}