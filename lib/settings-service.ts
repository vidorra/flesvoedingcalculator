/**
 * Settings Service - Manages application settings with in-memory caching
 *
 * Features:
 * - 60-second TTL cache to minimize database queries
 * - Safe defaults on errors
 * - Cache invalidation on updates
 * - Multi-website support
 */

import { getDb } from './db/connection'
import { settings } from './db/schema'
import { eq, and } from 'drizzle-orm'

// In-memory cache with TTL
const settingsCache = new Map<string, { value: string; timestamp: number }>()
const CACHE_TTL_MS = 60 * 1000 // 60 seconds

// Cache stats for monitoring
const cacheStats = {
  hits: 0,
  misses: 0,
  errors: 0
}

/**
 * Generate cache key from setting key and website
 */
function getCacheKey(key: string, website: string): string {
  return `${website}:${key}`
}

/**
 * Check if cached value is still valid
 */
function isCacheValid(timestamp: number): boolean {
  return Date.now() - timestamp < CACHE_TTL_MS
}

/**
 * Get a setting value with caching
 *
 * @param key - Setting key (e.g., 'hide_all_ads')
 * @param website - Website identifier (default: 'flesvoedingcalculator')
 * @param defaultValue - Default value if setting not found
 * @returns Setting value or default
 */
export async function getSetting(
  key: string,
  website: string = 'flesvoedingcalculator',
  defaultValue: string = 'false'
): Promise<string> {
  try {
    const cacheKey = getCacheKey(key, website)

    // Check cache first
    const cached = settingsCache.get(cacheKey)
    if (cached && isCacheValid(cached.timestamp)) {
      cacheStats.hits++
      return cached.value
    }

    // Cache miss - fetch from database
    cacheStats.misses++
    const db = getDb()

    const result = await db
      .select()
      .from(settings)
      .where(and(eq(settings.key, key), eq(settings.website, website)))
      .limit(1)

    const value = result.length > 0 ? result[0].value : defaultValue

    // Store in cache
    settingsCache.set(cacheKey, {
      value,
      timestamp: Date.now()
    })

    return value
  } catch (error) {
    cacheStats.errors++
    console.error(`Error fetching setting ${key} for ${website}:`, error)
    // Return default value on error
    return defaultValue
  }
}

/**
 * Update a setting value and invalidate cache
 *
 * @param key - Setting key
 * @param value - New value
 * @param website - Website identifier
 * @returns True if successful, false otherwise
 */
export async function updateSetting(
  key: string,
  value: string,
  website: string = 'flesvoedingcalculator'
): Promise<boolean> {
  try {
    const db = getDb()
    const settingId = `${website}_${key}_${Date.now()}`

    // Update or insert
    await db
      .insert(settings)
      .values({
        id: settingId,
        key,
        value,
        website,
        updatedAt: new Date()
      })
      .onConflictDoUpdate({
        target: [settings.key, settings.website],
        set: {
          value,
          updatedAt: new Date()
        }
      })

    // Invalidate cache
    const cacheKey = getCacheKey(key, website)
    settingsCache.delete(cacheKey)

    return true
  } catch (error) {
    cacheStats.errors++
    console.error(`Error updating setting ${key} for ${website}:`, error)
    return false
  }
}

/**
 * Get all settings for a website
 *
 * @param website - Website identifier
 * @returns Map of settings
 */
export async function getAllSettings(
  website: string = 'flesvoedingcalculator'
): Promise<Record<string, string>> {
  try {
    const db = getDb()

    const result = await db
      .select()
      .from(settings)
      .where(eq(settings.website, website))

    const settingsMap: Record<string, string> = {}
    result.forEach((setting) => {
      settingsMap[setting.key] = setting.value
    })

    return settingsMap
  } catch (error) {
    cacheStats.errors++
    console.error(`Error fetching all settings for ${website}:`, error)
    return {}
  }
}

/**
 * Clear cache for a specific setting or all settings
 *
 * @param key - Optional setting key to clear specific entry
 * @param website - Website identifier
 */
export function clearCache(
  key?: string,
  website: string = 'flesvoedingcalculator'
): void {
  if (key) {
    const cacheKey = getCacheKey(key, website)
    settingsCache.delete(cacheKey)
  } else {
    // Clear all cache for website
    for (const [cacheKey] of settingsCache.entries()) {
      if (cacheKey.startsWith(`${website}:`)) {
        settingsCache.delete(cacheKey)
      }
    }
  }
}

/**
 * Get cache statistics for monitoring
 *
 * @returns Cache stats object
 */
export function getCacheStats() {
  const totalRequests = cacheStats.hits + cacheStats.misses
  const hitRate =
    totalRequests > 0 ? ((cacheStats.hits / totalRequests) * 100).toFixed(2) : '0'

  return {
    ...cacheStats,
    totalRequests,
    hitRate: `${hitRate}%`,
    cacheSize: settingsCache.size
  }
}
