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
 * @param {number} props.maxProducts - Maximum number of products to show
 */
export default function AffiliateProductWidget({ 
  pageId = null,
  category = null, 
  productIds = null,
  title = "Aanbevolen Producten",
  maxProducts = 6 
}) {
  const containerRef = useRef(null)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Load products from admin system or fallback to static data
  useEffect(() => {
    async function loadProducts() {
      setLoading(true)
      
      if (pageId) {
        // Load from admin system
        try {
          const response = await fetch(`/api/affiliates/page/${pageId}`)
          if (response.ok) {
            const data = await response.json()
            if (data.success && data.snippets.length > 0) {
              setProducts(data.snippets)
              setLoading(false)
              return
            }
          }
        } catch (error) {
          console.warn('Failed to load admin snippets, falling back to static data:', error)
        }
      }
      
      // Fallback to static data
      const staticProducts = productIds 
        ? getProductsByIds(productIds)
        : getProductsByCategory(category)
      
      setProducts(staticProducts)
      setLoading(false)
    }
    
    loadProducts()
  }, [pageId, category, productIds])
  
  // Debug log for deployment verification - v5 admin system integration
  if (typeof window !== 'undefined' && products.length > 0 && !loading) {
    const source = pageId ? `page "${pageId}"` : `category "${category}"`
    console.log(`🛍️ AffiliateProductWidget loaded ${products.length} products from ${source} - admin integration v5`)
  }

  const displayProducts = products.slice(0, maxProducts)

  useEffect(() => {
    // Handle Bol.com iframe widgets (no script execution needed)
    displayProducts.forEach(product => {
      if (product.type === 'bol_iframe') {
        console.log(`🔧 Setting up Bol.com iframe widget for ${product.id}`)
      } else if (product.type === 'bol_snippet') {
        console.log(`🔧 Setting up Bol.com snippet for ${product.id} (deprecated)`)
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
        {displayProducts.map((product) => (
          <div key={product.id} className="relative">
            {/* Product tag (Budget, Aanbevolen, etc.) */}
            {product.tag && (
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-primary text-white text-xs px-2 py-1 rounded-full font-medium">
                  {product.tag}
                </span>
              </div>
            )}
            
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
        ))}
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