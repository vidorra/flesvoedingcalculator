import { NextResponse } from 'next/server'
import { db } from '../../../../../lib/db/connection.js'
import { pages } from '../../../../../lib/db/schema.js'
import { verifyAdminAndGetWebsite } from '../../../../../lib/jwt-utils.js'

// Force dynamic route
export const dynamic = 'force-dynamic'

/**
 * PATCH /api/admin/pages/[pageId] - update page metadata.
 *
 * Currently used to toggle `inheritDefault`: when true the page shows the
 * website's Default linked snippets, when false it shows its own.
 *
 * Upserts the page row so the flag persists even for pages that don't yet have
 * a row in the `pages` table (the admin list is partly hardcoded). The client
 * sends the page's title/path/category so the row can be created if missing.
 */
export async function PATCH(request, { params }) {
  try {
    const { website } = verifyAdminAndGetWebsite(request)
    const pageId = (await params).pageId // params is async in Next 15

    if (pageId === 'default') {
      return NextResponse.json(
        { message: 'The Default page cannot inherit from itself' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const inheritDefault = body.inheritDefault !== false // default to true

    await db
      .insert(pages)
      .values({
        id: pageId,
        title: body.title || pageId,
        path: body.path || '',
        category: body.category || 'general',
        website,
        inheritDefault,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .onConflictDoUpdate({
        target: pages.id,
        set: { inheritDefault, updatedAt: new Date() }
      })

    return NextResponse.json({ success: true, pageId, inheritDefault })
  } catch (error) {
    console.error('Failed to update page:', error)
    return NextResponse.json(
      { message: 'Unauthorized or failed to update page' },
      { status: error.message?.includes('token') ? 401 : 500 }
    )
  }
}
