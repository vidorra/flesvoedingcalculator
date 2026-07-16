import { NextResponse } from 'next/server'
import { verifyAdminAndGetWebsite } from '../../../../lib/jwt-utils.js'

// Force dynamic route
export const dynamic = 'force-dynamic'

// Verifieert het admin-token via de gedeelde util (faalt gesloten als
// JWT_SECRET ontbreekt, pint HS256 tegen alg-confusion). Geen eigen
// JWT_SECRET-fallback meer.
export async function GET(request) {
  try {
    const { website } = verifyAdminAndGetWebsite(request)
    return NextResponse.json({ success: true, admin: true, website })
  } catch (error) {
    return NextResponse.json(
      { message: 'Token expired or invalid' },
      { status: 401 }
    )
  }
}
