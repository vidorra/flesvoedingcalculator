# Flesvoeding Calculator - Development Guidelines

## Styling Guidelines

### Card System

#### Main Level Cards
- **Always use**: `bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6`
- These are the primary content containers for each section
- Provide visual hierarchy and separation between major content blocks

#### Child Cards (Nested Cards)
- **Always use**: `bg-white rounded-xl p-4` (or appropriate padding)
- **Never use**: `bg-gray-100`, `bg-gray-50`, or any gray backgrounds
- Child cards should always have white backgrounds to maintain visual consistency
- Use proper border radius (`rounded-xl` or `rounded-lg`)

#### Color Guidelines
- **Text colors**: 
  - `text-primary` for headings (h1-h5) only
  - `text-gray-600` for body text and lists
  - **Never use**: `text-red-*`, `text-green-*`, `text-orange-*`, `text-yellow-*` (except in designated alert contexts)
- **Background colors**:
  - Main cards: `bg-white/80`
  - Child cards: `bg-white`
  - **Never use**: `bg-gray-100`, `bg-gray-50` for cards
- **Breadcrumbs**: Always use `text-gray-500`

#### Typography
- **No UTF-8 icons/emojis** in content or headings
- **Text-primary restriction**: Only use `text-primary` for h1, h2, h3, h4, h5 elements
- All other text should use appropriate gray tones

#### List Items
- Use horizontal flex layout: `flex items-center space-x-2`
- Bullet points: `<div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>`
- Numbered items: Use circular badges with `bg-primary text-white`

### Example Implementation

```jsx
{/* Main card */}
<div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-gray-200 p-6">
  <h2 className="text-lg font-semibold text-primary mb-4">Section Title</h2>
  
  {/* Child card */}
  <div className="bg-white rounded-xl p-4">
    <h3 className="font-medium text-primary mb-2">Subsection</h3>
    <ul className="space-y-2">
      <li className="flex items-center space-x-2">
        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
        <span className="text-gray-600">List item content</span>
      </li>
    </ul>
  </div>
</div>
```

### Common Violations to Avoid

1. ❌ Using `bg-gray-100` or `bg-gray-50` for child cards
2. ❌ Using `text-primary` for non-heading elements
3. ❌ Missing border radius on cards
4. ❌ Using colored text outside of alerts
5. ❌ UTF-8 icons in headings or content
6. ❌ Vertical list item alignment

## Build Commands

- **Lint**: `npm run lint`
- **Type check**: `npm run typecheck`
- **Build**: `npm run build`

Always run lint and typecheck before committing changes.