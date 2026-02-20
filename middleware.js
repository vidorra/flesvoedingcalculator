import { NextResponse } from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()

  // General security headers for all pages
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Admin routes get stricter headers
  if (request.nextUrl.pathname.startsWith('/admin')) {
    response.headers.set('X-Frame-Options', 'DENY')
  } else {
    response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  }

  return response
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
