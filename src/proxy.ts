import { NextResponse, type NextRequest } from "next/server";

const hasFileExtension = /\.[^/]+$/;

function pass(request: NextRequest, locale: "en" | "ar") {
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  return NextResponse.next({ request: { headers } });
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith("/_next") || pathname.startsWith("/api") || hasFileExtension.test(pathname)) {
    return NextResponse.next();
  }
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return pass(request, "ar");
  if (pathname === "/en" || pathname.startsWith("/en/")) return pass(request, "en");
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? "/en" : `/en${pathname}`;
  return NextResponse.redirect(url, 308);
}
