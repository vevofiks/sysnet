"use server";

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { copy } from "@/lib/copy";
import { LOCALE_COOKIE, parseLocale, type Locale } from "@/lib/locale";
import { getLocale } from "@/lib/locale.server";
import type { QuoteResult } from "@/lib/quote";
import { services } from "@/lib/site";

const slugs = new Set(services.map((service) => service.slug));

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
  const t = copy[await getLocale()].form;

  if (String(formData.get("company_url") ?? "").trim()) {
    return {
      status: "ok",
      message: t.received,
      errors: {},
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const errors: QuoteResult["errors"] = {};

  if (name.length < 2) errors.name = t.errors.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = t.errors.email;
  }
  if (phone.replace(/\D/g, "").length < 9) {
    errors.phone = t.errors.phone;
  }
  if (!slugs.has(service)) errors.service = t.errors.service;
  if (message.length < 20) {
    errors.message = t.errors.message;
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: t.check,
      errors,
    };
  }

  const record = {
    receivedAt: new Date().toISOString(),
    locale: await getLocale(),
    name,
    email,
    phone,
    service,
    serviceTitle: services.find((item) => item.slug === service)?.title ?? service,
    message,
  };

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "inquiries.jsonl"), `${JSON.stringify(record)}\n`, "utf8");
  } catch {
    return {
      status: "error",
      message: t.store,
      errors: {},
    };
  }

  return {
    status: "ok",
    message: t.saved,
    errors: {},
  };
}
