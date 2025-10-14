# 🚨 Affiliate System Fix Guide - STOP THE LOOP!

**Date:** October 13, 2025  
**Problem:** 31+ commits in 7 days creating a complex web of broken functionality  
**Goal:** Fix affiliate system once and for all with clear guidelines  

## 📊 Git History Analysis (Last 7 Days)

**The Endless Loop Pattern:**
```
c71cc81 Fix pageId to match backend data format and load dynamic images
bb28e90 Fix pageId for affiliate widget to ensure static fallback works
538f527 Show all widget content by default in correct order
7f0db87 Fix differentiated fallback logic for Bol.com vs regular widgets
9a2eca4 Fix test widget structure - move bol-widget-content inside fallback-content
8fbeec8 Restructure fallback-content to contain bol-widget-content as child
d30d780 Enhance CSS to aggressively hide Bol.com images and titles
3d9b317 Customize Bol.com widget display to show only essential info
```

**Pattern Recognition:**
- 🔄 **15+ "Fix" commits** - each breaking something else
- 🎨 **8+ CSS/styling changes** - over-engineering display logic
- 📦 **6+ data recreation commits** - losing configured data
- 🧪 **12+ test widget changes** - constant restructuring

**Key Insight:** Each fix created new problems because we were treating **symptoms** not **root causes**.

## 🎯 Root Problems Identified

### 1. **Data Structure Corruption**
Looking at `data/admin/snippets.json`, I found:
```json
"generatedHtml": "<div class=\"media h-boxedbottom--m\"><div class=\"media__img\"><img src=\"\" class=\"h-fluid-img\" id=\"preview-image\"></div>"
```
**ISSUE:** Empty `src=""` attributes - images can't load!

### 2. **Confusion Between Two Different Systems**
The code mixes up **TWO SEPARATE CONCEPTS**:
- **Image HTML**: Static images from admin dashboard (should have proper `src` URLs)
- **Bol.com Code Snippet**: JavaScript widgets that dynamically load content

### 3. **Complex Fallback Logic**
Over-engineered hide/show logic that breaks constantly with each change.

---

## 📋 Current Issues (October 13, 2025)

### Test Bol.com Widget
✅ **WORKS**: Shows image, title, Bol.com snippet, button  
❌ **PROBLEM**: Uses outdated product ID `9300000062682298` (product removed from bol.com)  
✅ **SOLUTION PROVIDED**: New snippet with `bol_1760347149289` and product ID `9300000006206090`

### Main Widget List
❌ **BROKEN**: "Laden van productaanbevelingen..." persists  
❌ **IMAGES MISSING**: Empty `src=""` in all image tags  
❌ **MIXED UP**: Image HTML and Bol.com snippets incorrectly combined  

---

## 🏗️ Correct System Architecture

### Admin Dashboard Structure
```
Admin Dashboard
├── Snippets Management
│   ├── Image HTML (for fallback display)
│   │   ├── id: "philips-avent-sterilisator"
│   │   ├── name: "Philips Avent Flessterilisator"  
│   │   ├── imageHtml: "<img src='ACTUAL_URL' alt='Product'>"
│   │   └── fallbackUrl: "https://bol.com/..."
│   └── Bol.com Code Snippet (for dynamic content)
│       ├── bolScript: "<script>var bol_sitebar_v2={...}</script>"
│       └── productId: "9300000006206090"
└── Page Management
    └── Assign snippets to pages
```

### Display Logic (SIMPLIFIED)
```
For each affiliate widget:
1. Show Image HTML (from admin - ALWAYS visible)
2. Show Title (from admin - ALWAYS visible)
3. Show Bol.com Script (if exists - additional content)
4. Show Button (fallback action - ALWAYS visible)
```

---

## 🔧 Step-by-Step Fix Plan

### Phase 1: Data Cleanup (CRITICAL)

#### Step 1.1: Fix Image HTML in Admin Data
Current broken format:
```html
<img src="" class="h-fluid-img" id="preview-image">
```

Should be:
```html
<img src="https://media.s-bol.com/NKX9XZWN3RGL/0RNmv15/550x707.jpg" alt="Philips Avent Flessterilisator" class="h-fluid-img">
```

**IMMEDIATE ACTION REQUIRED:**
1. ✅ Update `data/admin/snippets.json`
2. ✅ Add proper `src` URLs to all image tags
3. ✅ Separate Image HTML from Bol.com scripts

#### Step 1.2: Update Test Widget
Replace old product ID:
- ❌ OLD: `productId":"9300000062682298"`
- ✅ NEW: `productId":"9300000006206090"`
- ✅ NEW: `id":"bol_1760347149289"`

### Phase 2: Component Simplification

#### Step 2.1: Simplify AffiliateProductWidget
**REMOVE** complex fallback logic. **USE** simple display order:
```jsx
<div className="affiliate-widget">
  {/* 1. Image HTML - from admin */}
  <div dangerouslySetInnerHTML={{__html: product.imageHtml}} />
  
  {/* 2. Title - from admin */}
  <h4>{product.name}</h4>
  
  {/* 3. Bol.com Script - if exists */}
  {product.bolScript && (
    <div dangerouslySetInnerHTML={{__html: product.bolScript}} />
  )}
  
  {/* 4. Fallback Button - always show */}
  <a href={product.url}>Bekijk op bol.com →</a>
</div>
```

#### Step 2.2: Remove Complex CSS
**DELETE** all the complex hide/show CSS:
- ❌ Remove: `.bol-script-container .fallback-content .bol-widget-content ~ div:first-child { display: none; }`
- ❌ Remove: Complex `:has()` selectors
- ❌ Remove: JavaScript hide/show management

**KEEP** only basic styling:
- ✅ Keep: Product layout and spacing
- ✅ Keep: Bol.com content styling (price, rating display)

### Phase 3: Admin System Fix

#### Step 3.1: Separate Data Fields
Update admin interface to have **SEPARATE** fields:
```javascript
// Admin Snippet Object
{
  id: "philips-avent-sterilisator",
  name: "Philips Avent Flessterilisator",
  type: "bol",
  
  // SEPARATE: Image HTML (for fallback display)
  imageHtml: "<img src='...' alt='...' class='product-image'>",
  
  // SEPARATE: Bol.com Code Snippet (for dynamic content)  
  bolScript: "<script type='text/javascript'>var bol_sitebar_v2={...};</script>",
  
  // SEPARATE: Fallback URL
  fallbackUrl: "https://www.bol.com/nl/nl/p/...",
  
  active: true
}
```

#### Step 3.2: Update API Response Format
```javascript
// Frontend API Response
{
  success: true,
  snippets: [{
    id: "philips-avent-sterilisator",
    name: "Philips Avent Flessterilisator", 
    tag: "Aanbevolen",
    type: "bol_snippet",
    
    // Image data for display
    imageHtml: "<img src='https://...' alt='...'>",
    
    // Bol.com script for dynamic content
    bolScript: "<script>...</script>",
    
    // Fallback URL for button
    fallbackUrl: "https://www.bol.com/..."
  }]
}
```

---

## 🚫 What NOT To Do (STOP THE LOOP!)

### DON'T Change These Anymore:
1. ❌ **DON'T** modify CSS hide/show logic
2. ❌ **DON'T** add complex JavaScript fallback management  
3. ❌ **DON'T** change the widget structure without updating this guide
4. ❌ **DON'T** mix Image HTML with Bol.com Scripts in the same field
5. ❌ **DON'T** force recreate data files without backing up working data

### DON'T Commit These Patterns:
- "Fix affiliate widget display logic" (you've done this 15+ times)
- "Hide Bol.com images" (this breaks Image HTML display)
- "Restructure fallback content" (this causes alignment issues)
- "Force production data recreation" (this loses admin configuration)

---

## ✅ Implementation Checklist

### Immediate Fixes (Today)
- [ ] **Fix empty image src attributes** in `data/admin/snippets.json`
- [ ] **Update test widget** with new product ID `9300000006206090`
- [ ] **Simplify display logic** to always show all elements
- [ ] **Remove complex CSS** hide/show rules

### Data Structure (This Week)
- [ ] **Separate Image HTML from Bol.com Scripts** in admin data
- [ ] **Update admin interface** to have separate fields
- [ ] **Test on single product** before applying to all
- [ ] **Backup working configuration** before major changes

### Long-term Stability
- [ ] **Document working configuration** in this guide
- [ ] **Create admin interface validation** to prevent data corruption
- [ ] **Add automated tests** for affiliate widget display
- [ ] **Version control admin data** to prevent loss

---

## 🔍 Debug Commands

### Check Current Data
```bash
# Check current admin data
cat data/admin/snippets.json | jq '.[0]'

# Test API response
curl "https://www.flesvoedingcalculator.nl/api/affiliates/page/hygiene-bereiding_flessen-steriliseren/" | jq .

# Check git history
git log --oneline --since="7 days ago" --grep="affiliate"
```

### Verify Images
```bash
# Check for empty image sources
grep -n 'src=""' data/admin/snippets.json

# Verify image URLs work
curl -I "https://media.s-bol.com/NKX9XZWN3RGL/0RNmv15/550x707.jpg"
```

---

## 📞 Emergency Rollback

If affiliate system breaks completely:

1. **Revert to working commit** (find last known good state)
2. **Restore data files** from backup
3. **Test single widget** before deploying all
4. **Update this guide** with lessons learned

---

## 🎯 Success Criteria

### Test Widget Should Show:
- ✅ Product image (from Image HTML)
- ✅ Product title (from admin data)  
- ✅ Bol.com dynamic content (price, rating, delivery)
- ✅ Fallback button (always visible)

### Main Widget List Should Show:
- ✅ 5 products with images
- ✅ All images loaded (no empty src)
- ✅ Proper titles and tags
- ✅ Working Bol.com integration
- ✅ No "Laden van..." messages

### Admin System Should Allow:
- ✅ Separate management of Image HTML and Bol.com Scripts
- ✅ Easy updating of product images
- ✅ Simple addition of new products
- ✅ Preview of changes before saving

---

**⚠️ CRITICAL RULE: Before making ANY affiliate system changes, update this guide first!**

**Last Updated:** October 13, 2025  
**Next Review:** After successful implementation  
**Status:** 🚨 URGENT - System broken, needs immediate attention