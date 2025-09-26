# Bol.com API Implementation Example

## 🛠️ What Was Implemented

### 1. Core API Service (`lib/bol-api.js`)
- OAuth2 authentication with Bol.com Partner API
- Product search functionality
- Affiliate link generation
- Error handling and token management

### 2. React Components (`components/BolProductLink.jsx`)
- `BolProductSection`: Full product recommendation sections
- `BolProductCard`: Individual product display cards  
- `BolProductMention`: Inline product mentions in text

### 3. Example Usage
Added product recommendations to `eerste-keer-flesvoeding-geven` article:

```jsx
<BolProductSection
  productNames={[
    'MAM anti colic fles',
    'Nutrilon startvoeding', 
    'Avent sterilisator',
    'baby thermometer',
    'flessenwarmer',
    'babyflessen startset'
  ]}
  title="Aanbevolen Producten voor de Eerste Fles"
  variant="card"
  maxProducts={6}
/>
```

## 🔐 Environment Setup Required

Add to CapRover environment variables:

```
BOL_API_CLIENT_ID=8c2d47c1-3b50-4dcb-9167-d656a785bcaf
BOL_API_CLIENT_SECRET=dA7u6Z+S+m?LgFN)cFygE6K3zMY84KdsreweAAT0DOB3bfoB2vsGE?ViDtWycQrP
```

## 📋 How to Add Products to Any Kennisbank Article

### Step 1: Import Component
```jsx
import BolProductSection from '../../../components/BolProductLink'
```

### Step 2: Add Product Section
```jsx
<BolProductSection
  productNames={['product1', 'product2', 'product3']}
  title="Your Section Title"
  variant="card"
  maxProducts={6}
/>
```

### Step 3: Customize Products
Choose relevant products for each article:
- **Flesvoeding articles**: startvoeding, opvolgmelk, special formulas
- **Equipment articles**: flessen, spenen, sterilizers  
- **Feeding articles**: flessenwarmer, thermometers, accessories

## 🎨 Display Variants

### Card Variant (Recommended)
- Full product cards with images
- Price and rating display
- Best for dedicated product sections

### Inline Variant  
- Horizontal compact layout
- Good for sidebar content
- Shows key info in less space

### Minimal Variant
- Just product name + bol.com tag
- Perfect for in-text mentions
- Non-intrusive design

## 💰 Revenue Optimization

### Strategic Placement
- After problem discussion (before solution)
- At end of instructional sections
- In related articles sections

### Product Selection Tips
- Use specific product names for better matches
- Include popular Dutch baby brands
- Focus on products mentioned in article content

### SEO Compliance
- All links have proper `rel="sponsored"` attribute
- Clear affiliate disclosure included
- Transparent about commission structure

## 🔧 Technical Features

### Performance
- Server-side API calls only
- Product data cached for 1 hour
- Lazy loading of images
- Graceful fallbacks for failures

### Error Handling
- Failed product searches don't break page
- Missing images handled gracefully
- API timeouts logged but not user-visible

### Mobile Optimization
- Responsive grid layouts
- Touch-friendly product cards
- Optimized images for all screen sizes

This implementation provides a complete, SEO-friendly affiliate marketing solution integrated seamlessly into your kennisbank articles.