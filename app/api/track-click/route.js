import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const CLICK_STATS_FILE = path.join(DATA_DIR, 'click-stats.json')

// Bound input and storage so a bot can't pollute stats or grow the file unbounded.
const SNIPPET_ID_PATTERN = /^[A-Za-z0-9_-]{1,128}$/
const MAX_DISTINCT_SNIPPETS = 1000

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

function loadStats() {
  try {
    ensureDataDir()
    if (!fs.existsSync(CLICK_STATS_FILE)) {
      return {}
    }
    return JSON.parse(fs.readFileSync(CLICK_STATS_FILE, 'utf8'))
  } catch {
    return {}
  }
}

function saveStats(stats) {
  ensureDataDir()
  fs.writeFileSync(CLICK_STATS_FILE, JSON.stringify(stats, null, 2))
}

// POST - record a click for a snippet
export async function POST(request) {
  try {
    const body = await request.json()
    const { snippetId } = body

    if (!snippetId || typeof snippetId !== 'string' || !SNIPPET_ID_PATTERN.test(snippetId)) {
      return NextResponse.json({ success: false, error: 'Invalid snippetId' }, { status: 400 })
    }

    const stats = loadStats()
    const existing = stats[snippetId]

    // Don't let unknown IDs grow the file without bound.
    if (!existing && Object.keys(stats).length >= MAX_DISTINCT_SNIPPETS) {
      return NextResponse.json({ success: false, error: 'Click tracking capacity reached' }, { status: 429 })
    }

    stats[snippetId] = {
      count: (existing?.count || 0) + 1,
      lastClicked: new Date().toISOString()
    }
    saveStats(stats)

    return NextResponse.json({ success: true, count: stats[snippetId].count })
  } catch (error) {
    console.error('track-click error:', error)
    return NextResponse.json({ success: false, error: 'Failed to record click' }, { status: 500 })
  }
}

// GET - return all click stats (admin use)
export async function GET() {
  try {
    const stats = loadStats()
    return NextResponse.json({ success: true, stats })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
