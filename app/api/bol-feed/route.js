import { NextResponse } from 'next/server'
import bolProductFeed from '../../../lib/bol-product-feed.js'

/**
 * GET /api/bol-feed - Get product feed status and statistics
 */
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    
    switch (action) {
      case 'stats':
        const stats = bolProductFeed.getStats()
        return NextResponse.json({
          success: true,
          stats
        })
        
      case 'search':
        const query = searchParams.get('query')
        const limit = parseInt(searchParams.get('limit')) || 10
        
        if (!query) {
          return NextResponse.json({
            success: false,
            error: 'Query parameter is required for search'
          }, { status: 400 })
        }
        
        const results = await bolProductFeed.searchLocalProducts(query, { limit })
        return NextResponse.json({
          success: true,
          query,
          results: results.length,
          products: results
        })
        
      default:
        return NextResponse.json({
          success: true,
          message: 'Bol.com Product Feed API',
          availableActions: ['stats', 'search'],
          examples: {
            stats: '/api/bol-feed?action=stats',
            search: '/api/bol-feed?action=search&query=nutrilon&limit=5'
          }
        })
    }
  } catch (error) {
    console.error('Product feed API error:', error)
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}

/**
 * POST /api/bol-feed - Update product feed (download and process)
 */
export async function POST(request) {
  try {
    const { action } = await request.json()
    
    switch (action) {
      case 'update':
        console.log('Starting product feed update...')
        const result = await bolProductFeed.updateFeed()
        
        return NextResponse.json({
          success: result.success,
          message: result.success ? 'Product feed updated successfully' : 'Feed update failed',
          error: result.error || null,
          timestamp: new Date().toISOString()
        })
        
      default:
        return NextResponse.json({
          success: false,
          error: 'Invalid action. Use "update" to refresh the product feed.'
        }, { status: 400 })
    }
  } catch (error) {
    console.error('Product feed update error:', error)
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}