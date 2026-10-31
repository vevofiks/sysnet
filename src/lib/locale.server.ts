import { headers } from "next/headers";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/locale";

export async function getLocale(): Promise<Locale> {
  const value = (await headers()).get("x-locale");
  if (value !== "en" && value !== "ar") notFound();
  return value;
}
