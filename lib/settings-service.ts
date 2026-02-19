/**
 * Settings Service - File-based storage (replaces database-based version)
 *
 * Stores settings in data/admin/settings.json structured as:
 * { "flesvoedingcalculator": { "hide_all_ads": "false" }, "togwaarde": { ... } }
 */

import fs from 'fs'
import path from 'path'

const DATA_DIR = path.join(process.cwd(), 'data', 'admin')
const SETTINGS_FILE = path.join(DATA_DIR, 'settings.json')

// Default settings per website
const DEFAULTS: Record<string, Record<string, string>> = {
  flesvoedingcalculator: { hide_all_ads: 'false' },
  togwaarde: { hide_all_ads: 'false' }
}

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true })
  }
}

function loadAllSettings(): Record<string, Record<string, string>> {
  try {
    ensureDataDir()
    if (!fs.existsSync(SETTINGS_FILE)) {
      return DEFAULTS
    }
    return JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'))
  } catch {
    return DEFAULTS
  }
}

function saveAllSettings(data: Record<string, Record<string, string>>) {
  ensureDataDir()
  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(data, null, 2))
}

export async function getSetting(
  key: string,
  website: string = 'flesvoedingcalculator',
  defaultValue: string = 'false'
): Promise<string> {
  const all = loadAllSettings()
  return all[website]?.[key] ?? DEFAULTS[website]?.[key] ?? defaultValue
}

export async function updateSetting(
  key: string,
  value: string,
  website: string = 'flesvoedingcalculator'
): Promise<boolean> {
  try {
    const all = loadAllSettings()
    if (!all[website]) all[website] = {}
    all[website][key] = value
    saveAllSettings(all)
    return true
  } catch {
    return false
  }
}

export async function getAllSettings(
  website: string = 'flesvoedingcalculator'
): Promise<Record<string, string>> {
  const all = loadAllSettings()
  return { ...DEFAULTS[website], ...all[website] }
}

// No-op — no cache to clear in file-based approach
export function clearCache(_key?: string, _website?: string): void {}

export function getCacheStats() {
  return { hits: 0, misses: 0, errors: 0, totalRequests: 0, hitRate: '0%', cacheSize: 0 }
}
