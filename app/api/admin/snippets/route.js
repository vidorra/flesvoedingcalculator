import { NextResponse } from 'next/server'
import * as jwt from 'jsonwebtoken'
import { db } from '../../../../lib/db/connection.js'
import { snippets } from '../../../../lib/db/schema.js'
import { eq } from 'drizzle-orm'
import { autoMigrate } from '../../../../lib/db/auto-migrate.js'

// Force dynamic route
export const dynamic = 'force-dynamic'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here'

// Verify admin token
function verifyAdmin(request) {
  const authHeader = request.headers.get('Authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Missing or invalid token')
  }
  
  const token = authHeader.substring(7)
  const decoded = jwt.verify(token, JWT_SECRET)
  
  if (!decoded.admin) {
    throw new Error('Invalid token')
  }
  
  return decoded
}

// GET - List all snippets from database
export async function GET(request) {
  try {
    verifyAdmin(request)

    // Run auto-migration on first call
    await autoMigrate()

    const allSnippets = await db.select().from(snippets)

    return NextResponse.json({
      success: true,
      snippets: allSnippets
    })

  } catch (error) {
    console.error('Failed to load snippets:', error)
    return NextResponse.json(
      { message: 'Unauthorized or failed to load snippets' },
      { status: error.message.includes('token') ? 401 : 500 }
    )
  }
}

// Helper function to detect if snippet is a Bol.com JavaScript snippet
function isBolComScript(code) {
  if (!code) return false
  return code.includes('bol_sitebar_v2') || code.includes('partner.bol.com')
}

// Helper function to extract product data from Bol.com snippet
function extractBolData(snippet) {
  try {
    const productIdMatch = snippet.match(/"productId":"([^"]+)"/)
    const linkNameMatch = snippet.match(/"linkName":"([^"]+)"/)
    const siteIdMatch = snippet.match(/"siteId":"([^"]+)"/)

    return {
      productId: productIdMatch ? productIdMatch[1] : null,
      productName: linkNameMatch ? decodeURIComponent(linkNameMatch[1]) : null,
      siteId: siteIdMatch ? siteIdMatch[1] : null
    }
  } catch (error) {
    console.error('Error extracting Bol.com data:', error)
    return { productId: null, productName: null, siteId: null }
  }
}

// POST - Create new snippet in database with proper field separation
export async function POST(request) {
  try {
    verifyAdmin(request)

    const snippetData = await request.json()

    // Determine if this is a Bol.com snippet and extract data
    const isBolSnippet = snippetData.type === 'bol' && isBolComScript(snippetData.codeSnippet || snippetData.bolScript)
    let imageHtml = snippetData.imageHtml || snippetData.generatedHtml || null
    let bolScript = null
    let imageUrl = snippetData.imageUrl || null
    let productUrl = snippetData.url || ''
    let productName = snippetData.name || ''

    // If a Bol.com JavaScript snippet is provided
    if (isBolSnippet) {
      bolScript = snippetData.codeSnippet || snippetData.bolScript
      const bolData = extractBolData(bolScript)

      // Use extracted product name if name not provided
      if (!productName && bolData.productName) {
        productName = bolData.productName
      }

      // Build product URL if not provided
      if (!productUrl && bolData.productId) {
        const linkName = encodeURIComponent(bolData.productName || 'product')
        productUrl = `https://partner.bol.com/click/click?p=2&t=url&s=${bolData.siteId || '1472968'}&f=TXL&url=https%3A%2F%2Fwww.bol.com%2Fnl%2Fnl%2Fp%2F${linkName}%2F${bolData.productId}%2F&name=${linkName}`
      }

      // Note: Image extraction should be done via separate API call to /api/admin/extract-bol-image
      // imageHtml will be empty initially if not provided
    }

    if (!productName) {
      return NextResponse.json(
        { message: 'Product name is required' },
        { status: 400 }
      )
    }

    const newSnippet = {
      id: snippetData.id || `snippet-${Date.now()}`,
      name: productName,
      type: snippetData.type,
      url: productUrl,
      tag: snippetData.tag || null,
      // Separate fields for proper data structure
      imageHtml: imageHtml,
      bolScript: bolScript,
      imageUrl: imageUrl,
      generatedHtml: imageHtml || null, // Keep for backwards compatibility
      price: snippetData.price || null,
      originalPrice: snippetData.originalPrice || null,
      currency: snippetData.currency || 'EUR',
      priceLastUpdated: snippetData.price ? new Date() : null,
      active: snippetData.active ?? true,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    const [insertedSnippet] = await db.insert(snippets).values(newSnippet).returning()

    console.log('✅ Created snippet:', insertedSnippet.id, '- Type:', insertedSnippet.type)

    return NextResponse.json({
      success: true,
      snippet: insertedSnippet
    })

  } catch (error) {
    console.error('Failed to create snippet:', error)
    return NextResponse.json(
      { message: 'Unauthorized or failed to create snippet', error: error.message },
      { status: error.message.includes('token') ? 401 : 500 }
    )
  }
}

// PUT - Update existing snippet in database
export async function PUT(request) {
  try {
    verifyAdmin(request)
    
    const snippetData = await request.json()
    const { id, ...updateData } = snippetData
    
    if (!id) {
      return NextResponse.json(
        { message: 'Snippet ID is required' },
        { status: 400 }
      )
    }
    
    const [updatedSnippet] = await db
      .update(snippets)
      .set({
        ...updateData,
        updatedAt: new Date()
      })
      .where(eq(snippets.id, id))
      .returning()
    
    if (!updatedSnippet) {
      return NextResponse.json(
        { message: 'Snippet not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      snippet: updatedSnippet
    })

  } catch (error) {
    console.error('Failed to update snippet:', error)
    return NextResponse.json(
      { message: 'Unauthorized or failed to update snippet' },
      { status: error.message.includes('token') ? 401 : 500 }
    )
  }
}

// DELETE - Remove snippet from database
export async function DELETE(request) {
  try {
    verifyAdmin(request)
    
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    
    if (!id) {
      return NextResponse.json(
        { message: 'Snippet ID is required' },
        { status: 400 }
      )
    }
    
    const [deletedSnippet] = await db
      .delete(snippets)
      .where(eq(snippets.id, id))
      .returning()
    
    if (!deletedSnippet) {
      return NextResponse.json(
        { message: 'Snippet not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json({
      success: true,
      message: 'Snippet deleted successfully',
      snippet: deletedSnippet
    })

  } catch (error) {
    console.error('Failed to delete snippet:', error)
    return NextResponse.json(
      { message: 'Unauthorized or failed to delete snippet' },
      { status: error.message.includes('token') ? 401 : 500 }
    )
  }
}