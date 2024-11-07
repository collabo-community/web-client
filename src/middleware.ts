import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { nextUrl: url, headers } = request;
  const hostname = headers.get('host')?.split(':')[0] ?? '';

  if (hostname === 'localhost') {
    url.pathname = url.pathname === '/' ? '/' : `/@pages_community${url.pathname}`;
  } else if (hostname === 'app.localhost') {
    url.pathname = url.pathname === '/' ? '/@pages_app/projects' : `/@pages_app${url.pathname}`;
  } else {
    // Handle unknown subdomains by redirecting to community home page's 404 page
    url.pathname = '/404';
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
