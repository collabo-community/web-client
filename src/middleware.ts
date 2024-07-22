import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { nextUrl: url, headers } = request;
  const hostname = headers.get('host')?.split(':')[0] ?? '';

  if (hostname === 'app.localhost') {
    if (url.pathname === '/') {
      url.pathname = '/code-collabo/overview';
    } else {
      url.pathname = `/code-collabo${url.pathname}`;
    }
  } else if (hostname === 'localhost') {
    if (url.pathname === '/') {
      url.pathname = '/';
    } else {
      url.pathname = `/app-home${url.pathname}`;
    }
  } else {
    // If the path starts with app-home or code-collabo on any other domain, return a 404 response
    if (url.pathname.startsWith('/code-collabo') || url.pathname.startsWith('/app-home')) {
      return NextResponse.rewrite(new URL('/404', request.url));
    }
  }

  console.log('final url', url)

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
