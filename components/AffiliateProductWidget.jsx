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
          
          // Add cache-busting for production deployment propagation
          const timestamp = Date.now()
          const apiUrl = `/api/affiliates/page/${pageId}?v=${timestamp}`
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
  
  // Debug log for deployment verification - v6 admin system integration
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
    
    // Handle Bol.com widgets
    displayProducts.forEach(product => {
      if (product.type === 'bol_iframe') {
        console.log(`🔧 Setting up Bol.com iframe widget for ${product.id}`)
      } else if (product.type === 'bol_snippet' || product.type === 'bol_script') {
        console.log(`🔧 Setting up Bol.com script widget for ${product.id}`)
        
        // Set up price extraction after script loads
        setTimeout(() => {
          const container = document.querySelector(`[data-product-id="${product.id}"]`)
          if (container) {
            const priceElement = container.querySelector('.price-bol')
            if (priceElement) {
              const priceText = priceElement.textContent || priceElement.innerText
              console.log(`💰 Extracted price for ${product.id}: ${priceText}`)
              
              // Optional: Send price back to admin system for caching
              // This could be used to update the database with current prices
              if (priceText && priceText.trim()) {
                console.log(`📊 Live price available: ${priceText.trim()}`)
              }
            } else {
              console.log(`⚠️ No .price-bol element found for ${product.id}`)
            }
          }
        }, 3000) // Wait 3 seconds for Bol.com script to execute
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
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCA4MEgxMjBWMTIwSDgwVjgwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNOTYgMTA0TDEwNCAxMTJMMTIwIDk2IiBzdHJva2U9IiM2QjczODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='
                          e.target.style.display = 'block'
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
            
            {/* Bol.com Script Widget with Price Extraction */}
            {(product.type === 'bol_snippet' || product.type === 'bol_script') && (
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="bol-script-container" data-product-id={product.id}>
                  {/* Container for Bol.com script execution */}
                  <div 
                    className="bol-widget-content"
                    dangerouslySetInnerHTML={{ __html: `<!-- BOL.COM SNIPPET START for ${product.id} -->${product.generatedHtml || product.data?.html}<!-- BOL.COM SNIPPET END for ${product.id} -->` }}
                  />
                  
                  {/* Fallback content with title and button (shown if Bol.com script doesn't load) */}
                  <div className="fallback-content text-center">
                    <h4 className="font-medium text-primary text-sm mb-2 line-clamp-2 min-h-[40px] flex items-center justify-center">
                      {product.name || product.data?.title}
                    </h4>
                    <a 
                      href={product.url || product.data?.productUrl}
                      target="_blank"
                      rel="nofollow noopener"
                      className="bg-primary text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors inline-block"
                    >
                      Bekijk op bol.com →
                    </a>
                  </div>
                  
                  {/* Custom CSS to style the Bol.com widget - enhanced for new format */}
                  <style jsx>{`
                    .bol-script-container {
                      min-height: 250px;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                    }
                    
                    /* Style the media container */
                    .bol-script-container .media {
                      width: 100%;
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      gap: 12px;
                    }
                    
                    /* Hide delivery info and buttons - keep only essentials */
                    .bol-script-container .product-delivery,
                    .bol-script-container .delivery,
                    .bol-script-container .deliverytext,
                    .bol-script-container .addtocart,
                    .bol-script-container .button,
                    .bol-script-container .btn,
                    .bol-script-container img[width="1"],
                    .bol-script-container .rating {
                      display: none !important;
                    }
                    
                    /* Style the image container */
                    .bol-script-container .media__img,
                    .bol-script-container .left-div {
                      text-align: center;
                      margin-bottom: 12px;
                    }
                    
                    .bol-script-container img {
                      max-width: 180px;
                      max-height: 180px;
                      height: auto;
                      border-radius: 8px;
                      object-fit: contain;
                    }
                    
                    /* Style the content body */
                    .bol-script-container .media__body,
                    .bol-script-container .right-div-preview {
                      text-align: center;
                      width: 100%;
                    }
                    
                    /* Style the product title */
                    .bol-script-container .product_title {
                      display: block !important;
                      font-weight: 600;
                      color: #0f766e;
                      text-decoration: none;
                      margin-bottom: 8px;
                      font-size: 0.875rem;
                      line-height: 1.25rem;
                      text-align: center;
                    }
                    
                    .bol-script-container .product_title:hover {
                      color: #0d9488;
                      text-decoration: underline;
                    }
                    
                    /* Style the price prominently */
                    .bol-script-container .price-bol {
                      display: block !important;
                      font-size: 1.5rem;
                      font-weight: bold;
                      color: #059669;
                      margin: 12px 0;
                      text-align: center;
                    }
                    
                    .bol-script-container .price-fraction {
                      font-size: 1rem;
                      vertical-align: super;
                    }
                    
                    /* Ensure loader is hidden when content loads */
                    .bol-script-container div[id*="Bbol_"] {
                      display: none !important;
                    }
                    
                    /* Fallback content styling */
                    .bol-script-container .fallback-content {
                      display: block;
                      padding: 16px 0;
                    }
                    
                    /* Hide fallback when Bol.com content loads successfully */
                    .bol-script-container div[id*="PLbol_"]:not(:empty) ~ .fallback-content {
                      display: none !important;
                    }
                    
                    /* Show fallback when Bol.com content is empty */
                    .bol-script-container div[id*="PLbol_"]:empty ~ .fallback-content {
                      display: block !important;
                    }
                  `}</style>
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
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04MCA4MEgxMjBWMTIwSDgwVjgwWiIgZmlsbD0iIzlDQTNBRiIvPgo8cGF0aCBkPSJNOTYgMTA0TDEwNCAxMTJMMTIwIDk2IiBzdHJva2U9IiM2QjczODAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='
                          e.target.style.display = 'block'
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