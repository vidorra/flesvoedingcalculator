import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-dynamic'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const SNIPPETS_FILE = path.join(DATA_DIR, 'snippets.json')
const CLICK_STATS_FILE = path.join(DATA_DIR, 'click-stats.json')

function readJson(filePath, fallback) {
  try {
    if (!fs.existsSync(filePath)) return fallback
    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
  } catch {
    return fallback
  }
}

// GET /api/popular-snippets?limit=5
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Math.min(parseInt(searchParams.get('limit') || '5', 10), 20)

    const snippets = readJson(SNIPPETS_FILE, [])
    const stats = readJson(CLICK_STATS_FILE, {})

    const active = snippets
      .filter(s => s.active !== false)
      .map(s => ({
        ...s,
        clicks: stats[s.id]?.count || 0
      }))
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, limit)

    return NextResponse.json({ success: true, snippets: active })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
