/**
 * Bol.com Partner API Integration
 * Used for product search and affiliate link generation in kennisbank articles
 */

class BolAPI {
  constructor() {
    this.clientId = process.env.BOL_API_CLIENT_ID
    this.clientSecret = process.env.BOL_API_CLIENT_SECRET
    this.baseURL = 'https://api.bol.com'
    this.accessToken = null
    this.tokenExpiry = null
  }

  /**
   * Get OAuth2 access token for Bol.com API
   * @returns {Promise<string>} Access token
   */
  async getAccessToken() {
    // Check if we have a valid token
    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.accessToken
    }

    if (!this.clientId || !this.clientSecret) {
      throw new Error('Bol.com API credentials not configured. Set BOL_API_CLIENT_ID and BOL_API_CLIENT_SECRET environment variables.')
    }

    try {
      const credentials = btoa(`${this.clientId}:${this.clientSecret}`)
      
      const response = await fetch(`${this.baseURL}/login/v1/token`, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Bol.com API authentication failed: ${response.status} - ${errorText}`)
      }

      const data = await response.json()
      
      this.accessToken = data.access_token
      // Set expiry to 5 minutes before actual expiry for safety
      this.tokenExpiry = Date.now() + (data.expires_in - 300) * 1000
      
      return this.accessToken
    } catch (error) {
      console.error('Bol.com API authentication error:', error)
      throw error
    }
  }

  /**
   * Search for products on Bol.com
   * @param {string} query - Search query
   * @param {Object} options - Search options
   * @param {number} options.limit - Number of results (max 50)
   * @param {number} options.offset - Offset for pagination
   * @param {string} options.categoryId - Category filter
   * @returns {Promise<Object>} Search results
   */
  async searchProducts(query, options = {}) {
    const { limit = 10, offset = 0, categoryId } = options
    
    try {
      const token = await this.getAccessToken()
      
      const params = new URLSearchParams({
        q: query,
        limit: Math.min(limit, 50).toString(),
        offset: offset.toString()
      })
      
      if (categoryId) {
        params.append('categoryId', categoryId)
      }

      const response = await fetch(`${this.baseURL}/catalog/v4/search?${params}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.retailer.v4+json'
        }
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Bol.com API search failed: ${response.status} - ${errorText}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Bol.com product search error:', error)
      throw error
    }
  }

  /**
   * Get product details by ID
   * @param {string} productId - Bol.com product ID
   * @returns {Promise<Object>} Product details
   */
  async getProduct(productId) {
    try {
      const token = await this.getAccessToken()
      
      const response = await fetch(`${this.baseURL}/catalog/v4/products/${productId}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/vnd.retailer.v4+json'
        }
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Bol.com API product fetch failed: ${response.status} - ${errorText}`)
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error('Bol.com product fetch error:', error)
      throw error
    }
  }

  /**
   * Generate affiliate link for a product
   * @param {string} productId - Bol.com product ID
   * @param {string} productName - Product name for tracking
   * @returns {string} Affiliate link
   */
  generateAffiliateLink(productId, productName = '') {
    // Bol.com affiliate link format with your partner tag
    const baseUrl = 'https://partner.bol.com/click/click'
    const params = new URLSearchParams({
      p: '2', // Product type
      t: 'url', // Tracking type
      s: this.clientId, // Your client ID as site ID
      f: 'TXL', // Format
      url: `https://www.bol.com/nl/nl/p/${productId}/`,
      name: productName || `Product ${productId}`
    })
    
    return `${baseUrl}?${params.toString()}`
  }

  /**
   * Search and get best matching product with affiliate link
   * @param {string} productName - Product to search for
   * @param {Object} options - Search options
   * @returns {Promise<Object|null>} Product with affiliate link or null
   */
  async findProductWithLink(productName, options = {}) {
    try {
      const searchResults = await this.searchProducts(productName, { limit: 5, ...options })
      
      if (!searchResults.products || searchResults.products.length === 0) {
        console.warn(`No products found for: ${productName}`)
        return null
      }

      // Get the first (best matching) product
      const product = searchResults.products[0]
      
      return {
        id: product.id,
        title: product.title,
        summary: product.summary,
        price: product.offerData?.offers?.[0]?.price,
        imageUrl: product.images?.[0]?.url,
        rating: product.rating,
        affiliateLink: this.generateAffiliateLink(product.id, product.title),
        originalUrl: `https://www.bol.com/nl/nl/p/${product.id}/`
      }
    } catch (error) {
      console.error(`Error finding product "${productName}":`, error)
      return null
    }
  }
}

// Export singleton instance
const bolAPI = new BolAPI()
export default bolAPI

/**
 * Utility functions for easy use in components
 */

/**
 * Search for baby feeding products
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of products with affiliate links
 */
export async function searchBabyProducts(query) {
  try {
    // Try enhanced search with product feed first
    try {
      const { searchProductsEnhanced } = await import('./bol-product-feed.js')
      const enhancedResults = await searchProductsEnhanced(query, { limit: 10 })
      
      if (enhancedResults.length > 0) {
        return enhancedResults.map(product => ({
          id: product.id,
          title: product.title,
          summary: product.summary,
          price: product.price?.amount,
          imageUrl: product.imageUrl,
          rating: product.rating,
          brand: product.brand,
          affiliateLink: bolAPI.generateAffiliateLink(product.id, product.title),
          originalUrl: `https://www.bol.com/nl/nl/p/${product.id}/`
        }))
      }
    } catch (feedError) {
      console.log('Product feed search failed, falling back to API:', feedError.message)
    }
    
    // Fallback to API search
    const results = await bolAPI.searchProducts(`baby ${query} flesvoeding`, { 
      limit: 10,
      categoryId: '3135' // Baby & Peuter category
    })
    
    if (!results.products) return []
    
    return results.products.map(product => ({
      id: product.id,
      title: product.title,
      summary: product.summary,
      price: product.offerData?.offers?.[0]?.price,
      imageUrl: product.images?.[0]?.url,
      rating: product.rating,
      affiliateLink: bolAPI.generateAffiliateLink(product.id, product.title),
      originalUrl: `https://www.bol.com/nl/nl/p/${product.id}/`
    }))
  } catch (error) {
    console.error('Error searching baby products:', error)
    return []
  }
}

/**
 * Get product recommendations for kennisbank articles
 * @param {Array<string>} productNames - Array of product names to search for
 * @returns {Promise<Array>} Array of found products with affiliate links
 */
export async function getKennisbankProductLinks(productNames) {
  const products = []
  
  for (const productName of productNames) {
    try {
      const product = await bolAPI.findProductWithLink(productName)
      if (product) {
        products.push(product)
      }
    } catch (error) {
      console.error(`Error fetching product "${productName}":`, error)
    }
  }
  
  return products
}