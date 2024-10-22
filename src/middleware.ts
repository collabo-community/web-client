import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { nextUrl: url, headers } = request;
  const hostname = headers.get('host')?.split(':')[0] ?? '';

  if (hostname === 'localhost') {
    if (url.pathname === '/') {
      url.pathname = '/';
    } else {
      url.pathname = `/@pages_community${url.pathname}`;
    }
  }
  
  if (hostname === 'app.localhost') {
    if (url.pathname === '/') {
      url.pathname = '/@pages_app/projects';
    } else {
      url.pathname = `/@pages_app${url.pathname}`;
    }
  }

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
