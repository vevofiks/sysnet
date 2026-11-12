import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { localePath } from "@/lib/paths";

export function HeroLead({ locale }: { locale: Locale }) {
  const t = content(locale).t;
  const rtl = locale === "ar";

  const scopes = [
    rtl ? "كاميرات المراقبة" : "CCTV Surveillance",
    rtl ? "إنذار الحريق" : "Fire Alarms",
    rtl ? "التحكم بالدخول" : "Access Control",
    rtl ? "تمديد الشبكات" : "Cat6 Structured Cabling",
  ];

  return (
    <article className="absolute inset-0">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-cctv-commercial.jpg"
          alt={t.hero.photoAlt}
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-[center_35%]"
        />
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-r from-navy-deep from-10% via-navy/80 via-48% to-transparent sm:block rtl:bg-gradient-to-l" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/25 sm:from-navy-deep/80 sm:via-navy-deep/20 sm:to-transparent" />
      <div className="relative flex h-full items-end">
        <div className="mx-auto w-full max-w-[1400px] px-4 pb-24 pt-10 sm:pb-28 sm:pt-16 md:px-10 md:pb-32">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-mono uppercase tracking-wider text-orange-soft backdrop-blur-md">
            <span>{rtl ? "مكتب الرياض الميداني · حي الملز" : "Riyadh Field Operations Desk · Malaz"}</span>
          </div>

          <h1 className="hero-title max-w-[12ch] text-[1.75rem] font-medium leading-[1.2] tracking-normal sm:max-w-[14ch] sm:text-5xl sm:leading-[1.05] md:text-6xl text-white">
            {t.hero.title}
          </h1>
          <p className="mt-3 line-clamp-4 max-w-[40ch] text-sm leading-relaxed text-ice/90 sm:mt-5 sm:line-clamp-none sm:max-w-[48ch] sm:text-base md:text-lg">
            {t.hero.lede}
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
            <Link
              href={localePath(locale, "/services")}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[5px] bg-paper px-6 text-sm font-medium uppercase tracking-normal text-navy hover:bg-ice sm:w-auto transition-colors"
            >
              {t.hero.explore}
              <ArrowRight className="size-4 rtl:rotate-180" strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex h-12 w-full items-center justify-center rounded-[5px] border border-ice/50 px-6 text-sm font-medium uppercase tracking-normal text-ice hover:bg-ice/10 sm:w-auto transition-colors"
            >
              {t.hero.contact}
            </Link>
          </div>

          {/* Quick Scope Badges */}
          <div className="mt-8 hidden items-center gap-2 pt-2 sm:flex">
            {scopes.map((scope) => (
              <span
                key={scope}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm"
              >
                {scope}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
