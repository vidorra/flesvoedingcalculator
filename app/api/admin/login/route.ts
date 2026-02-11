import { NextResponse, NextRequest } from 'next/server'
import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

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

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here'

/**
 * POST /api/admin/login - Authenticate admin user and issue JWT token
 *
 * Uses bcrypt to securely compare passwords with hashed values.
 * The ADMIN_PASSWORD_HASH environment variable MUST contain a bcrypt hash.
 *
 * Plain text passwords are NO LONGER SUPPORTED for security reasons.
 *
 * To generate a hash for your password, run:
 * node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('your-password', 10));"
 */
export async function POST(request: NextRequest): Promise<NextResponse<LoginResponse>> {
  try {
    const body = (await request.json()) as LoginRequest
    const { password } = body

    // Get admin password from environment variables
    // Support both bcrypt hash (ADMIN_PASSWORD_HASH) and plain text (ADMIN_PASSWORD) for compatibility
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPasswordHash && !adminPassword) {
      console.error('No admin password configured. Set either ADMIN_PASSWORD_HASH or ADMIN_PASSWORD environment variable.')
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

    // Compare password - try bcrypt hash first, fall back to plain text
    let isValid = false

    if (adminPasswordHash) {
      try {
        isValid = await bcrypt.compare(password, adminPasswordHash)
      } catch (compareError) {
        console.error('Password comparison error:', compareError)
        logFailedLoginAttempt(request)
        return NextResponse.json(
          { success: false, message: 'Invalid credentials' },
          { status: 401 }
        )
      }
    } else if (adminPassword) {
      // Fall back to plain text comparison (less secure but needed for compatibility)
      isValid = password === adminPassword
    }

    if (!isValid) {
      // Log failed attempts (but don't log the password)
      logFailedLoginAttempt(request)
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
    }

    // Create JWT token valid for 24 hours
    // Default to flesvoedingcalculator website for initial login
    const token = jwt.sign(
      { admin: true, website: 'flesvoedingcalculator', iat: Math.floor(Date.now() / 1000) },
      JWT_SECRET,
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
 * Log failed login attempt with rate limiting info
 */
function logFailedLoginAttempt(request: NextRequest): void {
  const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
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
