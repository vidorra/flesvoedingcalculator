import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema.js'

// Create PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
})

// Create Drizzle instance
export const db = drizzle(pool, { schema })

// Health check function
export async function checkDatabaseConnection() {
  try {
    await pool.query('SELECT 1')
    console.log('✅ Database connection successful')
    return true
  } catch (error) {
    console.error('❌ Database connection failed:', error.message)
    return false
  }
}

// Graceful shutdown
export async function closeDatabaseConnection() {
  await pool.end()
  console.log('🔌 Database connection closed')
}