import { useState, useEffect } from 'react'

/**
 * useCurrentWeather
 *
 * Lightweight client hook that detects the visitor's approximate location via
 * IP geolocation (ipapi.co) and fetches the *current* outdoor temperature from
 * open-meteo.com. Both APIs are free and need no API key.
 *
 * Unlike togwaarde's sleep-focused hook (which averages the night temperature),
 * this returns the live daytime reading — relevant for hydration advice.
 *
 * Design choices:
 * - Only reports a temperature when a real reading was fetched. On any failure
 *   `temp` stays `null`, so callers can choose to show nothing rather than a
 *   guessed/incorrect hot-weather alert.
 * - Caches the weather reading for 1 hour and the location for 24 hours in
 *   localStorage to avoid hammering the APIs on repeat visits.
 * - SSR-safe (guards on `window`).
 */

interface GeoAPIResponse {
  latitude?: number
  longitude?: number
  country_code?: string
  city?: string
  region?: string
  country_name?: string
}

interface WeatherAPIResponse {
  current?: {
    temperature_2m?: number
  }
}

interface CachedLocation {
  city: string
  lat: number
  lon: number
  timestamp: number
}

interface CachedWeather {
  temp: number
  city: string
  timestamp: number
}

export interface CurrentWeatherResult {
  /** Current outdoor temperature in °C, or null if unavailable */
  temp: number | null
  /** Region/city label for display, e.g. "Noord-Nederland" */
  locationCity: string
  isLoading: boolean
  error: string | null
}

const WEATHER_CACHE_KEY = 'fc_weather_cache'
const LOCATION_CACHE_KEY = 'fc_location_cache'
const ONE_HOUR_MS = 60 * 60 * 1000
const ONE_DAY_MS = 24 * 60 * 60 * 1000

// Amsterdam as a sensible default coordinate for the Dutch-market audience.
const DEFAULT_COORDS = { lat: 52.37, lon: 4.9, city: 'Nederland' }

function readCache<T extends { timestamp: number }>(key: string, maxAgeMs: number): T | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return null
    const data = JSON.parse(raw) as T
    if (Date.now() - data.timestamp < maxAgeMs) return data
  } catch {
    // ignore corrupt cache
  }
  return null
}

function writeCache(key: string, value: object): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(key, JSON.stringify({ ...value, timestamp: Date.now() }))
  } catch {
    // ignore quota/availability errors
  }
}

export function useCurrentWeather(): CurrentWeatherResult {
  const [temp, setTemp] = useState<number | null>(null)
  const [locationCity, setLocationCity] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false

    const run = async (): Promise<void> => {
      try {
        setIsLoading(true)

        // 1. Fresh weather reading in cache? Use it.
        const cachedWeather = readCache<CachedWeather>(WEATHER_CACHE_KEY, ONE_HOUR_MS)
        if (cachedWeather) {
          if (!cancelled) {
            setTemp(cachedWeather.temp)
            setLocationCity(cachedWeather.city)
            setError(null)
            setIsLoading(false)
          }
          return
        }

        // 2. Resolve location (from cache or IP geolocation, with fallback).
        let lat: number
        let lon: number
        let city: string

        const cachedLocation = readCache<CachedLocation>(LOCATION_CACHE_KEY, ONE_DAY_MS)
        if (cachedLocation) {
          lat = cachedLocation.lat
          lon = cachedLocation.lon
          city = cachedLocation.city
        } else {
          try {
            const geoRes = await fetch('https://ipapi.co/json/')
            const geo: GeoAPIResponse = await geoRes.json()
            if (geo.latitude && geo.longitude) {
              lat = geo.latitude
              lon = geo.longitude
              if (geo.country_code === 'NL') {
                city = lat >= 52.09 ? 'Noord-Nederland' : 'Zuid-Nederland'
              } else if (geo.country_code === 'BE') {
                city = lat >= 50.8 ? 'Noord-België' : 'Zuid-België'
              } else {
                city = geo.city || geo.region || geo.country_name || 'jouw regio'
              }
            } else {
              throw new Error('no geo data')
            }
          } catch {
            lat = DEFAULT_COORDS.lat
            lon = DEFAULT_COORDS.lon
            city = DEFAULT_COORDS.city
          }
          writeCache(LOCATION_CACHE_KEY, { city, lat, lon })
        }

        if (!cancelled) setLocationCity(city)

        // 3. Fetch the current temperature for those coordinates.
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&timezone=auto`
        )
        const weather: WeatherAPIResponse = await weatherRes.json()
        const current = weather.current?.temperature_2m

        if (typeof current === 'number') {
          const rounded = Math.round(current)
          if (!cancelled) {
            setTemp(rounded)
            setError(null)
          }
          writeCache(WEATHER_CACHE_KEY, { temp: rounded, city })
        } else {
          throw new Error('no temperature in response')
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'unknown error')
          setTemp(null) // never show a guessed temperature
        }
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [])

  return { temp, locationCity, isLoading, error }
}
