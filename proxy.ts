import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Redirect /it-solutions/camera-access-control to /services/camera-access-security
  if (pathname === '/it-solutions/camera-access-control') {
    return NextResponse.redirect(new URL('/services/camera-access-security', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/it-solutions/camera-access-control',
}
