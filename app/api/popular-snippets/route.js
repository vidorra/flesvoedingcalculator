import { NextResponse } from 'next/server'
import { db } from '../../../lib/db/connection.js'
import { snippets, pageSnippets } from '../../../lib/db/schema.js'
import { eq, and } from 'drizzle-orm'

export const dynamic = 'force-dynamic'
export const revalidate = 0

/**
 * Detect website from request hostname (togwaarde.nl -> togwaarde, else
 * flesvoedingcalculator). Same mapping as /api/affiliates/page/[pageId].
 */
function detectWebsiteFromHostname(request) {
  const host = request.headers.get('host') || 'localhost'
  const domain = host.split(':')[0].toLowerCase()
  if (domain.includes('togwaarde')) return 'togwaarde'
  return 'flesvoedingcalculator'
}

// GET /api/popular-snippets?limit=4
// Toont de aan de "Standaard (alle pagina's)"-pagina gekoppelde snippets uit
// de database (voorheen las dit een dood JSON-bestand -> homepage bleef leeg).
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = Math.min(parseInt(searchParams.get('limit') || '4', 10), 20)
    const website = detectWebsiteFromHostname(request)

    const rows = await db
      .select({
        order: pageSnippets.order,
        active: pageSnippets.active,
        snippet: snippets
      })
      .from(pageSnippets)
      .leftJoin(snippets, eq(pageSnippets.snippetId, snippets.id))
      .where(and(eq(pageSnippets.pageId, 'default'), eq(pageSnippets.website, website)))
      .orderBy(pageSnippets.order)

    const list = rows
      .filter(r => r.snippet && r.active !== false && r.snippet.active !== false)
      .map(r => ({
        id: r.snippet.id,
        name: r.snippet.name,
        type: r.snippet.type,
        tag: r.snippet.tag,
        url: r.snippet.url,
        imageUrl: r.snippet.imageUrl,
        price: r.snippet.price,
        originalPrice: r.snippet.originalPrice,
        currency: r.snippet.currency,
        active: r.snippet.active
      }))
      .filter(s => s.url)
      .slice(0, limit)

    return NextResponse.json({ success: true, snippets: list })
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 })
  }
}
