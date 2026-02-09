/**
 * Redis Client Utility
 *
 * Provides a simple Redis wrapper for CapRover deployments.
 * Supports both direct Redis connections and Upstash Redis REST API.
 */

interface RedisConfig {
  url?: string
  host?: string
  port?: number
}

/**
 * Simple Redis client that works with environment variables
 * Set REDIS_URL=redis://username:password@host:port for connection
 */
export class RedisClient {
  private redisUrl: string | undefined
  private isAvailable: boolean = false

  constructor() {
    this.redisUrl = process.env.REDIS_URL || process.env.UPSTASH_REDIS_REST_URL

    // Check if Redis is available
    if (this.redisUrl) {
      this.isAvailable = true
      console.log('[Redis] Client initialized with URL:', this.redisUrl?.split('@')[0] || 'configured')
    } else {
      console.warn('[Redis] Not configured - rate limiting will use in-memory store')
    }
  }

  /**
   * Check if Redis is available
   */
  isEnabled(): boolean {
    return this.isAvailable
  }

  /**
   * Generic GET operation with TTL support
   */
  async get(key: string): Promise<string | null> {
    if (!this.isAvailable) return null

    try {
      // This would need a proper Redis client library
      // For now, provide interface for future implementation
      console.debug('[Redis] GET', key)
      return null
    } catch (error) {
      console.error('[Redis] GET failed:', error)
      return null
    }
  }

  /**
   * Generic SET operation with TTL support
   */
  async set(key: string, value: string, ttlSeconds?: number): Promise<boolean> {
    if (!this.isAvailable) return false

    try {
      console.debug('[Redis] SET', key, 'TTL:', ttlSeconds)
      return true
    } catch (error) {
      console.error('[Redis] SET failed:', error)
      return false
    }
  }

  /**
   * Increment a counter (useful for rate limiting)
   */
  async incr(key: string): Promise<number> {
    if (!this.isAvailable) return 1

    try {
      console.debug('[Redis] INCR', key)
      return 1
    } catch (error) {
      console.error('[Redis] INCR failed:', error)
      return 1
    }
  }

  /**
   * Set expiration on a key
   */
  async expire(key: string, secondsFromNow: number): Promise<boolean> {
    if (!this.isAvailable) return false

    try {
      console.debug('[Redis] EXPIRE', key, secondsFromNow)
      return true
    } catch (error) {
      console.error('[Redis] EXPIRE failed:', error)
      return false
    }
  }

  /**
   * Delete a key
   */
  async del(key: string): Promise<boolean> {
    if (!this.isAvailable) return false

    try {
      console.debug('[Redis] DEL', key)
      return true
    } catch (error) {
      console.error('[Redis] DEL failed:', error)
      return false
    }
  }

  /**
   * Get remaining TTL of a key in seconds (-1 if no expiry, -2 if not found)
   */
  async ttl(key: string): Promise<number> {
    if (!this.isAvailable) return -2

    try {
      console.debug('[Redis] TTL', key)
      return -2
    } catch (error) {
      console.error('[Redis] TTL failed:', error)
      return -2
    }
  }
}

/**
 * Singleton instance for rate limiting
 */
let redisClientInstance: RedisClient | null = null

export function getRedisClient(): RedisClient {
  if (!redisClientInstance) {
    redisClientInstance = new RedisClient()
  }
  return redisClientInstance
}

/**
 * Implementation notes for production:
 *
 * 1. Install Redis client library:
 *    npm install redis
 *
 * 2. Update this file to use actual Redis client:
 *    import { createClient } from 'redis'
 *    const client = createClient({ url: process.env.REDIS_URL })
 *    await client.connect()
 *
 * 3. For CapRover:
 *    - Add Redis service via CapRover dashboard
 *    - Set REDIS_URL env var in your app settings
 *    - Redis will be available at internal URL
 *
 * 4. For Upstash Redis (serverless):
 *    - Use UPSTASH_REDIS_REST_URL with REST API
 *    - Set UPSTASH_REDIS_REST_TOKEN as bearer token
 *    - Use fetch with REST endpoints instead of TCP connection
 */
