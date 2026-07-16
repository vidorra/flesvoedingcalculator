import { NextResponse } from 'next/server'

// Force dynamic route
export const dynamic = 'force-dynamic'

// GET - Disabled in favor of /api/admin-pages/ (production-safe).
// De oude filesystem-scan veroorzaakte 504-timeouts in productie; de
// paginalijst komt nu uit /api/admin-pages/ (DB-backed).
export async function GET() {
  return NextResponse.json(
    {
      message: 'This endpoint is disabled. Use /api/admin-pages/ instead.',
      redirect: '/api/admin-pages/'
    },
    { status: 301 }
  )
}
