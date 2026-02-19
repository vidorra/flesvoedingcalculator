import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const CLICK_STATS_FILE = path.join(DATA_DIR, 'click-stats.json')

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

    if (!snippetId || typeof snippetId !== 'string') {
      return NextResponse.json({ success: false, error: 'snippetId required' }, { status: 400 })
    }

    const stats = loadStats()
    const existing = stats[snippetId] || { count: 0 }
    stats[snippetId] = {
      count: existing.count + 1,
      lastClicked: new Date().toISOString()
    }
    saveStats(stats)

    return NextResponse.json({ success: true, count: stats[snippetId].count })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
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
