import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // 1. Check for locale in query string (e.g., ?lang=en or ?locale=en)
  const queryLocale = searchParams.get('lang') || searchParams.get('locale');

  if (queryLocale && routing.locales.includes(queryLocale as any)) {
    // Create a new response that redirects
    const url = request.nextUrl.clone();

    // Remove query params from the redirect URL
    url.searchParams.delete('lang');
    url.searchParams.delete('locale');

    const response = NextResponse.redirect(url);

    // Set NEXT_LOCALE cookie so next-intl's middleware (on the redirected request)
    // will pick up this locale as the preferred one.
    response.cookies.set('NEXT_LOCALE', queryLocale, { path: '/' });

    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Skip all internal paths (_next, favicon, etc.)
    '/',
    '/((?!_next|favicon.ico|api|.*\\..*).*)',
  ],
};
