import type { Locale } from "@/lib/locale";
import { company } from "@/lib/site";

export function barePath(pathname: string) {
  if (pathname === "/ar" || pathname === "/en") return "/";
  if (pathname.startsWith("/ar/")) return pathname.slice(3);
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  return pathname || "/";
}

export function localePath(locale: Locale, href: string) {
  if (!href.startsWith("/")) return href;
  const bare = barePath(href);
  return bare === "/" ? `/${locale}` : `/${locale}${bare}`;
}

export function absoluteUrl(locale: Locale, href: string) {
  return `${company.url}${localePath(locale, href)}`;
}
