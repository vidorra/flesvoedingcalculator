'use client'
import { useEffect, useRef } from 'react'
import { getProductsByCategory, getProductsByIds } from './affiliate-products.js'

/**
 * Renders real Bol.com widgets and Amazon affiliate links
 * @param {Object} props
 * @param {string} props.category - Product category (sterilisatoren, babyflessen, etc.)
 * @param {Array<string>} props.productIds - Specific product IDs to show
 * @param {string} props.title - Section title
 * @param {number} props.maxProducts - Maximum number of products to show
 */
export default function AffiliateProductWidget({ 
  category = null, 
  productIds = null,
  title = "Aanbevolen Producten",
  maxProducts = 6 
}) {
  const containerRef = useRef(null)

  // Get products based on category or specific IDs
  const products = productIds 
    ? getProductsByIds(productIds)
    : getProductsByCategory(category)
  
  // Debug log for deployment verification - v3 script execution approach
  if (typeof window !== 'undefined' && products.length > 0) {
    console.log(`🛍️ AffiliateProductWidget loaded ${products.length} products for category "${category}" - deployment v2`)
  }

  const displayProducts = products.slice(0, maxProducts)

  useEffect(() => {
    // Handle Bol.com snippet injection with proper script execution
    displayProducts.forEach(product => {
      if (product.type === 'bol_snippet') {
        console.log(`🔧 Setting up Bol.com snippet for ${product.id}`)
        
        // Use a timeout to ensure the DOM element is rendered
        setTimeout(() => {
          const container = document.querySelector(`[data-widget-id="${product.id}"]`)
          if (container) {
            // Clear any existing content
            container.innerHTML = ''
            
            // Create a temporary div to parse the HTML
            const tempDiv = document.createElement('div')
            tempDiv.innerHTML = product.data.html
            
            // Extract and execute scripts manually
            const scripts = tempDiv.querySelectorAll('script')
            const targetDiv = tempDiv.querySelector('div')
            
            if (targetDiv) {
              // Add the target div first
              container.appendChild(targetDiv.cloneNode(true))
              
              // Execute scripts in order
              scripts.forEach((script, index) => {
                const newScript = document.createElement('script')
                if (script.src) {
                  newScript.src = script.src
                  newScript.id = script.id || `${product.id}_script_${index}`
                } else {
                  newScript.textContent = script.textContent
                }
                document.head.appendChild(newScript)
                console.log(`📝 Executed script ${index + 1} for ${product.id}`)
              })
              
              console.log(`✅ Bol.com widget setup complete for ${product.id}`)
            }
          }
        }, 100)
      }
    })
  }, [displayProducts])

  if (displayProducts.length === 0) {
    return (
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-primary mb-4">{title}</h3>
        <div className="text-center py-8">
          <p className="text-gray-600">Geen productaanbevelingen beschikbaar</p>
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
            
            {/* Bol.com Widget Snippet */}
            {product.type === 'bol_snippet' && (
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div 
                  data-widget-id={product.id}
                  className="min-h-[200px] flex items-center justify-center"
                >
                  <div className="text-gray-400 text-sm">
                    Loading product...
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
                    className="block hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={product.data.imageUrl}
                      alt={product.data.alt}
                      width={product.data.width}
                      height="auto"
                      className="mx-auto rounded-lg"
                      style={{ maxWidth: '100%', height: 'auto' }}
                    />
                  </a>
                  <div className="mt-3 text-sm text-gray-600">
                    <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">
                      Amazon
                    </span>
                  </div>
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