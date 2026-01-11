import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'

/**
 * POST /api/admin-auth - Authenticate admin user
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
    // Falls back to plain ADMIN_PASSWORD for backwards compatibility during migration
    const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH
    const adminPasswordPlain = process.env.ADMIN_PASSWORD

    if (!adminPasswordHash && !adminPasswordPlain) {
      console.error('ADMIN_PASSWORD_HASH or ADMIN_PASSWORD environment variable not set')
      return NextResponse.json({
        success: false,
        error: 'Authentication not configured'
      }, { status: 500 })
    }

    let isValid = false

    // Prefer hashed password comparison
    if (adminPasswordHash) {
      isValid = await bcrypt.compare(password, adminPasswordHash)
    } else if (adminPasswordPlain) {
      // Fallback to plain comparison (for backwards compatibility)
      // Log warning to encourage migration to hashed password
      console.warn('Using plain text password comparison. Please migrate to ADMIN_PASSWORD_HASH for better security.')
      isValid = password === adminPasswordPlain
    }

    if (isValid) {
      return NextResponse.json({
        success: true,
        message: 'Authentication successful'
      })
    } else {
      // Log failed attempts (but don't log the password)
      console.warn('Failed admin login attempt from IP:', request.headers.get('x-forwarded-for') || 'unknown')

      return NextResponse.json({
        success: false,
        error: 'Invalid password'
      }, { status: 401 })
    }

  } catch (error) {
    console.error('Admin auth error:', error)
    return NextResponse.json({
      success: false,
      error: 'Authentication failed'
    }, { status: 500 })
  }
}