import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Force dynamic route
export const dynamic = 'force-dynamic'

// Simple session check
function isAuthenticated(request) {
  return true // Simplified for now
}

// Production-safe pages list - no file system operations
function getKnownPages() {
  // Static list of kennisbank pages to avoid file system scanning in production
  return [
    { 
      id: 'hygiene-bereiding_flessen-steriliseren', 
      title: 'Flessen Steriliseren', 
      path: '/kennisbank/hygiene-bereiding/flessen-steriliseren', 
      category: 'hygiene-bereiding', 
      snippetCount: 4 
    },
    { 
      id: 'basis-flesvoeding_flesvoeding-vs-borstvoeding', 
      title: 'Flesvoeding vs Borstvoeding', 
      path: '/kennisbank/basis-flesvoeding/flesvoeding-vs-borstvoeding', 
      category: 'basis-flesvoeding', 
      snippetCount: 0 
    },
    { 
      id: 'voedingstechnieken_overstappen-van-borst-naar-fles', 
      title: 'Overstappen van Borst naar Fles', 
      path: '/kennisbank/voedingstechnieken/overstappen-van-borst-naar-fles', 
      category: 'voedingstechnieken', 
      snippetCount: 0 
    },
    { 
      id: 'basis-flesvoeding_eerste-keer-flesvoeding-geven', 
      title: 'Eerste Keer Flesvoeding Geven', 
      path: '/kennisbank/basis-flesvoeding/eerste-keer-flesvoeding-geven', 
      category: 'basis-flesvoeding', 
      snippetCount: 0 
    },
    { 
      id: 'hygiene-bereiding_juiste-temperatuur-controleren', 
      title: 'Juiste Temperatuur Controleren', 
      path: '/kennisbank/hygiene-bereiding/juiste-temperatuur-controleren', 
      category: 'hygiene-bereiding', 
      snippetCount: 0 
    }
  ]
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