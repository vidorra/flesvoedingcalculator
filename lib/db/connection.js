import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema.js'

// Parse DATABASE_URL manually to ensure proper string handling
function parseDatabaseUrl(url) {
  if (!url) {
    throw new Error('DATABASE_URL is not defined')
  }

  const urlPattern = /^postgresql:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/([^?]+)(\?.*)?$/
  const match = url.match(urlPattern)

  if (!match) {
    // Fallback to connection string if parsing fails
    return { connectionString: url }
  }

  const [, user, password, host, port, database, query] = match

  return {
    user: String(user),
    password: String(password),
    host: String(host),
    port: parseInt(port, 10),
    database: String(database),
    ssl: false,
  }
}

const poolConfig = parseDatabaseUrl(process.env.DATABASE_URL)
console.log('Database config:', { ...poolConfig, password: '***' })

// Create PostgreSQL connection pool
const pool = new Pool(poolConfig)

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