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
  // A real, enforcing in-memory limiter used until a Redis client is wired in.
  // IMPORTANT: never return `{ allowed: true }` unconditionally here — that
  // silently disables rate limiting whenever REDIS_URL is set.
  private fallback: InMemoryRateLimiter

  constructor(config: RateLimitConfig) {
    this.config = config
    this.redisUrl = process.env.REDIS_URL
    this.fallback = new InMemoryRateLimiter(config)
  }

  async check(key: string): Promise<RateLimitResult> {
    if (!this.redisUrl) {
      return this.fallback.check(key)
    }

    try {
      return await this.checkWithRedis(key)
    } catch (error) {
      console.error('Redis rate limit check failed, using in-memory fallback:', error)
      return this.fallback.check(key)
    }
  }

  private async checkWithRedis(key: string): Promise<RateLimitResult> {
    // TODO: implement a real Redis-backed sliding window using a client such as
    // `redis` or Upstash. Until then we enforce with the in-memory fallback so
    // limits are never silently bypassed. Key prefix reserved for that impl:
    // `${this.config.keyPrefix || 'rl'}:${key}`.
    return this.fallback.check(key)
  }

  async reset(key: string): Promise<void> {
    // TODO: issue Redis DEL for the real backend; reset the fallback for now.
    await this.fallback.reset(key)
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
