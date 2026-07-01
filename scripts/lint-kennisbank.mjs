#!/usr/bin/env node
/**
 * Kennisbank style validator
 *
 * Automates the highest-value, unambiguous rules from CLAUDE.md so that
 * violations fail fast instead of relying on the ~1000-line doc being re-read.
 * Scans every article under app/kennisbank/ and reports file:line violations.
 *
 * Usage:  node scripts/lint-kennisbank.mjs
 * Exit:   0 = clean, 1 = violations found (or on error)
 *
 * Scope: high-signal checks only, to avoid false positives:
 *   - forbidden colored Tailwind classes (amber is allowed for warnings)
 *   - UTF-8 emojis / pictographs (the "→" link arrow is intentionally allowed)
 *   - gray bullet dots (bullets must use bg-primary)
 *   - oversized headings (text-3xl / text-4xl)
 *   - inline style attributes
 */

import { readdirSync, readFileSync, statSync } from 'fs'
import { join, relative } from 'path'
import { fileURLToPath } from 'url'

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..')
const KENNISBANK_DIR = join(ROOT, 'app', 'kennisbank')

// Forbidden color families (amber is allowed for "Let op" warnings; gray and
// primary are always fine).
const FORBIDDEN_COLORS = ['blue', 'red', 'green', 'yellow', 'purple', 'pink', 'indigo', 'orange']

const CHECKS = [
  {
    id: 'forbidden-color',
    // e.g. text-red-600, bg-green-50, border-blue-200
    regex: new RegExp(`\\b(?:text|bg|border|from|to|via|ring|divide)-(?:${FORBIDDEN_COLORS.join('|')})-\\d{2,3}\\b`, 'g'),
    message: 'Forbidden colored class (use gray/primary; amber only for warnings)',
  },
  {
    id: 'gray-bullet',
    // bullets must be bg-primary, never gray
    regex: /bg-gray-(?:400|500)\s+rounded-full/g,
    message: 'Gray bullet dot — bullets must use bg-primary rounded-full',
  },
  {
    id: 'oversized-heading',
    regex: /\btext-(?:3xl|4xl|5xl|6xl)\b/g,
    message: 'Oversized heading — h1 is text-2xl, h2 is text-lg',
  },
  {
    id: 'inline-style',
    regex: /\bstyle=\{\{/g,
    message: 'Inline style attribute — use Tailwind classes only',
  },
  {
    id: 'emoji',
    // Pictographs + misc symbols/dingbats + emoji arrows/variation selector.
    // Deliberately excludes U+2190–21FF so the "→" link arrow is allowed.
    regex: /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]/gu,
    message: 'UTF-8 emoji/symbol — use Lucide icons or primary bullet dots',
  },
]

// The `template` page documents the rules and quotes forbidden classes as
// examples ("text-red-600 - Use neutral colors"), so it is not a real article.
const SKIP_DIRS = new Set(['template'])

function walk(dir) {
  const out = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      if (SKIP_DIRS.has(entry)) continue
      out.push(...walk(full))
    } else if (/\.(tsx|jsx)$/.test(entry) && !/\.backup|\.bak$/.test(entry)) {
      out.push(full)
    }
  }
  return out
}

function lintFile(file) {
  const violations = []
  const lines = readFileSync(file, 'utf8').split('\n')
  lines.forEach((line, i) => {
    for (const check of CHECKS) {
      check.regex.lastIndex = 0
      let m
      while ((m = check.regex.exec(line)) !== null) {
        violations.push({ line: i + 1, id: check.id, match: m[0], message: check.message })
        if (m.index === check.regex.lastIndex) check.regex.lastIndex++ // avoid zero-width loop
      }
    }
  })
  return violations
}

function main() {
  let files
  try {
    files = walk(KENNISBANK_DIR)
  } catch (err) {
    console.error(`Could not read ${KENNISBANK_DIR}: ${err.message}`)
    process.exit(1)
  }

  let total = 0
  for (const file of files) {
    const violations = lintFile(file)
    if (violations.length === 0) continue
    total += violations.length
    const rel = relative(ROOT, file)
    for (const v of violations) {
      console.log(`${rel}:${v.line}  [${v.id}] ${v.message}  →  "${v.match}"`)
    }
  }

  console.log('')
  if (total === 0) {
    console.log(`✓ Kennisbank style check passed (${files.length} files, 0 violations)`)
    process.exit(0)
  }
  console.log(`✗ ${total} violation(s) across ${files.length} scanned files`)
  process.exit(1)
}

main()
