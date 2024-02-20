import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";

const I18Middleware = createI18nMiddleware({
  locales: ["en", "id"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }
  return I18Middleware(request);
}

export const config = {
  matcher: [
    "/((?!api|dashboard|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
    "/dashboard/:path*",
  ],
};