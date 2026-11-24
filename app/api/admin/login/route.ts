import { NextResponse, NextRequest } from 'next/server'
import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { getClientIp } from '../../../../lib/client-ip.js'
import { readJsonCapped } from '../../../../lib/read-body.js'

// Force dynamic route
export const dynamic = 'force-dynamic'

interface LoginRequest {
  password: string
}

interface LoginResponse {
  success: boolean
  token?: string
  message: string
}

/**
 * In-memory brute-force protection for admin login.
 *
 * Only FAILED attempts count toward the limit; a successful login clears the
 * counter, so a legitimate admin is never locked out by their own activity.
 * This runs in a single persistent container (CapRover), so an in-memory store
 * is reliable here. Not suitable for multi-instance/serverless deployments.
 */
const LOGIN_RATE_LIMIT = { windowMs: 15 * 60 * 1000, maxFailures: 10 }
// Globale rem over alle IP's samen, tegen raden vanaf veel adressen tegelijk.
// Nadeel: een aanvaller kan de login dan een kwartier dichtzetten.
const GLOBAL_MAX_FAILURES = 50
const MAX_BODY_BYTES = 4096
const failedAttempts = new Map<string, { count: number; firstAttempt: number }>()
let globalFailures = { count: 0, firstAttempt: 0 }

/** Returns true if the IP (or the login as a whole) is currently blocked. */
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  if (now - globalFailures.firstAttempt > LOGIN_RATE_LIMIT.windowMs) {
    globalFailures = { count: 0, firstAttempt: now }
  } else if (globalFailures.count >= GLOBAL_MAX_FAILURES) {
    return true
  }
  const entry = failedAttempts.get(ip)
  if (!entry) return false
  if (now - entry.firstAttempt > LOGIN_RATE_LIMIT.windowMs) {
    failedAttempts.delete(ip)
    return false
  }
  return entry.count >= LOGIN_RATE_LIMIT.maxFailures
}

function recordFailure(ip: string): void {
  const now = Date.now()
  if (now - globalFailures.firstAttempt > LOGIN_RATE_LIMIT.windowMs) {
    globalFailures = { count: 1, firstAttempt: now }
  } else {
    globalFailures.count++
  }
  const entry = failedAttempts.get(ip)
  if (!entry || now - entry.firstAttempt > LOGIN_RATE_LIMIT.windowMs) {
    failedAttempts.set(ip, { count: 1, firstAttempt: now })
  } else {
    entry.count++
  }
}

function clearFailures(ip: string): void {
  failedAttempts.delete(ip)
}

// Periodically evict stale entries to bound memory.
setInterval(() => {
  const cutoff = Date.now() - LOGIN_RATE_LIMIT.windowMs
  failedAttempts.forEach((entry, ip) => {
    if (entry.firstAttempt < cutoff) failedAttempts.delete(ip)
  })
}, LOGIN_RATE_LIMIT.windowMs).unref?.()

/**
 * POST /api/admin/login - Authenticate admin user and issue JWT token
 *
 * Uses bcrypt to securely compare passwords with hashed values.
 * Requires ADMIN_PASSWORD_HASH env var containing a bcrypt hash.
 *
 * To generate a hash for your password, run:
 * node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('your-password', 10));"
 */
export async function POST(request: NextRequest): Promise<NextResponse<LoginResponse>> {
  try {
    const clientIp = getClientIp(request)

    // Block brute-force attempts before doing any work
    if (isRateLimited(clientIp)) {
      console.warn(`Admin login rate limit exceeded for IP: ${clientIp}`)
      return NextResponse.json(
        { success: false, message: 'Too many failed attempts. Try again later.' },
        { status: 429 }
      )
    }

    const { tooLarge, data } = await readJsonCapped(request, MAX_BODY_BYTES)
    if (tooLarge) {
      return NextResponse.json(
        { success: false, message: 'Request too large' },
        { status: 413 }
      )
    }
    const { password } = (data || {}) as Partial<LoginRequest>

    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      console.error('JWT_SECRET environment variable is not set')
      return NextResponse.json(
        { success: false, message: 'Authentication not configured' },
        { status: 500 }
      )
    }

    // Get admin password hash from environment
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH

    if (!adminPasswordHash) {
      console.error('ADMIN_PASSWORD_HASH environment variable is not set. Generate one with: node -e "const bcrypt = require(\'bcryptjs\'); console.log(bcrypt.hashSync(\'your-password\', 10));"')
      return NextResponse.json(
        { success: false, message: 'Authentication not configured' },
        { status: 500 }
      )
    }

    // Validate input
    if (!password || typeof password !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Invalid request' },
        { status: 400 }
      )
    }

    // Compare password using bcrypt only
    let isValid = false

    try {
      isValid = await bcrypt.compare(password, adminPasswordHash)
    } catch (compareError) {
      console.error('Password comparison error:', compareError)
      recordFailure(clientIp)
      logFailedLoginAttempt(clientIp)
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    if (!isValid) {
      // Log failed attempts (but don't log the password)
      recordFailure(clientIp)
      logFailedLoginAttempt(clientIp)
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Successful login: clear any accumulated failures for this IP
    clearFailures(clientIp)

    // Create JWT token valid for 24 hours
    const token = jwt.sign(
      { admin: true, website: 'flesvoedingcalculator', iat: Math.floor(Date.now() / 1000) },
      jwtSecret,
      { expiresIn: '24h' }
    )

    // Log successful login
    console.log('Admin login successful')

    return NextResponse.json({
      success: true,
      token,
      website: 'flesvoedingcalculator',
      message: 'Login successful',
    })
  } catch (error) {
    console.error('Admin login error:', error)
    return NextResponse.json(
      { success: false, message: 'Login failed' },
      { status: 500 }
    )
  }
}

/**
 * Log failed login attempt. Alleen het afgeleide IP, niet de hele
 * x-forwarded-for die de bezoeker zelf kan vullen.
 */
function logFailedLoginAttempt(clientIp: string): void {
  console.warn(`Failed admin login attempt from IP: ${clientIp}`)
}

/**
 * GET handler - method not allowed
 */
export async function GET(): Promise<NextResponse<LoginResponse>> {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  )
}
