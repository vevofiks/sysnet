import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ShieldCheck, MapPin, Phone, Clock, FileCheck } from "lucide-react";
import { PageHero, Photo } from "@/components/brand";
import { BrandLoop } from "@/components/brand-loop";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DocumentTitle } from "@/components/locale";
import { JsonLd } from "@/components/json-ld";
import { copy } from "@/lib/copy";
import { parseLocale } from "@/lib/locale";
import { localePath } from "@/lib/paths";
import { aboutPageGraph } from "@/lib/schema";
import { documentTitle, pageMeta } from "@/lib/seo";
import { company } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const t = copy[locale];
  return pageMeta({
    locale,
    path: "/about",
    title: t.meta.aboutTitle,
    description: t.meta.aboutDescription,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = parseLocale((await params).locale);
  const page = copy[locale];
  const t = page.about;
  const rtl = locale === "ar";

  const pillars = [
    {
      num: "01",
      title: rtl ? "مخطط معتمد قبل الحفر والطلب" : "Marked Drawings Before Ordering",
      desc: rtl
        ? "نعاين الموقع ونحدد كل زاوية ونقطة بيانات على المخطط قبل طلب أي أجهزة أو حفر أي جدار."
        : "We survey the site and mark each camera angle and cable run on the floor plan before drilling begins.",
    },
    {
      num: "02",
      title: rtl ? "كابينة موحدة تمنع تضارب المقاولين" : "One Consolidated Cabinet",
      desc: rtl
        ? "نجمع الكاميرات والإنذار والشبكة في كابينة واحدة منظمة تمنع تهرب المقاولين من المسؤولية."
        : "Cameras, alarms, and data patch panels terminate in one labeled rack to eliminate multi-vendor finger-pointing.",
    },
    {
      num: "03",
      title: rtl ? "تسليم رسمي بكلمات المرور وورقة الفحص" : "Complete Documented Handover",
      desc: rtl
        ? "نسلمك ورقة فحص مختبرة، وكلمات مرور المشرف، وخريطة المنافذ دون أي غموض."
        : "We hand over verified test sheets, administrator passwords, and port maps with total transparency.",
    },
    {
      num: "04",
      title: rtl ? "مكتب محلي في الملز جاهز للمعاينة والصيانة" : "Local Malaz Operations Desk",
      desc: rtl
        ? "فريقنا ينطلق من الملز لتغطية أحياء الرياض والدمام مع سرعة الرد والتنفيذ في اليوم نفسه."
        : "Our crews deploy directly from Malaz to serve Riyadh and Dammam with reliable same-day dispatch.",
    },
  ];

  const galleryItems = [
    {
      image: "/images/maintenance2.jpg",
      alt: t.techAlt,
      tag: rtl ? "صيانة الأنظمة" : "Systems Maintenance",
      title: rtl ? "الصيانة الدورية وفحص الكبائن" : "Routine Maintenance & Cabinet Diagnostics",
      desc: rtl
        ? "فنيون متمرسون يفحصون التوصيلات ومسارات الكيابل لضمان استقرار الشبكة."
        : "Expert technicians servicing network racks and diagnosing line continuity.",
    },
    {
      image: "/images/network-switchers.jpg",
      alt: rtl ? "كيابل شبكة منظمة" : "Organized Cat6 cabling",
      tag: rtl ? "شبكات وكبائن" : "Structured Data",
      title: rtl ? "تنظيم وترقيم كبائن الشبكة" : "Structured Cabling & Numbered Racks",
      desc: rtl
        ? "ترقيم دقيق لكلا طرفي الكيبل مع تسليم خريطة المنافذ."
        : "Numbered runs at both ends with verified port mapping.",
    },
    {
      image: "/images/united-security-cameras.jpg",
      alt: rtl ? "كاميرات مراقبة خارجية" : "Outdoor CCTV cameras",
      tag: rtl ? "مراقبة بصرية" : "Surveillance",
      title: rtl ? "تحديد زوايا الكاميرات والعدسات" : "Calibrated Angles & Lens Selection",
      desc: rtl
        ? "اختيار العدسة الملائمة للمستودع أو البوابة أو الممر."
        : "Right optics chosen specifically for gates, docks, or corridors.",
    },
    {
      image: "/images/biometric-scan.jpg",
      alt: rtl ? "قفل ذكي وتحكم بالدخول" : "Smart lock and access control",
      tag: rtl ? "تحكم بالدخول" : "Access Control",
      title: rtl ? "أنظمة التحكم في الدخول والتسليم" : "Access Control & Admin Handover",
      desc: rtl
        ? "أجهزة قراءة مع تسليم كامل كلمات المرور لإدارة المبنى."
        : "Biometric readers configured with full admin credentials handed over.",
    },
  ];

  return (
    <>
      <DocumentTitle title={documentTitle(page.meta.aboutTitle, page.meta.brand)} />
      <JsonLd data={aboutPageGraph(locale)} />
      <Breadcrumbs
        locale={locale}
        label={page.a11y.breadcrumb}
        items={[{ name: page.nav.home, path: "/" }, { name: page.nav.about }]}
      />

      <PageHero
        title={t.title}
        lede={t.lede}
        badge={rtl ? "نبذة عن سيسنت · شركة آدم العربية" : "Company Profile · Adam Al Arabia Company"}
        image="/images/riyadh.jpg"
        stats={[
          { label: rtl ? "المقر الرئيسي" : "Headquarters", value: rtl ? "الملز، الرياض" : "Malaz, Riyadh" },
          { label: rtl ? "ساعات المكتب" : "Operating Desk", value: rtl ? "السبت–الخميس ٩–١٨" : "Sat–Thu, 9:00–18:00" },
          { label: rtl ? "نطاق التغطية" : "Service Radius", value: rtl ? "الرياض والدمام" : "Riyadh & Dammam" },
        ]}
      />

      {/* Rooted in Riyadh Overview */}
      <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-12 md:grid-cols-2 md:px-10 md:py-16">
        <div className="group relative min-h-[460px] overflow-hidden rounded-[22px] border border-line bg-white shadow-lift">
          <Photo
            src="/images/riyadh.jpg"
            alt={t.skylineAlt}
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
          <div className="absolute bottom-6 start-6 end-6 rounded-[14px] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
            <div className="flex items-center gap-2 text-orange-soft">
              <MapPin className="size-4 shrink-0" />
              <span className="text-xs font-medium uppercase tracking-wider">
                {rtl ? "مقر العمليات والمكتب الميداني" : "Operations Hub & Field Desk"}
              </span>
            </div>
            <p className="mt-2 text-base font-medium">
              {rtl ? "حي الملز، الرياض، المملكة العربية السعودية" : "Malaz District, Riyadh, Saudi Arabia"}
            </p>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-deep/20 bg-orange-soft/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-orange-deep">
            <Building2 className="size-3.5" />
            {rtl ? "شركة آدم العربية" : "Adam Al Arabia Company"}
          </div>
          <h2 className="mt-4 text-3xl font-medium tracking-normal text-ink md:text-4xl">
            {t.heading}
          </h2>
          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{t.p1}</p>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{t.p2}</p>

          <div className="mt-8 rounded-[18px] border border-line bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium uppercase tracking-wider text-navy">
              {rtl ? "بيانات المنشأة والتواصل" : "Operational Credentials"}
            </h3>
            <dl className="mt-4 divide-y divide-line/70">
              {t.rows.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 py-3">
                  <dt className="flex items-center gap-2 text-sm text-muted">
                    {label.includes("Desk") || label.includes("مكتب") || label.includes("المكتب") ? (
                      <MapPin className="size-4 text-orange-deep" />
                    ) : label.includes("Hours") || label.includes("ساعات") ? (
                      <Clock className="size-4 text-orange-deep" />
                    ) : (
                      <Building2 className="size-4 text-orange-deep" />
                    )}
                    {label}
                  </dt>
                  <dd
                    className="text-end text-sm font-medium text-ink"
                    dir={value.includes("@") || value.includes("+") ? "ltr" : undefined}
                  >
                    {value}
                  </dd>
                </div>
              ))}
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="flex items-center gap-2 text-sm text-muted">
                  <Phone className="size-4 text-orange-deep" />
                  {rtl ? "الهاتف المباشر" : "Direct Telephone"}
                </dt>
                <dd className="text-end text-sm font-medium text-navy" dir="ltr">
                  <a href={`tel:${company.phoneTel}`} className="hover:underline">
                    {company.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Field Operations & Real Workflow Gallery */}
      <section className="border-t border-line bg-[#f8fbfe] py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-ice px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy">
                <FileCheck className="size-3.5" />
                {rtl ? "معايير التنفيذ الميداني" : "Field Standards in Practice"}
              </div>
              <h2 className="mt-3 text-3xl font-medium tracking-normal text-ink md:text-4xl">
                {t.workTitle}
              </h2>
            </div>
            <p className="max-w-[48ch] text-sm leading-relaxed text-muted md:text-base">
              {rtl
                ? "صور واقعية من تنفيذ الفنيين في الميدان: تأسيس، ترقيم، واختبار عملي قبل التسليم."
                : "Authentic views of our technicians in the field: termination, labeling, and proving on site."}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
            {galleryItems.map((item) => (
              <article
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-[18px] border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-deep/50 hover:shadow-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-ice">
                  <Photo
                    src={item.image}
                    alt={item.alt}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                  />
                  <div className="absolute start-3 top-3 rounded-full bg-navy/85 px-2.5 py-0.5 text-[11px] font-medium text-white backdrop-blur-sm">
                    {item.tag}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-base font-medium text-ink">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Four Operational Pillars */}
      <section className="border-t border-line bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">
              {rtl ? "ضمانات التنفيذ" : "Execution Commitments"}
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-normal text-ink md:text-4xl">
              {rtl ? "أربعة مبادئ تحكم كل مشروع في الرياض" : "Four Disciplines on Every Riyadh Project"}
            </h2>
            <p className="mx-auto mt-4 max-w-[65ch] text-base leading-relaxed text-muted">
              {rtl
                ? "من المستودع إلى الفيلا، نطبق معايير هندسية تضمن استقرار النظام وسهولة صيانته مستقبلاً."
                : "From logistics yards to residential compounds, we adhere to strict engineering disciplines."}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="group relative flex flex-col rounded-[20px] border border-line bg-[#f8fbfe] p-6 transition-colors duration-300 hover:border-navy hover:bg-white"
              >
                <span className="font-mono text-sm font-semibold text-orange-deep">{pillar.num}</span>
                <h3 className="mt-4 text-lg font-medium text-ink">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.desc}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-navy">
                  <ShieldCheck className="size-4 text-orange-deep" />
                  <span>{rtl ? "معتمد في المعاينة" : "Verified Standard"}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Workflow Detail Section */}
      <section className="border-t border-line bg-[#f0f6fa] py-12 md:py-16">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy">
              <CheckCircle2 className="size-3.5 text-orange-deep" />
              {rtl ? "بروتوكول المعاينة والتسليم" : "Survey to Handover Protocol"}
            </div>
            <h2 className="text-3xl font-medium tracking-normal text-ink md:text-4xl">
              {rtl ? "ما الذي يقدمه فنيونا في موقعك بالضبط؟" : "What Our Technicians Deliver on Site"}
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {t.work.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="pt-2">
              <Link
                href={localePath(locale, "/contact")}
                className="inline-flex h-12 items-center gap-2 rounded-[5px] bg-navy px-6 text-sm font-medium uppercase tracking-normal text-white transition-colors duration-200 hover:bg-navy-deep"
              >
                {rtl ? "طلب معاينة ميدانية" : "Request a Site Survey"}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[22px] border border-line bg-white shadow-lift">
            <Photo
              src="/images/maintenance3.jpg"
              alt={rtl ? "مهندس أنظمة يفحص كابينة التوزيع والتحكم" : "Systems engineer inspecting main wiring and distribution panel"}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 start-6 end-6 rounded-[14px] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
              <p className="text-xs font-mono uppercase tracking-widest text-orange-soft">
                {rtl ? "مسؤولية فنية كاملة" : "Complete Accountability"}
              </p>
              <p className="mt-1 text-sm font-medium">
                {rtl
                  ? "تسليم كلمات المرور، وورقة الفحص، والمخطط النهائي لإدارة المبنى مباشرة."
                  : "Passwords, test sheets, and finalized marked plans handed directly to building management."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Loop */}
      <section className="overflow-hidden border-t border-line bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 text-center md:px-10">
          <p className="font-mono text-xs uppercase tracking-widest text-orange-deep">
            {page.supply.label}
          </p>
        </div>
        <div className="pt-6">
          <BrandLoop label={page.supply.label} rtl={rtl} />
        </div>
      </section>

      {/* Direct Booking CTA */}
      <section className="relative overflow-hidden bg-navy text-ice">
        <div className="absolute inset-0">
          <Photo src="/images/workstations.jpg" alt="" className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy to-navy-deep/90" />
        </div>
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-20">
          <div>
            <h2 className="max-w-[18ch] text-3xl font-medium leading-[1.1] tracking-normal text-white md:text-5xl">
              {page.book.title}
            </h2>
            <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-ice/85">{page.book.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex h-12 items-center justify-center rounded-[5px] bg-paper px-6 text-sm font-medium uppercase tracking-normal text-navy hover:bg-ice"
            >
              {page.book.survey}
            </Link>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex h-12 items-center justify-center rounded-[5px] border border-white/50 px-6 text-sm font-medium uppercase tracking-normal text-white hover:bg-white/10"
            >
              {page.book.call}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
