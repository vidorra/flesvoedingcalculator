/**
 * Affiliate Product Database
 * Real Bol.com widgets and Amazon links organized by category
 * Each product can have optional tags like "Budget", "Aanbevolen", etc.
 */

export const affiliateProducts = {
  sterilisatoren: [
    {
      id: 'philips-avent-sterilisator',
      name: 'Philips Avent Flessterilisator',
      tag: 'Aanbevolen',
      type: 'bol_widget',
      data: {
        id: "bol_1759133131817",
        baseUrl: "partner.bol.com",
        productId: "9300000062682298",
        familyId: "",
        siteId: "1472968",
        target: true,
        rating: true,
        price: true,
        deliveryDescription: true,
        button: true,
        linkName: "Philips%20Avent%20Flessterilisator%20Damp%20Droger%20-%20D...",
        linkSubId: ""
      }
    },
    {
      id: 'mam-sterilisator',
      name: 'MAM Sterilisator',
      tag: 'Beste prijs/kwaliteit',
      type: 'bol_widget',
      data: {
        id: "bol_1759133235245",
        baseUrl: "partner.bol.com",
        productId: "9300000050911914",
        familyId: "",
        siteId: "1472968",
        target: true,
        rating: true,
        price: true,
        deliveryDescription: true,
        button: true,
        linkName: "MAM%20Sterilisator%20Grijs%20BPA-vrij",
        linkSubId: ""
      }
    },
    {
      id: 'chicco-sterilisator',
      name: 'Chicco 3-in-1 Sterilisator',
      tag: null, // No tag
      type: 'bol_widget',
      data: {
        id: "bol_1759133338598",
        baseUrl: "partner.bol.com",
        productId: "9300000013318604",
        familyId: "",
        siteId: "1472968",
        target: true,
        rating: true,
        price: true,
        deliveryDescription: true,
        button: true,
        linkName: "Chicco%203%20In%201%20Sterilisator%20Sterilnatural",
        linkSubId: ""
      }
    },
    {
      id: 'lifejxwen-sterilizer',
      name: 'LIFEJXWEN 5-in-1 Electric Sterilizer',
      tag: 'Budget',
      type: 'amazon_image',
      data: {
        url: "https://www.amazon.nl/-/en/dp/B0FN47MMXK?tag=flesvoedingca-21",
        imageUrl: "https://m.media-amazon.com/images/I/517904cDV3L._AC_SL1500_.jpg",
        alt: "LIFEJXWEN 5-in-1 Electric Sterilizer for Baby Bottles, Sterilizing, Drying, Auto-Sterilizing & Drying, Warming Food, Keeping Bottles Warm, Capacity 8 Bottles, 24 Hours Germination Protection",
        width: 300
      }
    }
  ],

  babyflessen: [
    // Add baby bottle products here later
  ],

  spenen: [
    // Add speen/nipple products here later
  ],

  voedingsaccessoires: [
    // Add feeding accessories here later
  ]
}

// Helper function to get products by category and optional tag filter
export function getProductsByCategory(category, tagFilter = null) {
  const products = affiliateProducts[category] || []
  
  if (tagFilter) {
    return products.filter(product => product.tag === tagFilter)
  }
  
  return products
}

// Helper function to get specific products by IDs
export function getProductsByIds(productIds) {
  const allProducts = Object.values(affiliateProducts).flat()
  return productIds.map(id => allProducts.find(product => product.id === id)).filter(Boolean)
}

export default affiliateProducts