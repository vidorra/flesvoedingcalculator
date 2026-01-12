import { NextResponse } from 'next/server'
import * as jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

// Force dynamic route
export const dynamic = 'force-dynamic'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-here'

/**
 * POST /api/admin/login - Authenticate admin user and issue JWT token
 *
 * Uses bcrypt to securely compare passwords.
 * The ADMIN_PASSWORD_HASH environment variable should contain a bcrypt hash.
 *
 * To generate a hash for your password, run:
 * node -e "const bcrypt = require('bcryptjs'); console.log(bcrypt.hashSync('your-password', 10));"
 */
export async function POST(request) {
  try {
    const { password } = await request.json()

    // Get admin password hash from environment variable
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH
    const adminPasswordPlain = process.env.ADMIN_PASSWORD

    if (!adminPasswordHash && !adminPasswordPlain) {
      console.error('ADMIN_PASSWORD_HASH or ADMIN_PASSWORD environment variable not set')
      return NextResponse.json(
        { message: 'Authentication not configured' },
        { status: 500 }
      )
    }

    let isValid = false

    // Prefer hashed password comparison (secure)
    if (adminPasswordHash) {
      isValid = await bcrypt.compare(password, adminPasswordHash)
    } else if (adminPasswordPlain) {
      // Fallback to plain comparison (for backwards compatibility only)
      console.warn('Using plain text password. Please migrate to ADMIN_PASSWORD_HASH.')
      isValid = password === adminPasswordPlain
    }

    if (!isValid) {
      // Log failed attempts (but don't log the password)
      console.warn('Failed admin login attempt from IP:', request.headers.get('x-forwarded-for') || 'unknown')
      return NextResponse.json(
        { message: 'Invalid password' },
        { status: 401 }
      )
    }

    // Create JWT token valid for 24 hours
    const token = jwt.sign(
      { admin: true, iat: Math.floor(Date.now() / 1000) },
      JWT_SECRET,
      { expiresIn: '24h' }
    )

    return NextResponse.json({
      success: true,
      token,
      message: 'Login successful'
    })

  } catch (error) {
    console.error('Admin login error:', error)
    return NextResponse.json(
      { message: 'Login failed' },
      { status: 500 }
    )
  }
}