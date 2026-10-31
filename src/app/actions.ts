"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { content } from "@/lib/content";
import { copy } from "@/lib/copy";
import { LOCALE_COOKIE, parseLocale, type Locale } from "@/lib/locale";
import { validateQuote, type QuoteResult } from "@/lib/quote";

export async function setLocale(locale: Locale) {
  const jar = await cookies();
  jar.set(LOCALE_COOKIE, parseLocale(locale), {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}

export async function submitQuote(
  _previous: QuoteResult,
  formData: FormData,
): Promise<QuoteResult> {
  const locale = parseLocale(String(formData.get("locale") ?? ""));
  const t = copy[locale].form;
  const lines = content(locale).services.map((service) => ({
    slug: service.slug,
    title: service.title,
  }));
  const result = validateQuote(formData, t, lines);

  if (result.status !== "ok" || !result.href) return result;
  if (String(formData.get("company_url") ?? "").trim()) return result;

  const record = {
    receivedAt: new Date().toISOString(),
    locale,
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "inquiries.jsonl"), `${JSON.stringify(record)}\n`, "utf8");
  } catch {
    // WhatsApp is the delivery path. A local log is optional.
  }

  return result;
}
