import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { verifyAdminAndGetWebsite } from '../../../lib/jwt-utils.js'
import { db } from '../../../lib/db/connection.js'
import { snippets as snippetsTable, pageSnippets } from '../../../lib/db/schema.js'
import { eq, and } from 'drizzle-orm'

// Force dynamic route
export const dynamic = 'force-dynamic'

// Snippets now live in the DB (persistent Postgres), the same store the live
// site reads. The JSON file is no longer used. Click stats stay file-based
// (a separate, non-critical analytics concern).
const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const CLICK_STATS_FILE = path.join(DATA_DIR, 'click-stats.json')

function loadClickStats() {
  try {
    if (!fs.existsSync(CLICK_STATS_FILE)) return {}
    return JSON.parse(fs.readFileSync(CLICK_STATS_FILE, 'utf8'))
  } catch {
    return {}
  }
}

// Pick only real DB columns from an incoming payload (drops JSON-only fields
// such as shortUrl, codeSnippet, productId that don't exist in the table).
const DB_COLUMNS = ['name', 'type', 'url', 'tag', 'generatedHtml', 'imageHtml', 'bolScript', 'imageUrl', 'price', 'originalPrice', 'currency', 'active']
function toDbColumns(data) {
  const out = {}
  for (const key of DB_COLUMNS) {
    if (data[key] !== undefined) out[key] = data[key]
  }
  return out
}

function authError(error) {
  const msg = error?.message || ''
  const isAuth = msg.includes('token') || msg.includes('Missing') || msg.includes('admin')
  return NextResponse.json(
    { message: isAuth ? 'Unauthorized' : 'Request failed', error: msg },
    { status: isAuth ? 401 : 500 }
  )
}

// GET - list ALL snippets (both websites). Each row carries its own `website`
// field so the admin can badge/filter them. Assignment scoping happens per
// page (page_snippets.website), not by hiding snippets from the library view.
export async function GET(request) {
  try {
    verifyAdminAndGetWebsite(request) // auth only

    const url = new URL(request.url)
    const activeOnly = url.searchParams.get('active') === 'true'

    const rows = await db
      .select()
      .from(snippetsTable)
      .orderBy(snippetsTable.createdAt)

    const clickStats = loadClickStats()
    let snippets = rows.map(s => ({ ...s, clicks: clickStats[s.id]?.count || 0 }))
    if (activeOnly) snippets = snippets.filter(s => s.active)

    return NextResponse.json({ success: true, snippets })
  } catch (error) {
    console.error('Failed to load snippets:', error)
    return authError(error)
  }
}

// POST - create a snippet in the DB (upsert on id so re-adding a product updates it)
const VALID_WEBSITES = ['flesvoedingcalculator', 'togwaarde']
export async function POST(request) {
  try {
    const { website: tokenWebsite } = verifyAdminAndGetWebsite(request)
    const data = await request.json()

    if (!data.name || !data.type) {
      return NextResponse.json({ message: 'Name and type are required' }, { status: 400 })
    }

    // Website komt expliciet uit de create-form (admin kiest fles/tog),
    // valt terug op het token als het niet is meegegeven.
    const website = (data.website && VALID_WEBSITES.includes(data.website))
      ? data.website
      : tokenWebsite

    const now = new Date()
    const cols = toDbColumns(data)
    const id = data.id || `${data.type}-${Date.now()}`

    const values = {
      id,
      name: cols.name,
      type: cols.type,
      url: cols.url ?? '',
      tag: cols.tag ?? null,
      generatedHtml: cols.generatedHtml ?? null,
      imageHtml: cols.imageHtml ?? null,
      bolScript: cols.bolScript ?? null,
      imageUrl: cols.imageUrl ?? null,
      price: cols.price ?? null,
      originalPrice: cols.originalPrice ?? null,
      currency: cols.currency ?? 'EUR',
      priceLastUpdated: cols.price ? now : null,
      website,
      active: cols.active ?? true,
      createdAt: now,
      updatedAt: now
    }

    const { id: _omitId, createdAt: _omitCreated, ...updateSet } = values
    updateSet.updatedAt = now

    const [snippet] = await db
      .insert(snippetsTable)
      .values(values)
      .onConflictDoUpdate({ target: snippetsTable.id, set: updateSet })
      .returning()

    return NextResponse.json({ success: true, snippet })
  } catch (error) {
    console.error('Failed to create snippet:', error)
    return authError(error)
  }
}

// PUT - update a snippet (by id; admin manages both websites)
export async function PUT(request) {
  try {
    verifyAdminAndGetWebsite(request) // auth only
    const data = await request.json()

    if (!data.id) {
      return NextResponse.json({ message: 'Snippet ID is required' }, { status: 400 })
    }

    const set = toDbColumns(data)
    if (data.price !== undefined || data.originalPrice !== undefined) {
      set.priceLastUpdated = new Date()
    }
    set.updatedAt = new Date()

    const [snippet] = await db
      .update(snippetsTable)
      .set(set)
      .where(eq(snippetsTable.id, data.id))
      .returning()

    if (!snippet) {
      return NextResponse.json({ message: 'Snippet not found or access denied' }, { status: 404 })
    }
    return NextResponse.json({ success: true, snippet })
  } catch (error) {
    console.error('Failed to update snippet:', error)
    return authError(error)
  }
}

// DELETE - remove one snippet ({ id }) or all snippets for this site ({ all: true }).
// page_snippets links are removed automatically via ON DELETE CASCADE. Pages kept.
export async function DELETE(request) {
  try {
    const { website } = verifyAdminAndGetWebsite(request)
    const body = await request.json()

    if (body?.all === true) {
      // Remove assignments first — the production FK may lack ON DELETE CASCADE,
      // so deleting referenced snippets directly would raise a FK violation.
      await db.delete(pageSnippets).where(eq(pageSnippets.website, website))
      const deleted = await db
        .delete(snippetsTable)
        .where(eq(snippetsTable.website, website))
        .returning({ id: snippetsTable.id })
      console.log(`🧹 Deleted all snippets for ${website}: ${deleted.length} removed`)
      return NextResponse.json({ success: true, dbDeleted: deleted.length, website })
    }

    if (!body?.id) {
      return NextResponse.json({ message: 'Snippet ID is required' }, { status: 400 })
    }

    // Remove this snippet's assignments first (see note above). By snippet id
    // only — a snippet belongs to one website, and the admin manages both.
    await db
      .delete(pageSnippets)
      .where(eq(pageSnippets.snippetId, body.id))
    const [deleted] = await db
      .delete(snippetsTable)
      .where(eq(snippetsTable.id, body.id))
      .returning()

    if (!deleted) {
      return NextResponse.json({ message: 'Snippet not found or access denied' }, { status: 404 })
    }
    return NextResponse.json({ success: true, snippet: deleted })
  } catch (error) {
    console.error('Failed to delete snippet:', error)
    return authError(error)
  }
}
