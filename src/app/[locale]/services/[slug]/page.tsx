import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Phone, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Photo, ServiceIcon } from "@/components/brand";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DocumentTitle } from "@/components/locale";
import { JsonLd } from "@/components/json-ld";
import { ServiceAreas } from "@/components/service-areas";
import { content } from "@/lib/content";
import { guideFor } from "@/lib/guides";
import { parseLocale } from "@/lib/locale";
import { localePath } from "@/lib/paths";
import { serviceDetailGraph } from "@/lib/schema";
import { documentTitle, pageMeta } from "@/lib/seo";
import { company, services as catalog } from "@/lib/site";
import { getServiceDetailData } from "@/sanity/queries";

type Params = { locale: string; slug: string };

const secondaryImages: Record<string, { image: string; labelEn: string; labelAr: string }> = {
  cctv: {
    image: "/images/united-security-cameras.jpg",
    labelEn: "Multi-Angle Field Surveillance & High-Pole Mounts",
    labelAr: "مراقبة ميدانية متعددة الزوايا وأعمدة تثبيت متخصصة",
  },
  intercom: {
    image: "/images/villa.jpg",
    labelEn: "Gate Station to Indoor Monitor Connection",
    labelAr: "ربط محطة البوابة بالشاشة الداخلية",
  },
  cabling: {
    image: "/images/network-switchers.jpg",
    labelEn: "Main Distribution Frame & Numbered Patch Panels",
    labelAr: "كابينة التوزيع الرئيسية ومنافذ الباتش المرقمة",
  },
  computers: {
    image: "/images/desk.jpg",
    labelEn: "Workstation Docks & Desk Connectivity",
    labelAr: "قواعد التوصيل وشبكات مكاتب العمل",
  },
  access: {
    image: "/images/biometric-scan.jpg",
    labelEn: "Secured Staff Corridors & Biometric Terminals",
    labelAr: "أجهزة قراءة البصمة والبطاقات الذكية لممرات الموظفين",
  },
  "fire-alarm": {
    image: "/images/fire-alarm.jpg",
    labelEn: "Addressable Fire Detectors & Visual Alarm Strobes",
    labelAr: "كواشف الحريق المعنونة ومؤشرات الإنذار الضوئية",
  },
  "fire-safety": {
    image: "/images/fire-protection.jpg",
    labelEn: "Extinguisher Schedules & Fire Hose Cabinets",
    labelAr: "كبائن خراطيم الإطفاء وجدول الطفايات المعتمد",
  },
  "home-office": {
    image: "/images/villa.jpg",
    labelEn: "Unified Residential CCTV & Intercom",
    labelAr: "تكامل كاميرات وإنتركم الفلل والمكاتب",
  },
  "smart-office": {
    image: "/images/data-center.jpg",
    labelEn: "Data Center Infrastructure & Central Rack Management",
    labelAr: "بنية مراكز البيانات وإدارة الكبائن المركزية",
  },
  products: {
    image: "/images/product-sales-pro.jpg",
    labelEn: "Hardware Supply with Technical Data Sheets",
    labelAr: "توريد الأجهزة مع جداول المواصفات",
  },
  maintenance: {
    image: "/images/maintenance2.jpg",
    labelEn: "System Diagnosis & Circuit Line Testing",
    labelAr: "فحص الدوائر الكهربائية واختبار استقرار التوصيلات",
  },
};

export function generateStaticParams() {
  return catalog.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = parseLocale(localeParam);
  const service = content(locale).services.find((item) => item.slug === slug);
  const guide = guideFor(locale, slug);
  if (!service || !guide) return {};

  const sanityService = await getServiceDetailData(slug, locale);
  const title = sanityService?.metaTitle || guide.seoTitle;
  const description = sanityService?.metaDescription || guide.seoDescription;

  return pageMeta({
    locale,
    path: `/services/${slug}`,
    title,
    description,
    alt: sanityService?.alt || service.alt,
  });
}

export default function ServicePage({ params }: { params: Promise<Params> }) {
  return (
    <Suspense fallback={<div className="min-h-[40vh]" />}>
      <ServiceBody params={params} />
    </Suspense>
  );
}

async function ServiceBody({ params }: { params: Promise<Params> }) {
  const { slug, locale: localeParam } = await params;
  const locale = parseLocale(localeParam);
  const { t, services } = content(locale);
  const guide = guideFor(locale, slug);
  const index = services.findIndex((item) => item.slug === slug);
  const service = services[index];
  if (!service || !guide) notFound();

  const sanityService = await getServiceDetailData(slug, locale);
  const serviceHeading = sanityService?.heading || guide.h1;
  const serviceTitle = sanityService?.title || service.title;
  const serviceSummary = sanityService?.summary || service.summary;
  const serviceDetail = sanityService?.detail || service.detail;
  const serviceImage = sanityService?.imageUrl || service.image;
  const serviceAlt = sanityService?.alt || service.alt;

  const rtl = locale === "ar";
  const scopeBadge =
    sanityService?.scopeNumber ||
    (rtl
      ? `النطاق ${String(index + 1).padStart(2, "0")} / ${String(services.length).padStart(2, "0")}`
      : `Scope ${String(index + 1).padStart(2, "0")} / ${String(services.length).padStart(2, "0")}`);
  const features = sanityService?.features && sanityService.features.length > 0 ? sanityService.features : [];

  const subheroBadge = sanityService?.subheroBadge || serviceTitle;
  const btnQuoteText = sanityService?.btnQuoteText || t.book.survey;
  const btnCallText = sanityService?.btnCallText || t.book.call;
  const imageLabel = sanityService?.imageLabel || serviceTitle;
  const imageBadge = sanityService?.imageBadge || (rtl ? "تم الفحص في الموقع" : "Verified on Site");

  const journeyBadge = sanityService?.journeyBadge || (rtl ? "مراحل التنفيذ" : "Execution Journey");
  const journeyTitle =
    sanityService?.journeyTitle || (rtl ? "كيف ننفذ هذا النطاق من المعاينة حتى التسليم؟" : "How We Survey & Install This Scope");

  const staticWorkflowSteps = [
    {
      num: "01",
      title: rtl ? "معاينة وتحديد المخطط" : "Floor Plan Marking",
      desc: rtl
        ? "معاينة ميدانية وتحديد زوايا الكاميرات ومسارات الكيابل على المخطط قبل الحفر."
        : "Every view and cable path is marked on the floor plan before a bracket is drilled.",
    },
    {
      num: "02",
      title: rtl ? "تمديد المواسير والكيابل" : "Conduit & Cable Routing",
      desc: rtl
        ? "تمديد الكيابل في مواسير مخصصة وترقيم كلا الطرفين بدقة هندسية."
        : "Clean conduit routing with every single run numbered at both termination ends.",
    },
    {
      num: "03",
      title: rtl ? "تركيب وضبط الأجهزة" : "Hardware & Lens Setup",
      desc: rtl
        ? "تثبيت الأجهزة واختيار العدسات المناسبة وتوصيلها في الكابينة المشتركة."
        : "Mounting the right optics for each room and landing them in the common cabinet.",
    },
    {
      num: "04",
      title: rtl ? "فحص حي وتسليم رسمي" : "Live Proof & Handover",
      desc: rtl
        ? "اختبار التسجيل أو الإشارة وتسليم كلمات المرور وخريطة المنافذ لإدارة المبنى."
        : "Live playback verification and full handover of admin passwords and port maps.",
    },
  ];

  const steps =
    sanityService?.workflowSteps && sanityService.workflowSteps.length > 0
      ? sanityService.workflowSteps
      : staticWorkflowSteps;

  const sections =
    sanityService?.sections && sanityService.sections.length > 0 ? sanityService.sections : guide.sections;

  const others = services.filter((item) => item.slug !== service.slug);
  const relatedScopes = services.filter((item) => guide.related.includes(item.slug));
  const crossLinkedServices = relatedScopes.length > 0 ? relatedScopes : others.slice(0, 4);

  const secondaryFallback = secondaryImages[slug] ?? {
    image: "/images/maintenance2.jpg",
    labelEn: "Certified Field Installation Standards",
    labelAr: "معايير التركيب الميداني المعتمدة",
  };

  const secondaryBadge = sanityService?.secondaryBadge || (rtl ? "معايير التنفيذ في الرياض" : "Riyadh Site Standard");
  const secondaryHeading =
    sanityService?.secondaryHeading || (rtl ? "أجهزة موثوقة مع ضمان التسليم الفعلي" : "Reliable Hardware with Proven Handover");
  const secondaryBody =
    sanityService?.secondaryBody ||
    (rtl
      ? "لا نترك أجهزة غير معنونة أو أسلاكاً مجهولة المصدر. يلتزم فنيونا بوضع ملصقات تعريفية لكل نقطة وتدوين كلمات المرور لإدارة الموقع مباشرة."
      : "We never leave unlabeled hardware or unidentified cables. Our technicians label every channel and provide master credentials directly to site management.");
  const secondaryImage = sanityService?.secondaryImageUrl || secondaryFallback.image;
  const secondaryImageLabel =
    sanityService?.secondaryImageLabel || (rtl ? secondaryFallback.labelAr : secondaryFallback.labelEn);
  const secondaryCtaText = sanityService?.secondaryCtaText || t.book.survey;

  const includesTitle = sanityService?.includesTitle || t.servicesPage.includes;
  const includesList =
    sanityService?.includes && sanityService.includes.length > 0 ? sanityService.includes : service.includes;
  const leavesTitle = sanityService?.leavesTitle || t.servicesPage.leaves;
  const leavesList =
    sanityService?.leaves && sanityService.leaves.length > 0 ? sanityService.leaves : service.leaves;

  const faqBadge = sanityService?.faqBadge || "FAQ";
  const faqTitle = sanityService?.faqTitle || t.faqTitle;
  const faqList = sanityService?.faqsList && sanityService.faqsList.length > 0 ? sanityService.faqsList : guide.faq;

  return (
    <>
      <DocumentTitle title={documentTitle(sanityService?.metaTitle || guide.seoTitle, t.meta.brand)} />
      <JsonLd
        data={serviceDetailGraph({
          locale,
          slug,
          name: serviceTitle,
          description: sanityService?.metaDescription || guide.seoDescription,
          guide,
        })}
      />
      <Breadcrumbs
        locale={locale}
        label={t.a11y.breadcrumb}
        items={[
          { name: t.nav.home, path: "/" },
          { name: t.nav.services, path: "/services" },
          { name: serviceTitle },
        ]}
      />

      {/* Hero Header */}
      <header className="relative overflow-hidden border-b border-white/10 bg-navy text-ice">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy to-navy-deep/90" />
        <div className="relative mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-8 md:flex-row md:items-end md:justify-between md:gap-12 md:px-10 md:py-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-orange-soft">
              <span>{scopeBadge}</span>
            </div>
            <h1 className="mt-3 max-w-[22ch] text-3xl font-medium leading-[1.1] tracking-normal text-white md:text-4xl lg:text-5xl">
              {serviceHeading}
            </h1>
          </div>
          <div className="max-w-[44ch] space-y-2 md:pb-2">
            <p className="text-base leading-relaxed text-ice/90 md:text-lg">
              {serviceSummary}
            </p>
            {features.length > 0 && (
              <p className="text-xs font-mono uppercase tracking-wider text-orange-soft/90">
                <span className="text-white/60">{rtl ? "الاستخدامات: " : "Features: "}</span>
                {features.join(", ")}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Main Scope Split */}
      <article className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-12 md:grid-cols-2 md:gap-14 md:px-10 md:py-16">
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-navy/15 bg-ice px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-navy">
            <ServiceIcon name={service.icon} className="size-4 text-orange-deep" />
            <span>{subheroBadge}</span>
          </div>
          <h2 className="mt-4 text-2xl font-medium leading-snug text-ink md:text-3xl">
            {serviceDetail}
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex h-12 items-center justify-center rounded-[5px] bg-navy px-6 text-sm font-medium uppercase tracking-normal text-white transition-colors hover:bg-navy-deep"
            >
              {btnQuoteText}
            </Link>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[5px] border border-line bg-white px-6 text-sm font-medium uppercase tracking-normal text-ink transition-colors hover:border-navy"
            >
              <Phone className="size-4 text-orange-deep" />
              {btnCallText}
            </a>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-[22px] border border-line bg-[#f8fbfe] shadow-lift">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-ice">
            <Photo
              src={serviceImage}
              alt={serviceAlt}
              sizes="(min-width: 768px) 46vw, 100vw"
              priority
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            />
          </div>
          <div className="border-t border-line bg-white p-4">
            <div className="flex items-center justify-between text-xs text-muted">
              <span className="font-medium text-navy">{imageLabel}</span>
              <span className="inline-flex items-center gap-1 text-orange-deep font-mono">
                <ShieldCheck className="size-3.5" />
                {imageBadge}
              </span>
            </div>
          </div>
        </div>
      </article>

      {/* 4-Step Installation Journey */}
      <section className="border-t border-line bg-[#f8fbfe] py-10 md:py-14">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">
              {journeyBadge}
            </span>
            <h2 className="mt-2 text-2xl font-medium tracking-normal text-ink md:text-3xl">
              {journeyTitle}
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.num || step.title}
                className="relative flex flex-col rounded-[18px] border border-line bg-white p-6 shadow-sm"
              >
                <span className="font-mono text-sm font-semibold text-orange-deep">{step.num}</span>
                <h3 className="mt-3 text-lg font-medium text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Guidance Sections (Content Grid) */}
      <div className="border-t border-line bg-white">
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
          {sections.map((section, sectionIdx) => {
            const lastRowStart = sections.length - (sections.length % 2 === 0 ? 2 : 1);
            const bodies = Array.isArray(section.body) ? section.body : [section.body].filter(Boolean);
            return (
              <section
                key={section.heading || sectionIdx}
                className={`border-line px-4 py-12 md:px-10 md:py-16 ${
                  sectionIdx % 2 === 0 ? "md:border-e" : ""
                } ${sectionIdx < sections.length - 1 ? "border-b" : ""} ${
                  sectionIdx >= lastRowStart ? "md:border-b-0" : ""
                }`}
              >
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-orange-deep uppercase tracking-wider">
                  <span>{rtl ? `القسم 0${sectionIdx + 1}` : `Section 0${sectionIdx + 1}`}</span>
                </div>
                <h2 className="mt-2 text-2xl font-medium leading-[1.15] tracking-normal text-ink md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
                  {bodies.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Secondary Contextual Photo Section */}
      <section className="border-t border-line bg-[#f0f6fa] py-10 md:py-14">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <div className="relative min-h-[360px] overflow-hidden rounded-[22px] border border-line bg-white shadow-lift">
            <Photo
              src={secondaryImage}
              alt={secondaryImageLabel}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 start-5 end-5 rounded-[12px] border border-white/20 bg-white/10 p-4 text-white backdrop-blur-md">
              <p className="text-xs font-mono uppercase tracking-wider text-orange-soft">
                {secondaryBadge}
              </p>
              <p className="mt-1 text-sm font-medium">
                {secondaryImageLabel}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">
              {rtl ? "التزام الجودة والتسليم" : "Quality Commitment"}
            </span>
            <h2 className="text-3xl font-medium tracking-normal text-ink md:text-4xl">
              {secondaryHeading}
            </h2>
            <p className="text-base leading-relaxed text-muted">
              {secondaryBody}
            </p>
            <div className="pt-2">
              <Link
                href={localePath(locale, "/contact")}
                className="inline-flex h-11 items-center gap-2 rounded-[5px] bg-navy px-5 text-sm font-medium uppercase tracking-normal text-white hover:bg-navy-deep"
              >
                {secondaryCtaText}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusions & Handover (Side-by-Side Cards) */}
      <section className="border-t border-line bg-white py-10 md:py-14">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Includes Card */}
            <div className="rounded-[22px] border border-line bg-[#f8fbfe] p-6 md:p-8">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="size-5 text-orange-deep" />
                <h2 className="text-2xl font-medium tracking-normal text-ink">
                  {includesTitle}
                </h2>
              </div>
              <ul className="mt-6 space-y-3.5">
                {includesList.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-sm leading-relaxed text-ink/85">
                    <span className="font-mono text-xs font-semibold text-orange-deep mt-0.5">
                      {String(itemIdx + 1).padStart(2, "0")}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leaves Card */}
            <div className="rounded-[22px] border border-line bg-[#f8fbfe] p-6 md:p-8">
              <div className="flex items-center gap-2.5">
                <FileText className="size-5 text-navy" />
                <h2 className="text-2xl font-medium tracking-normal text-ink">
                  {leavesTitle}
                </h2>
              </div>
              <ul className="mt-6 space-y-3.5">
                {leavesList.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-sm leading-relaxed text-ink/85">
                    <Check className="size-4 text-navy mt-0.5 shrink-0" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="border-t border-line bg-[#f8fbfe]">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-10 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">{faqBadge}</span>
            <h2 className="mt-2 text-3xl font-medium tracking-normal text-ink md:text-4xl">
              {faqTitle}
            </h2>
          </div>
          <div className="space-y-2">
            {faqList.map((item, idx) => (
              <details
                key={item.q || idx}
                className="group rounded-[14px] border border-line bg-white px-5 py-2 shadow-2xs"
              >
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-2 text-start text-base font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-lg text-orange-deep transition-transform duration-300 ease-out-expo group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-[65ch] pb-4 pt-1 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas locale={locale} />

      {/* Visual Related Scopes Grid */}
      <section className="border-t border-line bg-white py-10 md:py-14">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">
                {rtl ? "نطاقات أخرى متكاملة" : "Complementary Scopes"}
              </span>
              <h2 className="mt-2 text-2xl font-medium tracking-normal text-ink md:text-3xl">
                {t.servicesPage.other}
              </h2>
            </div>
            <Link
              href={localePath(locale, "/services")}
              className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-navy hover:underline"
            >
              {t.priced.allLines}
              <ArrowRight className="size-3.5 rtl:rotate-180" />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {crossLinkedServices.map((item) => (
              <Link
                key={item.slug}
                href={localePath(locale, `/services/${item.slug}`)}
                className="group flex flex-col overflow-hidden rounded-[18px] border border-line bg-[#f8fbfe] transition-all duration-300 hover:-translate-y-1 hover:border-orange-deep hover:bg-white hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ice">
                  <Photo
                    src={item.image}
                    alt={item.alt}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 start-2 end-2 text-white">
                    <ServiceIcon name={item.icon} className="size-4 text-white" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="text-base font-medium text-ink group-hover:text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-1 flex-1 text-xs leading-relaxed text-muted line-clamp-2">
                    {item.summary}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3 text-xs font-medium text-navy group-hover:text-orange-deep">
                    <span>{t.priced.seeScope}</span>
                    <ArrowRight className="size-3.5 rtl:rotate-180" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
