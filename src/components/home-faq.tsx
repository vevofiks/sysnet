"use client";

import Link from "next/link";
import { HelpCircle, Phone, ArrowRight } from "lucide-react";
import { useCopy, useLocale } from "@/components/locale";
import { localePath } from "@/lib/paths";
import { company } from "@/lib/site";
import type { SanityHomePageData } from "@/sanity/queries";

export function HomeFaq({
  title,
  faqs,
  sanityData,
}: {
  title: string;
  faqs: { q: string; a: string }[];
  sanityData?: SanityHomePageData | null;
}) {
  const t = useCopy();
  const locale = useLocale();
  const rtl = locale === "ar";

  const faqBadge = sanityData?.faqBadge || (rtl ? "الأسئلة الشائعة" : "Common Questions");
  const faqTitle = sanityData?.faqTitle || title;
  const faqLede =
    sanityData?.faqLede ||
    (rtl
      ? "إجابات واضحة ومباشرة حول كيفية تنفيذ المعاينة الميدانية وعقود الصيانة ونطاق التغطية."
      : "Clear answers regarding site surveys, maintenance takeovers, equipment purchasing, and desk hours.");
  const faqCardTitle =
    sanityData?.faqCardTitle || (rtl ? "هل لديك استفسار محدد لمبناك؟" : "Have an Urgent Scope Question?");
  const faqCardLede =
    sanityData?.faqCardLede ||
    (rtl
      ? "تواصل مباشرة مع المهندسين في مكتب الملز للحصول على إفادة هندسية فورية."
      : "Speak directly with the Malaz engineering desk for immediate guidance.");

  return (
    <section className="border-t border-line bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-[0.85fr_1.15fr] md:px-10">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-deep/20 bg-orange-soft/40 px-3 py-1 text-xs font-mono uppercase tracking-wider text-orange-deep">
            <HelpCircle className="size-3.5" />
            <span>{faqBadge}</span>
          </div>
          <h2 className="text-3xl font-medium tracking-normal text-ink md:text-4xl">
            {faqTitle}
          </h2>
          <p className="max-w-[45ch] text-base leading-relaxed text-muted">
            {faqLede}
          </p>

          <div className="rounded-[18px] border border-line bg-[#f8fbfe] p-6 shadow-sm">
            <h3 className="text-base font-medium text-ink">
              {faqCardTitle}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {faqCardLede}
            </p>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
              <a
                href={`tel:${company.phoneTel}`}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-[5px] bg-navy px-4 text-xs font-medium uppercase tracking-normal text-white hover:bg-navy-deep"
              >
                <Phone className="size-3.5" />
                {company.phoneDisplay}
              </a>
              <Link
                href={localePath(locale, "/contact")}
                className="inline-flex h-10 items-center justify-center gap-1.5 rounded-[5px] border border-line bg-white px-4 text-xs font-medium uppercase tracking-normal text-ink hover:border-navy"
              >
                <span>{t.nav.contact}</span>
                <ArrowRight className="size-3 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-[16px] border border-line bg-[#f8fbfe] px-6 py-2 shadow-2xs transition-colors duration-200 hover:border-navy/40 hover:bg-white"
            >
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-start text-base font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line bg-white text-lg text-orange-deep transition-transform duration-300 ease-out-expo group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[65ch] pb-4 pt-1 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
