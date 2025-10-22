import { NextResponse } from 'next/server'
import * as jwt from 'jsonwebtoken'
import { db } from '../../../../lib/db/connection.js'
import { snippets } from '../../../../lib/db/schema.js'
import { eq } from 'drizzle-orm'

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

// POST - Create new snippet in database
export async function POST(request) {
  try {
    verifyAdmin(request)
    
    const snippetData = await request.json()
    
    const newSnippet = {
      id: snippetData.id || `snippet-${Date.now()}`,
      name: snippetData.name,
      type: snippetData.type,
      url: snippetData.url || '',
      tag: snippetData.tag || null,
      // Handle both old and new formats
      generatedHtml: snippetData.generatedHtml || 
                    (snippetData.imageHtml && snippetData.bolScript ? 
                      `${snippetData.imageHtml}\n${snippetData.bolScript}` : 
                      snippetData.imageHtml || snippetData.bolScript || ''),
      price: null,
      originalPrice: null,
      currency: 'EUR',
      priceLastUpdated: null,
      active: snippetData.active ?? true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
    const [insertedSnippet] = await db.insert(snippets).values(newSnippet).returning()
    
    return NextResponse.json({
      success: true,
      snippet: insertedSnippet
    })

  } catch (error) {
    console.error('Failed to create snippet:', error)
    return NextResponse.json(
      { message: 'Unauthorized or failed to create snippet' },
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