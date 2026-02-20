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

// Resolve imageUrl from various snippet fields
function resolveImageUrl(snippet) {
  // Direct imageUrl field
  if (snippet.imageUrl) return snippet.imageUrl
  // bol_snippet type: extractedImageUrl (skip placeholders)
  if (snippet.extractedImageUrl && !snippet.extractedImageUrl.includes('/placeholder/')) return snippet.extractedImageUrl
  // Extract from imageHtml
  if (snippet.imageHtml) {
    const match = snippet.imageHtml.match(/src=["'](https?:\/\/[^"']+)["']/i)
    if (match) return match[1]
  }
  // Extract from generatedHtml
  if (snippet.generatedHtml) {
    const match = snippet.generatedHtml.match(/src=["'](https?:\/\/(?:m\.media-amazon|media\.s-bol)[^"']+)["']/i)
    if (match) return match[1]
  }
  return null
}

// Resolve a clickable URL (prefer affiliate/fallback URLs)
function resolveUrl(snippet) {
  if (snippet.url) return snippet.url
  if (snippet.fallbackUrl) return snippet.fallbackUrl
  if (snippet.productId) return `https://www.bol.com/nl/nl/p/-/${snippet.productId}/`
  return null
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
        id: s.id,
        name: s.name,
        type: s.type,
        tag: s.tag,
        url: resolveUrl(s),
        imageUrl: resolveImageUrl(s),
        clicks: stats[s.id]?.count || 0,
        active: s.active
      }))
      .filter(s => s.url) // only include snippets with a URL
      .sort((a, b) => b.clicks - a.clicks)
      .slice(0, limit)

    return NextResponse.json({ success: true, snippets: active })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
