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
    // Try enhanced search via API endpoint first (server-side product feed)
    try {
      const response = await fetch('/api/bol-feed?action=search&query=' + encodeURIComponent(query) + '&limit=10')
      if (response.ok) {
        const data = await response.json()
        if (data.success && data.products?.length > 0) {
          return data.products.map(product => ({
            id: product.id,
            title: product.title,
            summary: product.summary,
            price: product.price,
            imageUrl: product.imageUrl,
            rating: product.rating,
            brand: product.brand,
            affiliateLink: bolAPI.generateAffiliateLink(product.id, product.title),
            originalUrl: `https://www.bol.com/nl/nl/p/${product.id}/`
          }))
        }
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
  // TEMPORARY FALLBACK: Return mock products with affiliate links while network issue is resolved
  // This ensures affiliate links are displayed until connectivity to Bol.com is restored
  
  const mockProducts = [
    {
      id: '9200000024738052',
      title: 'Philips Avent Sterilisator - Bekijk op bol.com',
      summary: 'Elektrische stoomsterilisator voor babyflessen. Veilig en effectief.',
      price: null, // No specific price - direct to bol.com
      imageUrl: 'https://partner.bol.com/promotion/assets/graphics/logo_sitebar.png',
      rating: null,
      affiliateLink: bolAPI.generateAffiliateLink('philips-avent-sterilisator', 'Philips Avent Sterilisator'),
      originalUrl: 'https://www.bol.com/nl/nl/s/?searchtext=philips+avent+sterilisator'
    },
    {
      id: '9200000011487108',
      title: 'MAM Babyflessen - Bekijk op bol.com',
      summary: 'Anti-colic babyflessen en accessoires. BPA-vrij en veilig.',
      price: null,
      imageUrl: 'https://partner.bol.com/promotion/assets/graphics/logo_sitebar.png',
      rating: null,
      affiliateLink: bolAPI.generateAffiliateLink('mam-babyfles', 'MAM Babyfles'),
      originalUrl: 'https://www.bol.com/nl/nl/s/?searchtext=mam+babyfles'
    },
    {
      id: '9200000044389264',
      title: 'Chicco Sterilisator - Bekijk op bol.com',
      summary: 'Digitale sterilisator voor baby accessoires. Betrouwbaar en praktisch.',
      price: null,
      imageUrl: 'https://partner.bol.com/promotion/assets/graphics/logo_sitebar.png',
      rating: null,
      affiliateLink: bolAPI.generateAffiliateLink('chicco-sterilisator', 'Chicco Sterilisator'),
      originalUrl: 'https://www.bol.com/nl/nl/s/?searchtext=chicco+sterilisator'
    },
    {
      id: '9200000090832123',
      title: 'Sterilisatorzakjes - Bekijk op bol.com',
      summary: 'Magnetron sterilisatorzakjes. Herbruikbaar en praktisch voor onderweg.',
      price: null,
      imageUrl: 'https://partner.bol.com/promotion/assets/graphics/logo_sitebar.png',
      rating: null,
      affiliateLink: bolAPI.generateAffiliateLink('sterilisatorzakjes', 'Sterilisatorzakjes'),
      originalUrl: 'https://www.bol.com/nl/nl/s/?searchtext=sterilisatorzakjes'
    },
    {
      id: '9200000076543210',
      title: 'Baby Fles Tang - Bekijk op bol.com',
      summary: 'RVS tang voor veilig hanteren van gesteunde flessen en spenen.',
      price: null,
      imageUrl: 'https://partner.bol.com/promotion/assets/graphics/logo_sitebar.png',
      rating: null,
      affiliateLink: bolAPI.generateAffiliateLink('baby-fles-tang', 'Baby Fles Tang'),
      originalUrl: 'https://www.bol.com/nl/nl/s/?searchtext=baby+fles+tang'
    },
    {
      id: '9200000098765432',
      title: 'Sterilisatie Tabletten - Bekijk op bol.com',
      summary: 'Koude sterilisatie tabletten voor baby items. Ideaal voor reizen.',
      price: null,
      imageUrl: 'https://partner.bol.com/promotion/assets/graphics/logo_sitebar.png',
      rating: null,
      affiliateLink: bolAPI.generateAffiliateLink('sterilisatie-tabletten', 'Sterilisatie Tabletten'),
      originalUrl: 'https://www.bol.com/nl/nl/s/?searchtext=sterilisatie+tabletten'
    }
  ]
  
  // Match mock products to requested product names
  const products = []
  
  for (const productName of productNames) {
    const normalizedName = productName.toLowerCase()
    
    // Find best matching mock product
    const matchedProduct = mockProducts.find(product => {
      const productTitle = product.title.toLowerCase()
      return normalizedName.split(' ').some(term => 
        productTitle.includes(term) && term.length > 3
      )
    })
    
    if (matchedProduct && !products.find(p => p.id === matchedProduct.id)) {
      products.push(matchedProduct)
    }
  }
  
  // Fill remaining slots with unmatched products if needed
  while (products.length < Math.min(productNames.length, 6)) {
    const unmatchedProduct = mockProducts.find(product => 
      !products.find(p => p.id === product.id)
    )
    if (unmatchedProduct) {
      products.push(unmatchedProduct)
    } else {
      break
    }
  }
  
  // TODO: Remove this fallback once network connectivity to publicfeeds.bol.com is restored
  console.log('Using fallback affiliate products due to network connectivity issue - v2 deployed')
  
  return products
}