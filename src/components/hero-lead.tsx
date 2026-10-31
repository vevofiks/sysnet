import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { preload } from "react-dom";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { localePath } from "@/lib/paths";

const avifSrcSet =
  "/images/hero-640.avif 640w, /images/hero-960.avif 960w, /images/hero-1280.avif 1280w";
const webpSrcSet =
  "/images/hero-640.webp 640w, /images/hero-960.webp 960w, /images/hero-1280.webp 1280w";

export function HeroLead({ locale }: { locale: Locale }) {
  preload("/images/hero-960.avif", {
    as: "image",
    fetchPriority: "high",
    imageSrcSet: avifSrcSet,
    imageSizes: "100vw",
    type: "image/avif",
  });

  const t = content(locale).t;

  return (
    <article className="absolute inset-0">
      <div className="absolute inset-0">
        <picture>
          <source type="image/avif" srcSet={avifSrcSet} sizes="100vw" />
          <source type="image/webp" srcSet={webpSrcSet} sizes="100vw" />
          <img
            src="/images/hero-960.avif"
            alt={t.hero.photoAlt}
            width={1280}
            height={854}
            sizes="100vw"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
          />
        </picture>
      </div>
      <div className="absolute inset-0 hidden bg-gradient-to-r from-navy-deep from-10% via-navy/80 via-48% to-transparent sm:block rtl:bg-gradient-to-l" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/25 sm:from-navy-deep/80 sm:via-navy-deep/20 sm:to-transparent" />
      <div className="relative flex h-full items-end">
        <div className="mx-auto w-full max-w-[1400px] px-4 pb-24 pt-10 sm:pb-28 sm:pt-16 md:px-10 md:pb-32">
          <h1 className="hero-title max-w-[12ch] text-[1.75rem] font-medium leading-[1.2] tracking-normal sm:max-w-[14ch] sm:text-5xl sm:leading-[1.05] md:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-3 line-clamp-4 max-w-[40ch] text-sm leading-relaxed text-ice/90 sm:mt-5 sm:line-clamp-none sm:max-w-[48ch] sm:text-base md:text-lg">
            {t.hero.lede}
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
            <Link
              href={localePath(locale, "/services")}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[5px] bg-paper px-5 text-sm font-medium uppercase tracking-normal text-navy hover:bg-ice sm:w-auto"
            >
              {t.hero.explore}
              <ArrowRight className="size-4 rtl:rotate-180" strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex h-12 w-full items-center justify-center rounded-[5px] border border-ice/50 px-5 text-sm font-medium uppercase tracking-normal text-ice hover:bg-ice/10 sm:w-auto"
            >
              {t.hero.contact}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
