"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Search, Shield, Wrench, X, Phone } from "lucide-react";
import { Photo, ServiceIcon } from "@/components/brand";
import type { Locale } from "@/lib/locale";
import { localePath } from "@/lib/paths";

export type ServiceItem = {
  slug: string;
  title: string;
  icon: string;
  summary: string;
  detail: string;
  image: string;
  alt: string;
  includes: string[];
  leaves: string[];
  featured?: boolean;
  highlight?: boolean;
};

const categoryMap: Record<string, "surveillance" | "infrastructure" | "safety"> = {
  cctv: "surveillance",
  intercom: "surveillance",
  access: "surveillance",
  "home-office": "surveillance",
  cabling: "infrastructure",
  computers: "infrastructure",
  "smart-office": "infrastructure",
  products: "infrastructure",
  "fire-alarm": "safety",
  "fire-safety": "safety",
  maintenance: "safety",
};

export function ServicesCatalog({
  services,
  locale,
  seeScopeText,
  heading,
  catalogSubtitle,
  featuredTitle,
  featuredLede,
  primaryScope01Label,
  primaryScope02Label,
  cctvSubtitle,
  cablingSubtitle,
}: {
  services: ServiceItem[];
  locale: Locale;
  seeScopeText: string;
  heading: string;
  catalogSubtitle: string;
  featuredTitle: string;
  featuredLede: string;
  primaryScope01Label: string;
  primaryScope02Label: string;
  cctvSubtitle: string;
  cablingSubtitle: string;
}) {
  const [activeCategory, setActiveCategory] = useState<"all" | "surveillance" | "infrastructure" | "safety">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputId = useId();
  const rtl = locale === "ar";

  const quickChips = [
    { label: rtl ? "تمديد شبكات" : "Network Cabling", query: rtl ? "شبكات" : "cabling" },
    { label: rtl ? "التركيب والصيانة" : "Installation & Maintenance", query: rtl ? "صيانة" : "maintenance" },
    { label: rtl ? "كاميرات مراقبة" : "CCTV Cameras", query: rtl ? "كاميرات" : "cctv" },
    { label: rtl ? "تحكم بالدخول" : "Access Control", query: rtl ? "بصمة" : "access" },
    { label: rtl ? "إنذار حريق" : "Fire Alarms", query: rtl ? "حريق" : "fire" },
  ];

  const query = searchQuery.trim().toLowerCase();

  const filteredServices = services.filter((s) => {
    const matchesCategory =
      activeCategory === "all" || categoryMap[s.slug] === activeCategory;
    if (!matchesCategory) return false;
    if (!query) return true;
    return (
      s.title.toLowerCase().includes(query) ||
      s.summary.toLowerCase().includes(query) ||
      s.detail.toLowerCase().includes(query) ||
      s.slug.toLowerCase().includes(query) ||
      s.includes.some((inc) => inc.toLowerCase().includes(query))
    );
  });

  const counts = {
    all: services.length,
    surveillance: services.filter((s) => categoryMap[s.slug] === "surveillance").length,
    infrastructure: services.filter((s) => categoryMap[s.slug] === "infrastructure").length,
    safety: services.filter((s) => categoryMap[s.slug] === "safety").length,
  };

  const categories = [
    {
      id: "all" as const,
      label: rtl ? `جميع النطاقات (${counts.all})` : `All Scopes (${counts.all})`,
      icon: Layers,
      count: counts.all,
    },
    {
      id: "surveillance" as const,
      label: rtl ? `المراقبة والإنتركم (${counts.surveillance})` : `Surveillance & Entry (${counts.surveillance})`,
      icon: Shield,
      count: counts.surveillance,
    },
    {
      id: "infrastructure" as const,
      label: rtl ? `الشبكات والبنية التحتية (${counts.infrastructure})` : `Data & Infrastructure (${counts.infrastructure})`,
      icon: Wrench,
      count: counts.infrastructure,
    },
    {
      id: "safety" as const,
      label: rtl ? `الإنذار والسلامة (${counts.safety})` : `Life Safety & Alarms (${counts.safety})`,
      icon: CheckCircle2,
      count: counts.safety,
    },
  ];

  const cctvService = services.find((s) => s.slug === "cctv");
  const cablingService = services.find((s) => s.slug === "cabling");

  function handleCategoryClick(categoryId: "all" | "surveillance" | "infrastructure" | "safety") {
    setActiveCategory(categoryId);
    if (categoryId !== "all") {
      const element = document.getElementById("scopes-catalog");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  function handleChipClick(chipQuery: string) {
    setSearchQuery(chipQuery);
    const element = document.getElementById("scopes-catalog");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function clearAllFilters() {
    setActiveCategory("all");
    setSearchQuery("");
  }

  return (
    <>
      {/* Category Filter & Search Bar */}
      <section className="border-b border-line bg-white py-6 shadow-2xs">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-4 md:px-10">
          {/* Top Row: Search Input & Category Badges */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input Bar */}
            <div className="relative w-full max-w-xl">
              <label htmlFor={searchInputId} className="sr-only">
                {rtl ? "ابحث عن أي نطاق عمل" : "Search any scope"}
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted" />
                <input
                  id={searchInputId}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={
                    rtl
                      ? "ابحث عن نطاق (مثال: تمديد شبكات، صيانة، كاميرات، فايبر)..."
                      : "Search scopes (e.g. network cabling, maintenance, Cat6, CCTV)..."
                  }
                  className="h-11 w-full rounded-full border border-line bg-[#f8fbfe] ps-10 pe-10 text-xs text-ink placeholder:text-muted transition-all duration-200 focus:border-navy focus:bg-white focus:outline-none focus:ring-2 focus:ring-navy/15 md:text-sm"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute end-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted hover:text-ink cursor-pointer"
                  >
                    <X className="size-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Quick Keyword Chips */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-muted">
                {rtl ? "شائع:" : "Popular:"}
              </span>
              {quickChips.map((chip) => (
                <button
                  key={chip.query}
                  type="button"
                  onClick={() => handleChipClick(chip.query)}
                  className={`rounded-full border px-3 py-1 text-xs transition-colors cursor-pointer ${
                    query === chip.query.toLowerCase()
                      ? "border-navy bg-navy text-white"
                      : "border-line bg-white text-muted hover:border-navy hover:text-navy"
                  }`}
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Row: Category Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line/60 pt-4">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryClick(cat.id)}
                    aria-pressed={isSelected}
                    className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-navy text-white shadow-sm ring-2 ring-navy/20"
                        : "border border-line bg-[#f8fbfe] text-muted hover:border-navy hover:text-ink hover:bg-white"
                    }`}
                  >
                    <Icon className="size-3.5" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {(activeCategory !== "all" || searchQuery) && (
              <button
                type="button"
                onClick={clearAllFilters}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-deep hover:underline cursor-pointer"
              >
                <X className="size-3.5" />
                <span>{rtl ? "إعادة تعيين الكل" : "Reset All Filters"}</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Featured Dual Hero Showcases (visible when no search query and matching category) */}
      {!searchQuery && (activeCategory === "all" || activeCategory === "surveillance" || activeCategory === "infrastructure") && (
        <section className="bg-[#f8fbfe] py-12 md:py-16">
          <div className="mx-auto max-w-[1400px] px-4 md:px-10">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">
                  {rtl ? "الركائز الأساسية" : "Foundation Scopes"}
                </span>
                <h2 className="mt-2 text-3xl font-medium tracking-normal text-ink md:text-4xl">
                  {featuredTitle}
                </h2>
              </div>
              <p className="max-w-[45ch] text-sm text-muted">
                {featuredLede}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Featured 1: CCTV */}
              {(activeCategory === "all" || activeCategory === "surveillance") && cctvService && (
                <article className="group relative flex flex-col overflow-hidden rounded-[22px] border border-line bg-white shadow-lift transition-all duration-300 hover:border-orange-deep">
                  <div className="relative aspect-[16/9] overflow-hidden bg-navy-deep">
                    <Photo
                      src="/images/cctv-featured.jpg"
                      alt={cctvService.alt}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent" />
                    <div className="absolute top-4 start-4 rounded-full border border-white/20 bg-navy-deep/80 px-3 py-1 text-xs font-mono uppercase text-orange-soft backdrop-blur-md">
                      {primaryScope01Label}
                    </div>
                    <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between text-white">
                      <span className="text-sm font-medium">{cctvService.title}</span>
                      <span className="text-xs font-mono text-orange-soft">{cctvSubtitle}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex items-center gap-3">
                      <ServiceIcon name="cctv" className="size-6 text-navy" />
                      <h3 className="text-2xl font-medium text-ink">{cctvService.title}</h3>
                    </div>
                    <p className="mt-4 flex-1 text-base leading-relaxed text-muted">{cctvService.summary}</p>
                    <ul className="mt-6 space-y-2.5 border-t border-line/70 pt-6">
                      {cctvService.includes.slice(0, 3).map((inc) => (
                        <li key={inc} className="flex items-start gap-2.5 text-xs text-ink/80 md:text-sm">
                          <CheckCircle2 className="size-4 shrink-0 text-orange-deep mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-4">
                      <Link
                        href={localePath(locale, `/services/${cctvService.slug}`)}
                        className="inline-flex h-11 items-center gap-2 rounded-[5px] bg-navy px-5 text-sm font-medium uppercase tracking-normal text-white transition-colors duration-200 group-hover:bg-navy-deep"
                      >
                        {seeScopeText}
                        <ArrowRight className="size-4 rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                </article>
              )}

              {/* Featured 2: Cabling */}
              {(activeCategory === "all" || activeCategory === "infrastructure") && cablingService && (
                <article className="group relative flex flex-col overflow-hidden rounded-[22px] border border-line bg-white shadow-lift transition-all duration-300 hover:border-orange-deep">
                  <div className="relative aspect-[16/9] overflow-hidden bg-navy-deep">
                    <Photo
                      src="/images/network-switchers.jpg"
                      alt={cablingService.alt}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent" />
                    <div className="absolute top-4 start-4 rounded-full border border-white/20 bg-navy-deep/80 px-3 py-1 text-xs font-mono uppercase text-orange-soft backdrop-blur-md">
                      {primaryScope02Label}
                    </div>
                    <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between text-white">
                      <span className="text-sm font-medium">{cablingService.title}</span>
                      <span className="text-xs font-mono text-orange-soft">{cablingSubtitle}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex items-center gap-3">
                      <ServiceIcon name="cabling" className="size-6 text-navy" />
                      <h3 className="text-2xl font-medium text-ink">{cablingService.title}</h3>
                    </div>
                    <p className="mt-4 flex-1 text-base leading-relaxed text-muted">{cablingService.summary}</p>
                    <ul className="mt-6 space-y-2.5 border-t border-line/70 pt-6">
                      {cablingService.includes.slice(0, 3).map((inc) => (
                        <li key={inc} className="flex items-start gap-2.5 text-xs text-ink/80 md:text-sm">
                          <CheckCircle2 className="size-4 shrink-0 text-orange-deep mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 pt-4">
                      <Link
                        href={localePath(locale, `/services/${cablingService.slug}`)}
                        className="inline-flex h-11 items-center gap-2 rounded-[5px] bg-navy px-5 text-sm font-medium uppercase tracking-normal text-white transition-colors duration-200 group-hover:bg-navy-deep"
                      >
                        {seeScopeText}
                        <ArrowRight className="size-4 rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Complete Dynamic Scopes Grid */}
      <section id="scopes-catalog" className="scroll-mt-20 bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">
              {rtl ? "دليل الخدمات الشامل" : "Comprehensive Scope Catalog"}
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-normal text-ink md:text-4xl">
              {heading}
            </h2>
            <p className="mx-auto mt-4 max-w-[65ch] text-base leading-relaxed text-muted">
              {catalogSubtitle}
            </p>

            {/* Filter / Search Status Badge */}
            {(activeCategory !== "all" || searchQuery) && (
              <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-navy/20 bg-ice px-4 py-1.5 text-xs text-navy font-medium">
                <span>
                  {searchQuery
                    ? rtl
                      ? `نتائج البحث عن "${searchQuery}": وُجد ${filteredServices.length} نطاقاً`
                      : `Search results for "${searchQuery}": Found ${filteredServices.length} scopes`
                    : rtl
                    ? `تصفية نشطة: عرض ${filteredServices.length} من أصل ${services.length} نطاقاً`
                    : `Active Filter: Showing ${filteredServices.length} of ${services.length} scopes`}
                </span>
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="ms-2 inline-flex items-center gap-1 rounded-full bg-navy px-2.5 py-0.5 text-[11px] text-white hover:bg-navy-deep cursor-pointer"
                  aria-label="Clear filter"
                >
                  <X className="size-3" />
                  <span>{rtl ? "عرض الكل" : "Show All"}</span>
                </button>
              </div>
            )}
          </div>

          {filteredServices.length === 0 ? (
            <div className="mx-auto mt-12 max-w-lg rounded-[22px] border border-line bg-[#f8fbfe] p-8 text-center shadow-sm">
              <Search className="mx-auto size-8 text-muted" />
              <h3 className="mt-3 text-lg font-medium text-ink">
                {rtl ? "لم يتم العثور على نطاق مطابق" : "No Matching Scope Found"}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                {rtl
                  ? `لم نجد نطاقاً يطابق "${searchQuery}". تواصل مع مكتب الملز وسنحدد لك الحل الهندسي المطلوب.`
                  : `We could not find an exact scope matching "${searchQuery}". Contact the Malaz desk for custom site surveys.`}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="rounded-[5px] border border-line bg-white px-4 py-2 text-xs font-medium text-ink hover:border-navy cursor-pointer"
                >
                  {rtl ? "مسح البحث" : "Clear Search"}
                </button>
                <Link
                  href={localePath(locale, "/contact")}
                  className="inline-flex items-center gap-2 rounded-[5px] bg-navy px-4 py-2 text-xs font-medium text-white hover:bg-navy-deep"
                >
                  <Phone className="size-3.5" />
                  <span>{rtl ? "طلب معاينة مخصصة" : "Request Custom Survey"}</span>
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service, index) => (
                <Link
                  key={service.slug}
                  href={localePath(locale, `/services/${service.slug}`)}
                  className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-[#f8fbfe] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-deep hover:bg-white hover:shadow-lift"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-ice">
                    <Photo
                      src={service.image}
                      alt={service.alt}
                      sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white">
                      <span className="font-mono text-xs text-orange-soft">
                        {String(index + 1).padStart(2, "0")} / {String(filteredServices.length).padStart(2, "0")}
                      </span>
                      <ServiceIcon name={service.icon} className="size-5 text-white" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-medium tracking-normal text-ink group-hover:text-navy">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs font-mono uppercase tracking-wider text-orange-deep">
                      {service.detail}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
                      {service.summary}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-line/60 pt-4">
                      {service.includes.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-ink/80">
                          <CheckCircle2 className="size-3.5 shrink-0 text-orange-deep mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4 text-xs font-medium uppercase tracking-wider text-navy group-hover:text-orange-deep">
                      <span>{seeScopeText}</span>
                      <ArrowRight className="size-4 rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
