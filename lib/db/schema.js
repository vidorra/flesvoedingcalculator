import { pgTable, text, timestamp, boolean, integer, uuid, unique, jsonb, index } from 'drizzle-orm/pg-core'

// Calculator events - anonymous, aggregated usage of the calculators across
// both websites (flesvoedingcalculator + togwaarde). No IP, session or any
// personal data is stored; only coarse, aggregate-able values so we can learn
// which baby ages our users have (for relevant affiliate offers). AVG-safe.
export const calculatorEvents = pgTable('calculator_events', {
  id: uuid('id').primaryKey(),                                  // app-provided (crypto.randomUUID)
  website: text('website').notNull().default('flesvoedingcalculator'),
  ageCategory: text('age_category'),                            // shared: coarse baby-age band
  data: jsonb('data'),                                          // app-specific coarse fields
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull()
}, (table) => ({
  websiteCreatedIdx: index('idx_calc_events_website_created').on(table.website, table.createdAt)
}))

// Snippets table - stores affiliate product snippets
export const snippets = pgTable('snippets', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(), // 'bol' or 'amazon'
  url: text('url').notNull(),
  tag: text('tag'),
  generatedHtml: text('generated_html'), // Legacy field, kept for backwards compatibility
  imageHtml: text('image_html'), // Separate field for product image HTML
  bolScript: text('bol_script'), // Separate field for Bol.com JavaScript snippet
  imageUrl: text('image_url'), // Direct URL to product image
  price: text('price'), // Current price (e.g., "€24.99")
  originalPrice: text('original_price'), // Original price if discounted
  currency: text('currency').default('EUR'), // EUR for both platforms in NL
  priceLastUpdated: timestamp('price_last_updated'), // When price was last fetched
  website: text('website').notNull().default('flesvoedingcalculator'), // 'flesvoedingcalculator' or 'togwaarde'
  active: boolean('active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
})

// Page snippets table - stores which snippets are assigned to which pages
export const pageSnippets = pgTable('page_snippets', {
  id: text('id').primaryKey(),
  pageId: text('page_id').notNull(),
  snippetId: text('snippet_id').notNull().references(() => snippets.id, { onDelete: 'cascade' }),
  order: integer('order').default(0).notNull(),
  website: text('website').notNull().default('flesvoedingcalculator'), // 'flesvoedingcalculator' or 'togwaarde'
  active: boolean('active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
})

// Pages table - stores page metadata for multiple websites
export const pages = pgTable('pages', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  path: text('path').notNull(),
  category: text('category').notNull(),
  website: text('website').notNull().default('flesvoedingcalculator'), // 'flesvoedingcalculator' or 'togwaarde'
  // When true, this page shows the website's Default linked snippets (pageId 'default')
  // instead of its own. When false, it shows its own assigned snippets.
  inheritDefault: boolean('inherit_default').notNull().default(true),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
})

// Settings table - stores global and website-specific settings with caching
export const settings = pgTable('settings', {
  id: text('id').primaryKey(),
  key: text('key').notNull(), // e.g., 'hide_all_ads'
  value: text('value').notNull(), // JSON stringified value
  website: text('website').notNull().default('flesvoedingcalculator'), // 'flesvoedingcalculator' or 'togwaarde'
  updatedAt: timestamp('updated_at').defaultNow().notNull()
}, (table) => ({
  keyWebsiteUnique: unique().on(table.key, table.website) // Ensure one setting per key per website
}))