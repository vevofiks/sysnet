"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/brand";
import { useCopy, useLocale } from "@/components/locale";
import { localePath } from "@/lib/paths";
import { scrollByMotion } from "@/lib/motion-pref";
import type { projects } from "@/lib/site";

type Project = (typeof projects)[number];

export function CaseRail({ items }: { items: Project[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const t = useCopy();
  const locale = useLocale();
  const [progress, setProgress] = useState(0);

  function onScroll() {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) {
      setProgress(1);
      return;
    }
    const rtl = getComputedStyle(el).direction === "rtl";
    const scrolled = rtl ? Math.abs(el.scrollLeft) : el.scrollLeft;
    setProgress(Math.min(1, Math.max(0, scrolled / max)));
  }

  useEffect(() => {
    onScroll();
  }, []);

  function move(direction: number) {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("article");
    const width = (card?.clientWidth ?? 340) + 24;
    const rtl = getComputedStyle(el).direction === "rtl";
    scrollByMotion(el, (rtl ? -direction : direction) * width);
  }

  return (
    <div className="relative group">
      {/* Floating Left Navigation Button */}
      <button
        type="button"
        onClick={() => move(-1)}
        disabled={progress <= 0.05}
        className="absolute start-1 md:-start-5 top-1/2 -translate-y-1/2 z-20 inline-flex size-11 sm:size-12 items-center justify-center rounded-full border border-line bg-white/95 text-navy shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-navy hover:text-white hover:border-navy active:scale-95 disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
        aria-label={t.a11y.prevProject}
      >
        <ChevronLeft className="size-6 rtl:rotate-180" strokeWidth={2} />
      </button>

      {/* Floating Right Navigation Button */}
      <button
        type="button"
        onClick={() => move(1)}
        disabled={progress >= 0.95}
        className="absolute end-1 md:-end-5 top-1/2 -translate-y-1/2 z-20 inline-flex size-11 sm:size-12 items-center justify-center rounded-full border border-line bg-white/95 text-navy shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-navy hover:text-white hover:border-navy active:scale-95 disabled:opacity-0 disabled:pointer-events-none cursor-pointer"
        aria-label={t.a11y.nextProject}
      >
        <ChevronRight className="size-6 rtl:rotate-180" strokeWidth={2} />
      </button>

      {/* Scrollable Track */}
      <div
        ref={scroller}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <article
            key={item.slug}
            className="group/card w-[min(85vw,380px)] shrink-0 snap-start overflow-hidden rounded-[20px] border border-line bg-white shadow-sm transition-all duration-300 hover:border-navy hover:shadow-lift"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-navy-deep">
              <Photo
                src={item.image}
                alt={item.alt}
                sizes="380px"
                className="object-cover transition-transform duration-500 ease-out-expo group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/80 px-2.5 py-0.5 text-[11px] font-medium backdrop-blur-md">
                  <MapPin className="size-3 text-orange-soft" />
                  {item.tag}
                </span>
              </div>
            </div>
            <div className="flex flex-col p-6">
              <h3 className="text-xl font-medium leading-snug tracking-normal text-ink group-hover/card:text-navy">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-2">{item.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {item.facts.map((fact) => (
                  <li
                    key={fact}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-[#f8fbfe] px-2.5 py-1 text-xs text-ink"
                  >
                    <CheckCircle2 className="size-3 text-orange-deep" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-line/70 pt-4">
                <Link
                  href={localePath(locale, `/projects#${item.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-navy group-hover/card:text-orange-deep"
                >
                  <span>{t.priced.seeScope}</span>
                  <ArrowRight className="size-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Progress Bar (arrows removed from below) */}
      <div className="mt-6 flex items-center">
        <div className="h-1.5 w-32 overflow-hidden rounded-full bg-line" aria-hidden="true">
          <div
            className="h-full origin-left rounded-full bg-orange-deep rtl:origin-right transition-transform duration-200"
            style={{ transform: `scaleX(${Math.max(progress, 0.25)})` }}
          />
        </div>
      </div>
    </div>
  );
}
