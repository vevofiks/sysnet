"use client";

import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Photo } from "@/components/brand";
import { useCopy, useLocale } from "@/components/locale";
import { content } from "@/lib/content";
import { useMotionReady } from "@/lib/use-motion";

const ease = [0.16, 1, 0.3, 1] as const;
const frame = "min-h-[34rem] sm:min-h-[calc(100svh-4rem)]";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function Hero() {
  const locale = useLocale();
  const t = useCopy();
  const on = useMotionReady();
  const rtl = locale === "ar";
  const projects = content(locale).projects;
  const slides = [
    {
      key: "company",
      title: t.hero.title,
      body: t.hero.lede,
      image: "/images/pair.jpg",
      alt: t.hero.photoAlt,
      href: "/services",
      cta: t.hero.explore,
      secondaryHref: "/contact",
      secondary: t.hero.contact,
    },
    ...projects.map((project) => ({
      key: project.slug,
      title: project.title,
      body: project.summary,
      image: project.image,
      alt: project.alt,
      href: "/projects",
      cta: t.priced.seeScope,
      secondaryHref: "",
      secondary: "",
    })),
  ];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const drag = useRef<{ x: number; y: number } | null>(null);
  const count = slides.length;
  const slide = slides[index];

  useEffect(() => {
    if (!on || paused) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((current) => (current + 1) % count);
    }, 5600);
    return () => window.clearInterval(id);
  }, [on, paused, index, count]);

  function go(delta: number) {
    setDirection(delta);
    setIndex((current) => (current + delta + count) % count);
  }

  function goTo(next: number) {
    if (next === index) return;
    const forward = (next - index + count) % count;
    setDirection(forward <= count / 2 ? 1 : -1);
    setIndex(next);
  }

  const travel = (sign: number) => `${sign * (rtl ? -100 : 100)}%`;

  return (
    <section className="relative bg-navy text-ice">
      <div
        className={`relative touch-pan-y overflow-hidden ${frame}`}
        role="region"
        aria-roledescription="carousel"
        aria-label={t.a11y.heroSlides}
        onPointerDown={(event) => {
          if (event.pointerType !== "touch") return;
          if ((event.target as HTMLElement).closest("a, button")) return;
          drag.current = { x: event.clientX, y: event.clientY };
        }}
        onPointerUp={(event) => {
          const start = drag.current;
          drag.current = null;
          if (!start || event.pointerType !== "touch") return;
          const dx = event.clientX - start.x;
          const dy = event.clientY - start.y;
          if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
          go((dx < 0 ? 1 : -1) * (rtl ? -1 : 1));
        }}
        onPointerCancel={() => {
          drag.current = null;
        }}
        onFocus={() => setPaused(true)}
        onBlur={(event) => {
          const next = event.relatedTarget;
          if (next instanceof Node && event.currentTarget.contains(next)) return;
          setPaused(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            go(rtl ? -1 : 1);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            go(rtl ? 1 : -1);
          }
        }}
      >
        <p className="sr-only" aria-live="polite">
          {slide.title}
        </p>
        <AnimatePresence initial={false} custom={direction}>
          <motion.article
            key={slide.key}
            className="absolute inset-0"
            custom={direction}
            variants={{
              enter: (delta: number) => ({ x: on ? travel(delta) : 0, zIndex: 1 }),
              center: { x: 0, zIndex: 1 },
              exit: (delta: number) => ({ x: on ? travel(-delta) : 0, zIndex: 0 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: on ? 0.7 : 0, ease }}
          >
            <div className="absolute inset-0">
              <Photo
                src={slide.image}
                alt={slide.alt}
                sizes="100vw"
                priority={index === 0}
                className="object-cover object-[center_35%]"
              />
            </div>
            <div className="absolute inset-0 hidden bg-gradient-to-r from-navy-deep from-10% via-navy/80 via-42% to-transparent to-62% sm:block rtl:bg-gradient-to-l" />
            <div className="absolute inset-y-0 start-0 hidden w-[46%] bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent sm:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/25 sm:hidden" />
            <div className="relative flex h-full items-end">
              <div className="mx-auto w-full max-w-[1400px] px-4 pb-24 pt-10 sm:pb-28 sm:pt-16 md:px-10 md:pb-32">
                <h1 className="hero-title max-w-[12ch] text-[1.75rem] font-medium leading-[1.2] tracking-normal sm:max-w-[14ch] sm:text-5xl sm:leading-[1.05] md:text-6xl">
                  {slide.title}
                </h1>
                <p className="mt-3 line-clamp-4 max-w-[40ch] text-sm leading-relaxed text-ice/90 sm:mt-5 sm:line-clamp-none sm:max-w-[48ch] sm:text-base md:text-lg">
                  {slide.body}
                </p>
                <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
                  <Link
                    href={slide.href}
                    className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[5px] bg-paper px-5 text-sm font-medium uppercase tracking-normal text-navy hover:bg-ice sm:w-auto"
                  >
                    {slide.cta}
                    <ArrowRight className="size-4 rtl:rotate-180" strokeWidth={1.5} aria-hidden="true" />
                  </Link>
                  {slide.secondary ? (
                    <Link
                      href={slide.secondaryHref}
                      className="inline-flex h-12 w-full items-center justify-center rounded-[5px] border border-ice/50 px-5 text-sm font-medium uppercase tracking-normal text-ice hover:bg-ice/10 sm:w-auto"
                    >
                      {slide.secondary}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
          <div className="mx-auto flex w-full max-w-[1400px] items-center gap-4 px-4 pb-6 md:justify-center md:px-10 md:pb-8">
            <p className="font-mono text-sm tabular-nums text-ice" dir="ltr">
              {pad(index + 1)}
              <span className="text-ice/45"> / {pad(count)}</span>
            </p>
            <div
              className="pointer-events-auto ms-auto flex items-center gap-2 sm:gap-3 md:ms-0"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="flex items-center">
                {slides.map((item, itemIndex) => {
                  const active = itemIndex === index;
                  return (
                    <button
                      key={item.key}
                      type="button"
                      aria-label={item.title}
                      aria-current={active ? "true" : undefined}
                      onClick={() => goTo(itemIndex)}
                      className="inline-flex h-11 w-5 items-center justify-center sm:w-6"
                    >
                      <span
                        className={`block h-1 rounded-full sm:h-1.5 ${
                          active ? "w-5 bg-ice sm:w-8" : "w-1.5 bg-ice/40"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
              <div className="inline-flex items-center rounded-full border border-ice/30 bg-navy-deep/45 p-1 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label={t.a11y.prevSlide}
                  className="inline-flex size-11 items-center justify-center rounded-full text-ice transition-colors duration-300 ease-out-expo hover:bg-ice hover:text-navy"
                >
                  <ChevronLeft
                    className="size-5 rtl:rotate-180"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label={t.a11y.nextSlide}
                  className="inline-flex size-11 items-center justify-center rounded-full text-ice transition-colors duration-300 ease-out-expo hover:bg-ice hover:text-navy"
                >
                  <ChevronRight
                    className="size-5 rtl:rotate-180"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
