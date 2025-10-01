import { pgTable, text, timestamp, boolean, integer, uuid } from 'drizzle-orm/pg-core'

// Snippets table - stores affiliate product snippets
export const snippets = pgTable('snippets', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  type: text('type').notNull(), // 'bol' or 'amazon'
  url: text('url').notNull(),
  tag: text('tag'),
  generatedHtml: text('generated_html').notNull(),
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
  active: boolean('active').default(true).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
})

// Pages table - stores page metadata
export const pages = pgTable('pages', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  path: text('path').notNull(),
  category: text('category').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
})