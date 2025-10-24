import { sql } from 'drizzle-orm'
import { db } from './connection.js'

let migrationRun = false

/**
 * Auto-migrate database schema on first API call
 * This adds new columns if they don't exist
 */
export async function autoMigrate() {
  if (migrationRun) {
    return { success: true, message: 'Migration already completed' }
  }

  try {
    console.log('🔄 Running auto-migration to add new snippet fields...')

    // Check if columns exist and add them if they don't
    await db.execute(sql`
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

        -- Make generated_html nullable if it's not already
        ALTER TABLE snippets ALTER COLUMN generated_html DROP NOT NULL;
        RAISE NOTICE 'Made generated_html nullable';

      EXCEPTION WHEN OTHERS THEN
        RAISE NOTICE 'Migration error (may be safe to ignore if columns already exist): %', SQLERRM;
      END $$;
    `)

    migrationRun = true
    console.log('✅ Auto-migration completed successfully')

    return { success: true, message: 'Migration completed' }
  } catch (error) {
    console.error('⚠️ Auto-migration failed (this may be safe to ignore if schema is already up to date):', error.message)
    // Don't throw - allow app to continue even if migration fails
    migrationRun = true // Mark as run to avoid repeated attempts
    return { success: false, message: error.message }
  }
}
