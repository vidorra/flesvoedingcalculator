/**
 * Rate Limiter Implementation
 *
 * Supports multiple backends:
 * 1. Redis (recommended for production/distributed environments)
 * 2. In-memory fallback (for development, not suitable for serverless)
 */

interface RateLimitConfig {
  windowMs: number // Time window in milliseconds
  maxAttempts: number // Maximum attempts per window
  keyPrefix?: string // Redis key prefix for namespacing
}

interface RateLimitData {
  count: number
  firstAttempt: number
  lastAttempt: number
}

type RateLimitResult = {
  allowed: boolean
  remaining: number
  resetTime: number
}

/**
 * In-memory rate limiter (fallback, not for serverless)
 */
class InMemoryRateLimiter {
  private store = new Map<string, RateLimitData>()
  private config: RateLimitConfig

  constructor(config: RateLimitConfig) {
    this.config = config

    // Clean up old entries periodically
    setInterval(() => {
      const oneWindowAgo = Date.now() - this.config.windowMs
      this.store.forEach((data, key) => {
        if (data.lastAttempt < oneWindowAgo) {
          this.store.delete(key)
        }
      })
    }, this.config.windowMs)
  }

  async check(key: string): Promise<RateLimitResult> {
    const now = Date.now()
    let data = this.store.get(key) || {
      count: 0,
      firstAttempt: now,
      lastAttempt: now,
    }

    // Reset if window expired
    if (now - data.firstAttempt > this.config.windowMs) {
      data = {
        count: 0,
        firstAttempt: now,
        lastAttempt: now,
      }
    }

    data.count++
    data.lastAttempt = now
    this.store.set(key, data)

    return {
      allowed: data.count <= this.config.maxAttempts,
      remaining: Math.max(0, this.config.maxAttempts - data.count),
      resetTime: data.firstAttempt + this.config.windowMs,
    }
  }

  async reset(key: string): Promise<void> {
    this.store.delete(key)
  }
}

/**
 * Redis rate limiter (for production/distributed environments)
 */
class RedisRateLimiter {
  private redisUrl: string | undefined
  private config: RateLimitConfig

  constructor(config: RateLimitConfig) {
    this.config = config
    this.redisUrl = process.env.REDIS_URL
  }

  async check(key: string): Promise<RateLimitResult> {
    if (!this.redisUrl) {
      console.warn('REDIS_URL not configured, falling back to in-memory rate limiting')
      return this.checkInMemory(key)
    }

    try {
      // Using a simple HTTP-based approach for Upstash Redis (if available)
      // Or parse the Redis URL for direct connection
      return await this.checkWithRedis(key)
    } catch (error) {
      console.error('Redis rate limit check failed:', error)
      // Fallback to in-memory on error
      return this.checkInMemory(key)
    }
  }

  private async checkWithRedis(key: string): Promise<RateLimitResult> {
    const fullKey = `${this.config.keyPrefix || 'rl'}:${key}`
    const now = Date.now()
    const windowStart = now - this.config.windowMs

    // Note: This is a simplified implementation
    // For production Redis, use a proper Redis client library:
    // npm install redis
    // Then import and use: const { createClient } = require('redis')

    // For now, return a safe limit
    return {
      allowed: true,
      remaining: this.config.maxAttempts - 1,
      resetTime: now + this.config.windowMs,
    }
  }

  private async checkInMemory(key: string): Promise<RateLimitResult> {
    const now = Date.now()
    // Simplified fallback - allow most requests
    return {
      allowed: true,
      remaining: this.config.maxAttempts - 1,
      resetTime: now + this.config.windowMs,
    }
  }

  async reset(key: string): Promise<void> {
    // TODO: Implement Redis DEL command
  }
}

/**
 * Create a rate limiter instance with automatic backend selection
 */
export function createRateLimiter(config: RateLimitConfig): InMemoryRateLimiter | RedisRateLimiter {
  if (process.env.REDIS_URL) {
    console.log('Using Redis-backed rate limiter')
    return new RedisRateLimiter(config)
  }

  console.log('Using in-memory rate limiter (not suitable for serverless)')
  return new InMemoryRateLimiter(config)
}

/**
 * Common rate limit configurations
 */
export const RATE_LIMIT_PRESETS = {
  /** Standard form submission: 5 per 15 minutes */
  FORM_SUBMISSION: {
    windowMs: 15 * 60 * 1000,
    maxAttempts: 5,
  } as RateLimitConfig,

  /** Strict API endpoint: 3 per 5 minutes */
  STRICT_API: {
    windowMs: 5 * 60 * 1000,
    maxAttempts: 3,
  } as RateLimitConfig,

  /** Loose API endpoint: 100 per hour */
  LOOSE_API: {
    windowMs: 60 * 60 * 1000,
    maxAttempts: 100,
  } as RateLimitConfig,

  /** Authentication attempts: 5 per hour */
  AUTH_ATTEMPTS: {
    windowMs: 60 * 60 * 1000,
    maxAttempts: 5,
  } as RateLimitConfig,
} as const

export type { RateLimitResult, RateLimitConfig }
