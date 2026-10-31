import { company } from "@/lib/site";

export type QuoteField = "name" | "email" | "phone" | "service" | "message";

export type QuoteResult = {
  status: "idle" | "ok" | "error";
  message: string;
  errors: Partial<Record<QuoteField, string>>;
  href?: string;
};

export const idleQuote: QuoteResult = {
  status: "idle",
  message: "",
  errors: {},
};

type QuoteCopy = {
  intro: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  received: string;
  saved: string;
  check: string;
  errors: Record<QuoteField, string>;
};

export function validateQuote(
  formData: FormData,
  t: QuoteCopy,
  services: { slug: string; title: string }[],
): QuoteResult {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const service = String(formData.get("service") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const errors: QuoteResult["errors"] = {};
  const known = new Set(services.map((item) => item.slug));

  if (name.length < 2) errors.name = t.errors.name;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = t.errors.email;
  if (phone.replace(/\D/g, "").length < 9) errors.phone = t.errors.phone;
  if (!known.has(service)) errors.service = t.errors.service;
  if (message.length < 1) errors.message = t.errors.message;

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: t.check, errors };
  }

  const serviceTitle = services.find((item) => item.slug === service)?.title ?? service;
  const text = [
    t.intro,
    "",
    `${t.name}: ${name}`,
    `${t.email}: ${email}`,
    `${t.phone}: ${phone}`,
    `${t.service}: ${serviceTitle}`,
    `${t.message}:`,
    message,
  ].join("\n");

  return {
    status: "ok",
    message: t.saved,
    errors: {},
    href: `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`,
  };
}
