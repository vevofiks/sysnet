export const locales = ["en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const LOCALE_COOKIE = "lang";

export function parseLocale(value: string | undefined): Locale {
  return value === "ar" ? "ar" : "en";
}
