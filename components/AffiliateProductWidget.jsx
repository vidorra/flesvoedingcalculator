'use client'
import { useEffect, useRef, useState } from 'react'
import { getProductsByCategory, getProductsByIds } from './affiliate-products.js'

/**
 * Renders real Bol.com widgets and Amazon affiliate links
 * @param {Object} props
 * @param {string} props.pageId - Page ID to load admin-managed snippets (preferred)
 * @param {string} props.category - Product category (sterilisatoren, babyflessen, etc.) - fallback
 * @param {Array<string>} props.productIds - Specific product IDs to show - fallback
 * @param {string} props.title - Section title
 * @param {number} props.maxProducts - Maximum number of products to show (only for static fallback)
 */
export default function AffiliateProductWidget({ 
  pageId = null,
  category = null, 
  productIds = null,
  title = "Aanbevolen Producten", 
  maxProducts = null 
}) {
  const containerRef = useRef(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Load products from admin system or fallback to static data
  useEffect(() => {
    async function loadProducts() {
      setLoading(true)
      
      if (pageId) {
        // Load from admin system with timeout
        try {
          console.log(`🔍 AffiliateProductWidget: Loading admin data for pageId: ${pageId}`)
          
          // Create timeout promise (8 seconds for better production reliability)
          const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('API timeout')), 8000)
          )
          
          const apiUrl = `/api/affiliates/page/${pageId}/`
          console.log(`🔍 AffiliateProductWidget: Fetching from: ${apiUrl}`)
          const fetchPromise = fetch(apiUrl)
          
          const response = await Promise.race([fetchPromise, timeoutPromise])
          console.log(`🔍 AffiliateProductWidget: API response status: ${response.status} for ${apiUrl}`)
          
          if (response.ok) {
            const data = await response.json()
            console.log(`🔍 AffiliateProductWidget: API response data:`, data)
            
            if (data.success && data.snippets && data.snippets.length > 0) {
              console.log(`✅ AffiliateProductWidget: Successfully loaded ${data.snippets.length} admin snippets`)
              console.log(`🔍 All loaded products:`, data.snippets.map(p => `${p.id} (${p.name}) - ${p.type} - active: ${p.active}`))
              setProducts(data.snippets)
              setLoading(false)
              return
            } else {
              console.warn(`⚠️ AffiliateProductWidget: Admin API returned no snippets. Falling back to static data.`)
            }
          } else {
            console.warn(`⚠️ AffiliateProductWidget: API request failed with status: ${response.status}`)
          }
        } catch (error) {
          console.error('❌ AffiliateProductWidget: Failed to load admin snippets (timeout or connection error), falling back to static data:', error.message)
        }
      }
      
      // Fallback to static data
      console.log(`📦 AffiliateProductWidget: Falling back to static data. Category: ${category}, ProductIds: ${productIds}`)
      const staticProducts = productIds 
        ? getProductsByIds(productIds)
        : getProductsByCategory(category)
      
      console.log(`📦 AffiliateProductWidget: Static products loaded: ${staticProducts.length}`)
      console.log(`📦 AffiliateProductWidget: Static product details:`, staticProducts.map(s => ({id: s.id, name: s.name, type: s.type})))
      setProducts(staticProducts)
      setLoading(false)
      console.log(`🏁 AffiliateProductWidget: Component loading complete. Final state - Loading: false, Products: ${staticProducts.length}`)
    }
    
    loadProducts()
  }, [pageId, category, productIds])
  
  // Debug log for deployment verification - v5 admin system integration
  useEffect(() => {
    if (typeof window !== 'undefined' && products.length > 0 && !loading) {
      const source = pageId ? `page "${pageId}"` : `category "${category}"`
      console.log(`🛍️ AffiliateProductWidget loaded ${products.length} products from ${source} - admin integration v5`)
    }
  }, [products, loading, pageId, category])

  // For admin-managed pages, show all products. For static fallback, limit if specified
  const displayProducts = pageId ? products : (maxProducts ? products.slice(0, maxProducts) : products)
  
  // Debug: Log the transition from products to displayProducts
  if (products.length !== displayProducts.length) {
    console.log(`⚠️ Product count changed: ${products.length} → ${displayProducts.length}`)
    console.log(`📦 Original products:`, products.map(p => p.id))
    console.log(`📋 Display products:`, displayProducts.map(p => p.id))
  }

  useEffect(() => {
    // Debug logging for all products being rendered
    console.log(`🔍 AffiliateProductWidget: About to render ${displayProducts.length} products:`)
    displayProducts.forEach((product, index) => {
      console.log(`  ${index + 1}. ${product.id} (${product.name}) - Type: ${product.type}`)
    })
    
    // Handle Bol.com iframe widgets (no script execution needed)
    displayProducts.forEach(product => {
      if (product.type === 'bol_iframe') {
        console.log(`🔧 Setting up Bol.com iframe widget for ${product.id}`)
      } else if (product.type === 'bol_snippet') {
        console.log(`🔧 Setting up Bol.com snippet for ${product.id} (deprecated)`)
      } else if (product.type === 'amazon_image') {
        console.log(`🔧 Setting up Amazon image widget for ${product.id}`)
      }
    })
  }, [displayProducts])

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
        <div className="text-center py-8">
          <p className="text-gray-600">Laden van productaanbevelingen...</p>
        </div>
      </div>
    )
  }
  
  if (displayProducts.length === 0) {
    return (
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
        <div className="text-center py-8">
          <p className="text-gray-600">Geen productaanbevelingen beschikbaar</p>
          {pageId && (
            <p className="text-gray-500 text-sm mt-2">
              Voeg producten toe via het admin paneel
            </p>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6" ref={containerRef}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <div className="flex items-center space-x-2 text-xs text-gray-500">
          <span>Gesponsorde links</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProducts.map((product, index) => {
          console.log(`🎨 Rendering product ${index + 1}/${displayProducts.length}: ${product.id} (${product.type})`)
          return (
          <div key={product.id} className="relative">
            {/* Product tag (Budget, Aanbevolen, etc.) */}
            {product.tag && (
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                  {product.tag}
                </span>
              </div>
            )}
            
            {/* Debug: Product counter */}
            <div className="absolute top-2 right-2 z-10">
              <span className="bg-gray-800 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold">
                {index + 1}
              </span>
            </div>
            
            {/* Bol.com Iframe Widget */}
            {product.type === 'bol_iframe' && (
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="text-center">
                  <a 
                    href={product.data.productUrl}
                    target="_blank"
                    rel="nofollow noopener"
                    className="block hover:opacity-90 transition-opacity"
                  >
                    <div className="mb-3">
                      <img
                        src={product.data.fallbackImage}
                        alt={product.data.title}
                        className="mx-auto rounded-lg max-w-full h-auto"
                        style={{ maxHeight: '200px' }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/200x200?text=Product+Image'
                        }}
                      />
                    </div>
                    <h4 className="font-medium text-primary text-sm mb-2 line-clamp-2 min-h-[40px] flex items-center">
                      {product.data.title}
                    </h4>
                    <div className="bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors inline-block">
                      Bekijk op bol.com →
                    </div>
                  </a>
                </div>
              </div>
            )}
            
            {/* Bol.com Widget Snippet (deprecated - blocked by adblockers) */}
            {product.type === 'bol_snippet' && (
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div 
                  data-widget-id={product.id}
                  className="min-h-[200px] flex items-center justify-center"
                >
                  <div className="text-gray-400 text-sm">
                    Widget blocked by browser security
                  </div>
                </div>
              </div>
            )}
            
            {/* Amazon Affiliate Image */}
            {product.type === 'amazon_image' && (
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="text-center">
                  <a 
                    href={product.data.url}
                    target="_blank"
                    rel="nofollow noopener"
                    className="block hover:opacity-90 transition-opacity"
                  >
                    <div className="mb-3">
                      <img
                        src={product.data.imageUrl}
                        alt={product.data.alt}
                        className="mx-auto rounded-lg max-w-full h-auto"
                        style={{ maxHeight: '200px' }}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/200x200?text=Product+Image'
                        }}
                      />
                    </div>
                    <h4 className="font-medium text-primary text-sm mb-2 line-clamp-2 min-h-[40px] flex items-center">
                      {product.name}
                    </h4>
                    <div className="bg-orange-500 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors inline-block">
                      Bekijk op Amazon →
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
          )
        })}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Als partner van bol.com en Amazon verdienen we mogelijk een commissie bij aankopen via deze links.
          Dit heeft geen invloed op de prijs voor u.
        </p>
      </div>
    </div>
  )
}