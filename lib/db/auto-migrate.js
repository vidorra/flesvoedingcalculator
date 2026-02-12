import { getDb } from './connection.js'
import { Pool } from 'pg'

let migrationRun = false

/**
 * Auto-migrate database schema on first API call
 * This adds new columns if they don't exist
 * Uses raw pg client instead of drizzle to avoid Proxy issues
 */
export async function autoMigrate() {
  if (migrationRun) {
    return { success: true, message: 'Migration already completed' }
  }

  let client = null

  try {
    console.log('🔄 Running auto-migration to add new snippet fields...')

    // Get direct database connection
    const DATABASE_URL = process.env.DATABASE_URL
    if (!DATABASE_URL) {
      console.log('⏭️  Skipping migration - DATABASE_URL not set')
      migrationRun = true
      return { success: false, message: 'DATABASE_URL not set' }
    }

    // Create a temporary pool for migration
    const pool = new Pool({ connectionString: DATABASE_URL, ssl: false })
    client = await pool.connect()

    console.log('✅ Connected to database for migration')

    // Run migration SQL
    await client.query(`
      DO $$
      BEGIN
        -- Add image_html column if it doesn't exist
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'snippets' AND column_name = 'image_html'
        ) THEN
          ALTER TABLE snippets ADD COLUMN image_html text;
          RAISE NOTICE 'Added image_html column';
        END IF;

        -- Add bol_script column if it doesn't exist
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'snippets' AND column_name = 'bol_script'
        ) THEN
          ALTER TABLE snippets ADD COLUMN bol_script text;
          RAISE NOTICE 'Added bol_script column';
        END IF;

        -- Add image_url column if it doesn't exist
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'snippets' AND column_name = 'image_url'
        ) THEN
          ALTER TABLE snippets ADD COLUMN image_url text;
          RAISE NOTICE 'Added image_url column';
        END IF;

        -- Add price column if it doesn't exist
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'snippets' AND column_name = 'price'
        ) THEN
          ALTER TABLE snippets ADD COLUMN price text;
          RAISE NOTICE 'Added price column';
        END IF;

        -- Add original_price column if it doesn't exist
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'snippets' AND column_name = 'original_price'
        ) THEN
          ALTER TABLE snippets ADD COLUMN original_price text;
          RAISE NOTICE 'Added original_price column';
        END IF;

        -- Add currency column if it doesn't exist
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'snippets' AND column_name = 'currency'
        ) THEN
          ALTER TABLE snippets ADD COLUMN currency text DEFAULT 'EUR';
          RAISE NOTICE 'Added currency column';
        END IF;

        -- Add price_last_updated column if it doesn't exist
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'snippets' AND column_name = 'price_last_updated'
        ) THEN
          ALTER TABLE snippets ADD COLUMN price_last_updated timestamp;
          RAISE NOTICE 'Added price_last_updated column';
        END IF;

        -- Add website column if it doesn't exist
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'snippets' AND column_name = 'website'
        ) THEN
          ALTER TABLE snippets ADD COLUMN website text NOT NULL DEFAULT 'flesvoedingcalculator';
          RAISE NOTICE 'Added website column';
        END IF;

        -- Add active column if it doesn't exist
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'snippets' AND column_name = 'active'
        ) THEN
          ALTER TABLE snippets ADD COLUMN active boolean NOT NULL DEFAULT true;
          RAISE NOTICE 'Added active column';
        END IF;

        -- Make generated_html nullable if it's not already
        BEGIN
          ALTER TABLE snippets ALTER COLUMN generated_html DROP NOT NULL;
          RAISE NOTICE 'Made generated_html nullable';
        EXCEPTION WHEN OTHERS THEN
          RAISE NOTICE 'generated_html already nullable or error: %', SQLERRM;
        END;

      EXCEPTION WHEN OTHERS THEN
        RAISE NOTICE 'Migration error (may be safe to ignore if columns already exist): %', SQLERRM;
      END $$;
    `)

    // Add missing columns to page_snippets table
    await client.query(`
      DO $$
      BEGIN
        -- Add website column to page_snippets if it doesn't exist
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'page_snippets' AND column_name = 'website'
        ) THEN
          ALTER TABLE page_snippets ADD COLUMN website text NOT NULL DEFAULT 'flesvoedingcalculator';
          RAISE NOTICE 'Added website column to page_snippets';
        END IF;

        -- Add active column to page_snippets if it doesn't exist
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.columns
          WHERE table_name = 'page_snippets' AND column_name = 'active'
        ) THEN
          ALTER TABLE page_snippets ADD COLUMN active boolean NOT NULL DEFAULT true;
          RAISE NOTICE 'Added active column to page_snippets';
        END IF;
      EXCEPTION WHEN OTHERS THEN
        RAISE NOTICE 'page_snippets migration error (safe to ignore): %', SQLERRM;
      END $$;
    `)

    // Create settings table if it doesn't exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS settings (
        id text PRIMARY KEY,
        key text NOT NULL,
        value text NOT NULL,
        website text NOT NULL DEFAULT 'flesvoedingcalculator',
        updated_at timestamp DEFAULT now() NOT NULL,
        UNIQUE(key, website)
      );
    `)

    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_settings_key_website ON settings(key, website);
    `)

    // Seed default settings if they don't exist
    await client.query(`
      INSERT INTO settings (id, key, value, website, updated_at) VALUES
        ('setting_flesvoeding_hide_ads_001', 'hide_all_ads', 'false', 'flesvoedingcalculator', now()),
        ('setting_togwaarde_hide_ads_001', 'hide_all_ads', 'false', 'togwaarde', now())
      ON CONFLICT (key, website) DO NOTHING;
    `)

    migrationRun = true
    console.log('✅ Auto-migration completed successfully')

    // Close the temporary connection
    client.release()
    await pool.end()

    return { success: true, message: 'Migration completed' }
  } catch (error) {
    console.error('❌ Auto-migration failed:', error.message)
    console.error('Error stack:', error.stack)

    if (client) {
      client.release()
    }

    // Don't throw - allow app to continue even if migration fails
    migrationRun = true // Mark as run to avoid repeated attempts
    return { success: false, message: error.message }
  }
}
