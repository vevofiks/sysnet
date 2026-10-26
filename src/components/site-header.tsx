"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState, useTransition } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { setLocale } from "@/app/actions";
import { Logo } from "@/components/brand";
import { Flag } from "@/components/flags";
import { useCopy, useLocale } from "@/components/locale";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { scrollByMotion } from "@/lib/motion-pref";
import { company } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const languages: { id: Locale; label: string }[] = [
  { id: "en", label: "English" },
  { id: "ar", label: "العربية" },
];

function LanguageMenu({ onOpen }: { onOpen?: () => void }) {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useCopy();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname, locale]);

  useEffect(() => {
    if (!open) return;
    const selected = rootRef.current?.querySelector<HTMLElement>("[aria-selected='true']");
    selected?.focus({ preventScroll: true });
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  function toggle() {
    setOpen((value) => {
      const next = !value;
      if (next) onOpen?.();
      return next;
    });
  }

  function choose(next: Locale) {
    setOpen(false);
    buttonRef.current?.focus();
    if (next === locale) return;
    startTransition(async () => {
      await setLocale(next);
      router.refresh();
    });
  }

  function onListKey(event: ReactKeyboardEvent<HTMLDivElement>) {
    const options = [
      ...rootRef.current!.querySelectorAll<HTMLButtonElement>("[role='option']"),
    ];
    const index = options.findIndex((node) => node === document.activeElement);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      options[Math.min(index + 1, options.length - 1)]?.focus();
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      options[Math.max(index - 1, 0)]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      options[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      options[options.length - 1]?.focus();
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        disabled={pending}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls="language-menu"
        aria-label={t.a11y.language}
        onClick={toggle}
        className="inline-flex h-11 items-center gap-1.5 rounded-[5px] px-2 text-ink hover:bg-ice disabled:opacity-60"
      >
        <Flag locale={locale} />
        <ChevronDown
          className={`size-4 transition-transform duration-300 ease-out-expo motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </button>
      {open ? (
        <div
          id="language-menu"
          role="listbox"
          aria-label={t.a11y.language}
          onKeyDown={onListKey}
          className="absolute end-0 top-[calc(100%+8px)] z-50 w-44 rounded-[5px] border border-line bg-paper p-1 shadow-lift"
        >
          {languages.map((item) => {
            const selected = item.id === locale;
            return (
              <button
                key={item.id}
                type="button"
                role="option"
                lang={item.id}
                aria-selected={selected}
                onClick={() => choose(item.id)}
                className={`flex h-11 w-full items-center gap-3 rounded-[5px] px-3 text-start text-sm ${
                  item.id === "ar" ? "font-arabic" : "font-sans"
                } ${selected ? "bg-ice text-navy" : "text-ink hover:bg-ice"}`}
              >
                <Flag locale={item.id} />
                <span>{item.label}</span>
                {selected ? (
                  <Check className="ms-auto size-4" strokeWidth={1.5} aria-hidden="true" />
                ) : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

let rtlScrollOrigin: "negative" | "reverse" | null = null;

/** Chromium keeps RTL scrollLeft at 0 and moves negative. Firefox starts at the max. */
function getRtlScrollOrigin() {
  if (rtlScrollOrigin) return rtlScrollOrigin;
  const probe = document.createElement("div");
  probe.dir = "rtl";
  probe.style.cssText =
    "width:40px;height:10px;overflow:auto;position:absolute;visibility:hidden;pointer-events:none";
  const inner = document.createElement("div");
  inner.style.cssText = "width:80px;height:10px";
  probe.appendChild(inner);
  document.body.appendChild(probe);
  rtlScrollOrigin = probe.scrollLeft > 0 ? "reverse" : "negative";
  probe.remove();
  return rtlScrollOrigin;
}

function scrollPosition(el: HTMLElement) {
  const max = Math.max(0, el.scrollWidth - el.clientWidth);
  const rtl = getComputedStyle(el).direction === "rtl";
  const raw = el.scrollLeft;
  const pos =
    !rtl ? raw : raw < 0 || getRtlScrollOrigin() === "negative" ? Math.abs(raw) : max - raw;
  return {
    max,
    atStart: max <= 4 || pos <= 4,
    atEnd: max <= 4 || pos >= max - 4,
  };
}

function ServiceRail({
  lines,
  onPick,
}: {
  lines: { slug: string; title: string }[];
  onPick: () => void;
}) {
  const t = useCopy();
  const pathname = usePathname();
  const scroller = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const read = () => setHash(window.location.hash.replace(/^#/, ""));
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [pathname]);

  useLayoutEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const measure = () => {
      const next = scrollPosition(el);
      setAtStart(next.atStart);
      setAtEnd(next.atEnd);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    el.addEventListener("scroll", measure, { passive: true });
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", measure);
    };
  }, [lines]);

  function move(direction: number) {
    const el = scroller.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === "rtl";
    const sample = el.querySelector("a");
    const step = Math.round((sample?.getBoundingClientRect().width ?? 180) + 12);
    const amount = Math.max(step, Math.min(step * 2, Math.round(el.clientWidth * 0.72)));
    scrollByMotion(el, (rtl ? -direction : direction) * amount);
  }

  function onKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    const rtl = document.documentElement.dir === "rtl";
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(rtl ? -1 : 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(rtl ? 1 : -1);
    }
  }

  function pick() {
    window.setTimeout(onPick, 0);
  }

  const onServicesPage = isCurrent(pathname, "/services");

  return (
    <div className="flex items-center gap-2" onKeyDown={onKeyDown}>
      <button
        type="button"
        onClick={() => move(-1)}
        disabled={atStart}
        aria-label={t.a11y.prevServices}
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-[5px] border border-line bg-paper text-navy hover:border-navy disabled:opacity-40"
      >
        <ArrowLeft className="size-4 rtl:rotate-180" strokeWidth={1.5} aria-hidden="true" />
      </button>
      <div className="relative min-w-0 flex-1">
        <div
          ref={scroller}
          className="flex snap-x snap-mandatory gap-1 overflow-x-auto overscroll-x-contain py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {lines.map((service, index) => {
            const active = onServicesPage && hash === service.slug;
            return (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                onClick={() => {
                  setHash(service.slug);
                  pick();
                }}
                aria-current={active ? "location" : undefined}
                className={`inline-flex h-11 shrink-0 snap-start items-center gap-2 rounded-[5px] px-3 text-sm font-medium whitespace-nowrap ${
                  active ? "bg-ice text-navy" : "text-ink hover:bg-ice"
                }`}
              >
                <span className="font-mono text-xs text-navy tabular-nums" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {service.title}
              </Link>
            );
          })}
          <Link
            href="/services"
            onClick={pick}
            aria-current={onServicesPage && hash === "" ? "page" : undefined}
            className={`inline-flex h-11 shrink-0 snap-start items-center rounded-[5px] px-3 text-sm font-medium whitespace-nowrap text-navy hover:bg-ice ${
              onServicesPage && hash === "" ? "bg-ice" : ""
            }`}
          >
            {t.hero.explore}
          </Link>
        </div>
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-1 start-0 w-16 bg-gradient-to-r from-paper to-transparent transition-opacity duration-300 ease-out-expo motion-reduce:transition-none rtl:bg-gradient-to-l ${
            atStart ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-1 end-0 w-16 bg-gradient-to-l from-paper to-transparent transition-opacity duration-300 ease-out-expo motion-reduce:transition-none rtl:bg-gradient-to-r ${
            atEnd ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
      <button
        type="button"
        onClick={() => move(1)}
        disabled={atEnd}
        aria-label={t.a11y.nextServices}
        className="inline-flex size-11 shrink-0 items-center justify-center rounded-[5px] border border-line bg-paper text-navy hover:border-navy disabled:opacity-40"
      >
        <ArrowRight className="size-4 rtl:rotate-180" strokeWidth={1.5} aria-hidden="true" />
      </button>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useCopy();
  const lines = content(locale).services;
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/projects", label: t.nav.projects },
    { href: "/contact", label: t.nav.contact },
  ];

  function closeMenus() {
    setOpen(false);
    setServicesOpen(false);
  }

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname, locale]);

  useEffect(() => {
    if (!open && !servicesOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (servicesOpen) servicesButtonRef.current?.focus();
      setOpen(false);
      setServicesOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) closeMenus();
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, servicesOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md"
    >
      <div className="mx-auto flex w-full min-w-0 max-w-[1400px] items-center gap-2 px-3 py-3 sm:gap-4 sm:px-4 md:px-10">
        <Link href="/" className="min-w-0 shrink rounded-sm" aria-label={t.a11y.home}>
          <Logo />
        </Link>

        <nav className="ms-6 hidden items-center gap-1 lg:flex" aria-label={t.a11y.primary}>
          {links.map((item) =>
            item.href === "/services" ? (
              <button
                key={item.href}
                ref={servicesButtonRef}
                type="button"
                className={`inline-flex h-11 items-center gap-1.5 rounded-[5px] px-3 text-sm transition-colors duration-300 ease-out-expo ${
                  isCurrent(pathname, item.href) || servicesOpen
                    ? "text-orange-deep"
                    : "text-ink hover:bg-ice"
                }`}
                aria-expanded={servicesOpen}
                aria-controls="service-menu"
                onClick={() => setServicesOpen((value) => !value)}
              >
                {item.label}
                <ChevronDown
                  className={`size-4 transition-transform duration-300 ease-out-expo motion-reduce:transition-none ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`inline-flex h-11 items-center rounded-[5px] px-3 text-sm transition-colors duration-300 ease-out-expo ${
                  isCurrent(pathname, item.href)
                    ? "text-orange-deep"
                    : "text-ink hover:bg-ice"
                }`}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="ms-auto flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={`tel:${company.phoneTel}`}
            className="hidden h-11 items-center gap-2 px-2 text-sm text-navy xl:inline-flex"
          >
            <Phone className="size-4" strokeWidth={1.5} aria-hidden="true" />
            <span dir="ltr">{company.phoneDisplay}</span>
          </a>
          <LanguageMenu onOpen={() => setServicesOpen(false)} />
          <Link
            href="/contact"
            className="inline-flex h-11 shrink-0 items-center whitespace-nowrap rounded-[5px] bg-navy px-3 text-sm font-medium uppercase tracking-normal text-white hover:bg-navy-deep sm:px-4"
          >
            <span className="sm:hidden">{t.nav.quoteShort}</span>
            <span className="hidden sm:inline">{t.nav.quote}</span>
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-[5px] border border-line lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="size-5" strokeWidth={1.5} aria-hidden="true" />
            ) : (
              <Menu className="size-5" strokeWidth={1.5} aria-hidden="true" />
            )}
            <span className="sr-only">{open ? t.a11y.closeMenu : t.a11y.openMenu}</span>
          </button>
        </div>
      </div>

      {servicesOpen ? (
        <div
          id="service-menu"
          role="region"
          aria-label={t.a11y.serviceLines}
          className="service-rail-in absolute inset-x-0 top-full z-40 hidden border-b border-line bg-paper lg:block"
        >
          <div className="mx-auto max-w-[1400px] px-4 py-2 md:px-10">
            <ServiceRail lines={lines} onPick={closeMenus} />
          </div>
        </div>
      ) : null}

      {open ? (
        <nav
          id="mobile-nav"
          className="service-rail-in max-h-[calc(100dvh-4.5rem)] overflow-auto border-t border-line bg-paper px-4 py-4 lg:hidden"
          aria-label={t.a11y.mobile}
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex h-12 items-center border-b border-line text-base ${
                isCurrent(pathname, item.href) ? "text-orange-deep" : "text-ink"
              }`}
              aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <p className="mt-4 text-sm font-medium text-ink">{t.a11y.serviceLines}</p>
          <div className="mt-2">
            <ServiceRail lines={lines} onPick={closeMenus} />
          </div>
          <a
            href={`tel:${company.phoneTel}`}
            className="mt-3 flex h-12 items-center font-medium text-navy"
            dir="ltr"
          >
            {company.phoneDisplay}
          </a>
        </nav>
      ) : null}
    </header>
  );
}

export function HeaderFallback() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center px-4 md:px-10">
        <Logo />
      </div>
    </header>
  );
}
