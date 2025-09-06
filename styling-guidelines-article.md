# Kennisbank Article Styling Guidelines

This document outlines the complete styling standards for all kennisbank articles to ensure consistency, accessibility, and proper visual hierarchy.

## 🎨 Color Scheme Standards

### ✅ Approved Colors

**Text Colors:**
- `text-primary` - For main headings (h1, h2) and important elements
- `text-gray-600` - For body text and secondary content
- `text-gray-700` - For slightly darker body text
- `text-gray-800` - For dark emphasis text (rare use)

**Background Colors:**
- `bg-white/80` - For main content cards with transparency
- `bg-gray-50` - For subtle section backgrounds
- `bg-gray-100` - For neutral highlight sections
- `bg-default` - For brand-consistent backgrounds

**Icon Colors:**
- `text-primary` - For brand-consistent icons
- `text-gray-500` - For neutral/secondary icons
- `text-gray-600` - For content-related icons

### ❌ Forbidden Colors

**STRICTLY PROHIBITED - Never use any of these color classes:**

**Text Colors:**
- `text-blue-*` (any shade: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900)
- `text-red-*` (any shade)
- `text-green-*` (any shade)
- `text-yellow-*` (any shade)
- `text-purple-*` (any shade)
- `text-pink-*` (any shade)
- `text-indigo-*` (any shade)
- `text-amber-*` (any shade)
- `text-orange-*` (any shade)

**Background Colors:**
- `bg-blue-*` (any shade)
- `bg-red-*` (any shade)
- `bg-green-*` (any shade)
- `bg-yellow-*` (any shade)
- `bg-purple-*` (any shade)
- `bg-pink-*` (any shade)
- `bg-indigo-*` (any shade)
- `bg-amber-*` (any shade)
- `bg-orange-*` (any shade)

**Border Colors:**
- `border-blue-*` (any shade)
- `border-red-*` (any shade)
- `border-green-*` (any shade)
- `border-yellow-*` (any shade)
- `border-purple-*` (any shade)
- `border-pink-*` (any shade)
- `border-amber-*` (any shade)

**NO EXCEPTIONS:** All colored elements must use neutral colors only (gray shades + primary brand color).

## 📱 Layout Structure

### Required Layout Pattern

Every kennisbank article MUST follow this structure:

```jsx
import Layout from '../../../components/Layout'
import Link from 'next/link'
import KennisbankSidebar from '../../../components/KennisbankSidebar'
import { /* required icons */ } from 'lucide-react'

export default function ArticlePage() {
  // Sidebar configuration
  const sidebarImages = [
    {
      src: "/relevant-image.png",
      alt: "Descriptive alt text",
      caption: "Helpful caption"
    }
    // 2-3 images maximum
  ]

  const adTopics = ["Topic 1", "Topic 2", "Topic 3"]

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-7">
          <div className="space-y-6">
            {/* Article content */}
          </div>
        </div>
        
        <KennisbankSidebar images={sidebarImages} adTopics={adTopics} />
      </div>
    </Layout>
  )
}
```

### Layout Rules

1. **Container Structure:**
   - Use `grid grid-cols-12 gap-6` for main container
   - **Never** add `min-h-screen` to grid containers
   - Content area: `col-span-12 lg:col-span-7`
   - Sidebar automatically takes remaining space

2. **Content Organization:**
   - **Never** wrap all content in single large container (`max-w-4xl mx-auto p-8`)
   - Each major section must be in separate card container
   - Use individual `bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6` cards
   - Content structure: `<div className="space-y-6">` containing individual section cards

3. **Section Structure:**
   ```jsx
   <div className="space-y-6">
     {/* Header section */}
     <div className="mb-6">
       <h1>...</h1>
     </div>
     
     {/* Each content section */}
     <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
       <h2 className="text-lg font-semibold text-primary mb-4">Section Title</h2>
       {/* Section content */}
     </div>
   </div>
   ```

4. **Content Spacing:**
   - Use `space-y-6` for main content sections
   - Use `space-y-4` for subsections
   - Use `space-y-2` for list items

## 📝 Typography Hierarchy

### ⚠️ CRITICAL: Font Size Consistency

**STRICTLY ENFORCED - Typography must follow exact hierarchy:**

**Main Titles (h1):**
- ✅ `text-2xl font-bold` - ONLY size allowed for main page titles
- ❌ NEVER use: `text-3xl`, `text-4xl`, `text-xl`, or any other size
- ✅ ALWAYS include icon: `<Icon className="w-6 h-6 mr-3 text-primary" />`

**Section Headers (h2):**
- ✅ `text-lg font-semibold` - ONLY size allowed for major sections
- ❌ NEVER use: `text-2xl`, `text-3xl`, `text-xl`, or any other size

**Subsection Headers (h3):**
- ✅ `font-medium` - NO text-size class needed
- ❌ NEVER use: `text-lg`, `text-xl`, or any size classes

**Body Text:**
- ✅ `text-gray-600` or `text-gray-700` - NO size classes
- ❌ NEVER use: `text-lg`, `text-base`, `text-sm` for body text

### Contrast Requirements

**MINIMUM CONTRAST STANDARDS:**

**Background/Text Combinations:**
- ✅ `bg-gray-100` + `text-gray-700` (Good contrast)
- ✅ `bg-white` + `text-gray-600` (Good contrast)
- ❌ `bg-gray-50` + `text-gray-600` (Insufficient contrast)
- ❌ `bg-gray-50` + `text-gray-500` (Poor contrast)

**Card Contrast Rules:**
- If using `bg-gray-50`, text must be minimum `text-gray-700`
- For better accessibility, use `bg-gray-100` + `text-gray-700`
- Never use text lighter than `text-gray-600` on light backgrounds

### Heading Structure

```jsx
{/* Main Page Title - Always h1 */}
<h1 className="text-2xl font-bold text-primary mb-3 flex items-center">
  <Icon className="w-6 h-6 mr-3 text-primary" />
  Article Title
</h1>

{/* Major Sections - h2 */}
<h2 className="text-lg font-semibold text-primary mb-4">Section Title</h2>

{/* Subsections - h3 */}
<h3 className="font-medium text-primary mb-3">Subsection Title</h3>

{/* Minor headings - h4 */}
<h4 className="font-medium text-gray-700 mb-2">Minor Heading</h4>
```

### Text Content

```jsx
{/* Body paragraphs */}
<p className="text-gray-600 leading-relaxed">Body text content</p>

{/* Emphasis text */}
<p className="text-gray-700">Slightly emphasized text</p>

{/* Small text */}
<p className="text-sm text-gray-600">Secondary information</p>
```

## 🎯 Component Standards

### Content Cards

```jsx
{/* Primary content card */}
<div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
  <h2 className="text-lg font-semibold text-primary mb-4">Card Title</h2>
  {/* Content */}
</div>

{/* Secondary background card */}
<div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
  <h2 className="text-lg font-semibold text-primary mb-4">Card Title</h2>
  {/* Content */}
</div>
```

### ⚠️ Avoid Excessive Card Nesting

**Problem:** Too many nested cards create visual clutter and poor user experience.

**Bad Example:**
```jsx
{/* TOO MUCH NESTING - Hard to scan */}
<div className="bg-white/80 p-6">
  <div className="space-y-4">
    {items.map(item => (
      <div className="border border-gray-200 rounded-lg p-4">  {/* Card 1 */}
        <div className="bg-gray-50 rounded-lg p-3">             {/* Card 2 */}
          <div className="bg-white rounded p-2">               {/* Card 3 */}
            {/* Content buried in 3 layers */}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
```

**Good Example:**
```jsx
{/* CLEAN & SCANNABLE */}
<div className="bg-white/80 p-6">
  <div className="space-y-6">
    {items.map(item => (
      <div key={item.id}>
        <h3 className="font-medium text-primary mb-3">{item.title}</h3>
        <p className="text-gray-700 mb-4">{item.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Direct content layout */}
        </div>
        {/* Add separators between items */}
        {index < items.length - 1 && (
          <div className="border-b border-gray-200 mt-6"></div>
        )}
      </div>
    ))}
  </div>
</div>
```

**Card Nesting Rules:**
- ✅ **Maximum 2 levels** of card nesting
- ✅ Use visual separators instead of nested borders
- ✅ Prefer `space-y-*` and grid layouts over nested containers
- ❌ Never nest 3+ card containers
- ❌ Avoid `bg-white` cards inside `bg-gray-50` cards inside `bg-white/80` cards

### Lists and Bullet Points

```jsx
{/* Standard list with primary bullets */}
<ul className="space-y-2">
  {items.map((item, index) => (
    <li key={index} className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
      <span className="text-gray-700">{item}</span>
    </li>
  ))}
</ul>

{/* Icon-based list */}
<ul className="space-y-2">
  {items.map((item, index) => (
    <li key={index} className="flex items-start space-x-2">
      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
      <span className="text-gray-600 text-sm">{item}</span>
    </li>
  ))}
</ul>
```

## 🚫 Content Restrictions

### No UTF-8 Icons/Emojis

**Never use these in article content:**
- 📊 💡 🎯 💰 ⚠️ 🏥 👶 🍼 
- ✅ ❌ ⭐ 🔍 📝 💪 🌟 ⚡
- 📈 🎉 💯 🚀 ❄️ ⏰ 💧
- Any other UTF-8 emoji or symbol

**Instead use:**
- Lucide React icons for visual elements
- Text bullets with `bg-primary rounded-full` dots
- Proper semantic HTML elements

### No Inline Styling

- Never use `style` attributes
- All styling must use Tailwind CSS classes
- Follow the approved color palette only

## 🔗 Navigation & Links

### Internal Links

```jsx
<Link 
  href="/kennisbank/other-article"
  className="text-primary hover:underline font-medium"
>
  Link Text
</Link>
```

### Call-to-Action Links

```jsx
<Link 
  href="/calculator"
  className="p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-default transition-colors"
>
  <div className="font-medium text-primary">CTA Title →</div>
  <div className="text-sm text-gray-600">Description</div>
</Link>
```

## 📱 Responsive Design

### Grid Layouts

```jsx
{/* Two column layout */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

{/* Three column layout */}  
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{/* Responsive flex */}
<div className="flex flex-wrap gap-4">
```

### Mobile Considerations

- Content cards should stack on mobile
- Ensure proper spacing with `space-y-*` classes
- Use `text-sm` for mobile-friendly text sizes
- Test all layouts on mobile viewport

## ✅ Quality Checklist

Before publishing any article, verify:

### Colors ✓
- [ ] **NO colored text**: No `text-blue-*`, `text-red-*`, `text-green-*`, `text-yellow-*`, `text-purple-*`, `text-pink-*`, `text-amber-*`
- [ ] **NO colored backgrounds**: No `bg-blue-*`, `bg-red-*`, `bg-green-*`, `bg-yellow-*`, `bg-purple-*`, `bg-pink-*`, `bg-amber-*`
- [ ] **NO colored borders**: No `border-blue-*`, `border-red-*`, `border-green-*`, etc.
- [ ] **ALL h2 headers use `text-primary`** (not gray colors)
- [ ] Only neutral colors: `text-gray-*`, `bg-gray-*`, `text-primary`, `bg-primary`
- [ ] Proper contrast ratios maintained

### Typography & Contrast ✓
- [ ] **h1 ONLY uses `text-2xl font-bold`** - NO other sizes allowed
- [ ] **h2 ONLY uses `text-lg font-semibold`** - NO other sizes allowed  
- [ ] **h3 ONLY uses `font-medium`** - NO text-size classes
- [ ] **Body text uses NO size classes** - only `text-gray-600` or `text-gray-700`
- [ ] **NO `text-3xl`, `text-4xl`, `text-xl` anywhere** - Strictly forbidden
- [ ] **All h1 have required icon** with `<Icon className="w-6 h-6 mr-3 text-primary" />`
- [ ] **Sufficient contrast**: No `bg-gray-50` + `text-gray-600` combinations
- [ ] **Child cards use `bg-gray-100` + `text-gray-700`** for proper contrast
- [ ] **NO light text on light backgrounds** - minimum `text-gray-600`

### Layout ✓
- [ ] Uses `grid grid-cols-12 gap-6` structure
- [ ] Has `KennisbankSidebar` component
- [ ] No `min-h-screen` on containers
- [ ] **NO single large container** wrapping all content
- [ ] Each section in **individual card containers**
- [ ] **NO excessive card nesting** (maximum 2 levels)
- [ ] Uses visual separators instead of nested borders
- [ ] Uses `space-y-6` for section spacing
- [ ] Proper responsive breakpoints
- [ ] Content flows naturally on mobile

### Content ✓
- [ ] No UTF-8 emojis or symbols
- [ ] Proper heading hierarchy (h1 → h2 → h3 → h4)
- [ ] Consistent spacing with `space-y-*`
- [ ] All images have proper alt text
- [ ] Links have hover states

### Components ✓
- [ ] All imports are correct
- [ ] Sidebar configuration is complete
- [ ] Icons use Lucide React library
- [ ] Cards use approved styling patterns

## 🛠 Maintenance

### Regular Updates
- Review color usage quarterly
- Update deprecated Tailwind classes
- Ensure accessibility compliance
- Test on multiple devices/browsers

### Common Issues to Fix
1. **Double scroll**: Remove `min-h-screen` from grid containers
2. **Color violations**: Replace ALL colored elements with neutral styling
   - `bg-red-50` → `bg-gray-50`
   - `text-blue-700` → `text-gray-700`
   - `text-green-600` → `text-primary` (for icons)
   - `border-yellow-200` → `border-gray-200`
3. **Header styling**: All h2 elements MUST use `text-primary`, not gray colors
4. **Missing sidebar**: Add KennisbankSidebar component and configuration
5. **UTF-8 icons**: Replace with proper Lucide icons or remove entirely
6. **Colored cards**: Convert info/warning/success cards to neutral gray styling
7. **Excessive card nesting**: Remove unnecessary nested containers, use visual separators instead
   - Replace 3+ levels of card nesting with cleaner layouts
   - Use `border-b border-gray-200` dividers between content sections
   - Prefer grid layouts over nested card structures

## 📚 Examples

See these articles as reference implementations:
- `/kennisbank/basis-flesvoeding/flesvoeding-vs-borstvoeding/`
- `/kennisbank/financiele-aspecten/kosten-van-flesvoeding/`
- `/kennisbank/voedingstechnieken/juiste-temperatuur-controleren/`

---

**Last Updated:** January 2025
**Version:** 1.0
**Status:** Active Guidelines