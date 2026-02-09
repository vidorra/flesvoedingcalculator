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

    // Get admin password hash from environment variable
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH

    // Security: Plain text password support removed
    if (!adminPasswordHash) {
      console.error(
        'ADMIN_PASSWORD_HASH environment variable not set. ' +
        'For security, only bcrypt hashes are supported. ' +
        'Generate one with: node -e "const bcrypt = require("bcryptjs"); console.log(bcrypt.hashSync("your-password", 10));"'
      )
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

    // Compare password with bcrypt hash (constant-time comparison)
    let isValid = false
    try {
      isValid = await bcrypt.compare(password, adminPasswordHash)
    } catch (compareError) {
      console.error('Password comparison error:', compareError)
      // Still log failed attempt but return generic error
      logFailedLoginAttempt(request)
      return NextResponse.json(
        { success: false, message: 'Invalid credentials' },
        { status: 401 }
      )
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
    const token = jwt.sign(
      { admin: true, iat: Math.floor(Date.now() / 1000) },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    // Log successful login
    console.log('Admin login successful')

    return NextResponse.json({
      success: true,
      token,
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
