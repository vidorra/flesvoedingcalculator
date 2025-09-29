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
  
  // Debug log for deployment verification - v2 force redeploy
  if (typeof window !== 'undefined' && products.length > 0) {
    console.log(`🛍️ AffiliateProductWidget loaded ${products.length} products for category "${category}" - deployment v2`)
  }

  const displayProducts = products.slice(0, maxProducts)

  useEffect(() => {
    // Load Bol.com widgets after component mounts
    const cleanup = []
    
    displayProducts.forEach(product => {
      if (product.type === 'bol_widget') {
        console.log(`🔧 Setting up Bol.com widget for ${product.data.id}:`, product.data)
        
        // Set up Bol.com widget configuration with correct property name
        window[`bol_sitebar_v2_${product.data.id}`] = product.data
        
        // Verify the configuration was set
        console.log(`🔍 Widget config set:`, window[`bol_sitebar_v2_${product.data.id}`])
        
        // Check if script already exists
        const existingScript = document.getElementById(`bol-script-${product.data.id}`)
        if (!existingScript) {
          // Load the Bol.com widget script
          const script = document.createElement('script')
          script.src = 'https://partner.bol.com/promotion/static/js/partnerProductlinkV2.js'
          script.id = `bol-script-${product.data.id}`
          script.async = true
          
          // Add debug logging
          script.onload = () => {
            console.log(`✅ Bol.com widget script loaded for ${product.data.id}`)
            // Check if DOM element exists
            const targetElement = document.getElementById(product.data.id)
            console.log(`🎯 Target element found:`, targetElement)
          }
          script.onerror = () => {
            console.error(`❌ Failed to load Bol.com widget script for ${product.data.id}`)
          }
          
          document.head.appendChild(script)
          
          cleanup.push(() => {
            const scriptElement = document.getElementById(`bol-script-${product.data.id}`)
            if (scriptElement) {
              document.head.removeChild(scriptElement)
            }
            delete window[`bol_sitebar_v2_${product.data.id}`]
          })
        } else {
          console.log(`🔄 Bol.com script already exists for ${product.data.id}`)
        }
      }
    })

    // Return cleanup function
    return () => {
      cleanup.forEach(fn => fn())
    }
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
            
            {/* Bol.com Widget */}
            {product.type === 'bol_widget' && (
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div id={product.data.id} className="min-h-[200px] text-center">
                  {/* Bol.com widget will load here */}
                  <div className="text-sm text-gray-500 mt-8">
                    Loading Bol.com product...
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