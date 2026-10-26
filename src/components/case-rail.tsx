"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef, useState } from "react";
import { Photo } from "@/components/brand";
import { useCopy } from "@/components/locale";
import { scrollByMotion } from "@/lib/motion-pref";
import type { projects } from "@/lib/site";

type Project = (typeof projects)[number];

export function CaseRail({ items }: { items: Project[] }) {
  const scroller = useRef<HTMLDivElement>(null);
  const t = useCopy();
  const [progress, setProgress] = useState(0.12);

  function onScroll() {
    const el = scroller.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const rtl = getComputedStyle(el).direction === "rtl";
    const scrolled = rtl ? Math.abs(el.scrollLeft) : el.scrollLeft;
    setProgress(max <= 0 ? 1 : scrolled / max);
  }

  function move(direction: number) {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("article");
    const width = (card?.clientWidth ?? 320) + 20;
    const rtl = getComputedStyle(el).direction === "rtl";
    scrollByMotion(el, (rtl ? -direction : direction) * width);
  }

  return (
    <div>
      <div
        ref={scroller}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <article
            key={item.slug}
            className="w-[min(82vw,360px)] shrink-0 snap-start overflow-hidden rounded-[18px] border border-line bg-white"
          >
            <div className="relative aspect-[16/10]">
              <Photo src={item.image} alt={item.alt} sizes="360px" />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-medium leading-snug tracking-normal">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {item.facts.map((fact) => (
                  <li
                    key={fact}
                    className="rounded-full border border-line px-2.5 py-1 text-xs text-ink"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-4">
        <div className="h-1 w-28 overflow-hidden rounded-full bg-line" aria-hidden="true">
          <div
            className="h-full origin-left rounded-full bg-orange-deep rtl:origin-right"
            style={{ transform: `scaleX(${Math.max(progress, 0.18)})` }}
          />
        </div>
        <div className="ms-auto flex gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            className="inline-flex size-11 items-center justify-center rounded-[5px] border border-line bg-card hover:border-navy"
            aria-label={t.a11y.prevProject}
          >
            <ArrowLeft className="size-4 rtl:rotate-180" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            className="inline-flex size-11 items-center justify-center rounded-[5px] bg-orange-deep text-white hover:bg-[#9a3412]"
            aria-label={t.a11y.nextProject}
          >
            <ArrowRight className="size-4 rtl:rotate-180" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
