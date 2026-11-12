import type { Metadata } from "next";
import Link from "next/link";
import { Layers, Phone } from "lucide-react";
import { PageHero, Photo } from "@/components/brand";
import { BrandLoop } from "@/components/brand-loop";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DocumentTitle } from "@/components/locale";
import { JsonLd } from "@/components/json-ld";
import { ServicesCatalog } from "@/components/services-catalog";
import { content } from "@/lib/content";
import { copy } from "@/lib/copy";
import { parseLocale } from "@/lib/locale";
import { localePath } from "@/lib/paths";
import { servicesCatalogGraph } from "@/lib/schema";
import { documentTitle, pageMeta } from "@/lib/seo";
import { company } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const t = copy[locale].meta;
  return pageMeta({
    locale,
    path: "/services",
    title: t.servicesTitle,
    description: t.servicesDescription,
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = parseLocale((await params).locale);
  const { t, services } = content(locale);
  const rtl = locale === "ar";

  return (
    <>
      <DocumentTitle title={documentTitle(t.meta.servicesTitle, t.meta.brand)} />
      <JsonLd data={servicesCatalogGraph(locale)} />
      <Breadcrumbs
        locale={locale}
        label={t.a11y.breadcrumb}
        items={[{ name: t.nav.home, path: "/" }, { name: t.nav.services }]}
      />

      <PageHero
        title={t.servicesPage.title}
        lede={t.servicesPage.lede}
        badge={rtl ? "١١ نطاقاً هندسياً معتمداً" : "11 Certified Installation Lines"}
        image="/images/network-switchers.jpg"
        stats={[
          { label: rtl ? "نطاقات العمل" : "Installation Lines", value: rtl ? "١١ تخصصاً متكاملاً" : "11 Complete Scopes" },
          { label: rtl ? "نموذج التعاقد" : "Contractor Model", value: rtl ? "فريق عمل موحد" : "Single Unified Crew" },
          { label: rtl ? "الضمان والتسليم" : "Handover Quality", value: rtl ? "ورقة فحص وكلمات مرور" : "Tested & Documented" },
        ]}
      />

      {/* Interactive Catalog with Filter Bar */}
      <ServicesCatalog
        services={services}
        locale={locale}
        seeScopeText={t.priced.seeScope}
        heading={rtl ? "جميع خطوط الخدمة المنفذة في الرياض" : "All 11 Installation & Maintenance Scopes"}
        catalogSubtitle={
          rtl
            ? "اختر النطاق الذي يناسب مبناك للحصول على تفاصيل المواصفات وما تشمله المعاينة وما يتم تسليمه لإدارة المبنى."
            : "Select any scope to inspect full survey coverage, field procedures, and handover deliverables."
        }
        featuredTitle={rtl ? "أكثر النطاقات طلباً وتنفيذاً في الرياض" : "Most Requested Installation Scopes"}
        featuredLede={
          rtl
            ? "حلول شاملة مع تحديد الزوايا على المخطط وتسليم كبائن مرتبة ومرقمة بالكامل."
            : "Floor-plan marked coverage and certified numbered racks delivered as unified scopes."
        }
        primaryScope01Label={rtl ? "نطاق رئيسي ٠١" : "Primary Scope 01"}
        primaryScope02Label={rtl ? "نطاق رئيسي ٠٢" : "Primary Scope 02"}
        cctvSubtitle={rtl ? "تسجيل ٣٠ يوماً" : "30-Day NVR"}
        cablingSubtitle={rtl ? "كيابل Cat6 وألياف" : "Cat6 & Fiber"}
      />

      {/* Single-Contractor Advantage Split */}
      <section className="border-t border-line bg-[#edf5fa] py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 md:grid-cols-2 md:px-10">
          <div className="relative min-h-[420px] overflow-hidden rounded-[22px] border border-line bg-white shadow-lift">
            <Photo
              src="/images/data-center.jpg"
              alt={rtl ? "كابينة خوادم ومراكز بيانات متطورة" : "High-density data center and server infrastructure"}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/20 to-transparent" />
            <div className="absolute bottom-6 start-6 end-6 rounded-[14px] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
              <p className="font-mono text-xs uppercase tracking-widest text-orange-soft">
                {rtl ? "تنظيم بلا تشابك" : "Organized Infrastructure"}
              </p>
              <p className="mt-1 text-sm font-medium">
                {rtl
                  ? "كابينة موحدة تجمع الكاميرات وأجهزة الإنذار ونقاط الشبكة بخريطة منافذ واضحة."
                  : "Consolidated cabinet uniting CCTV, alarms, and data ports with a clear port map."}
              </p>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy">
              <Layers className="size-3.5 text-orange-deep" />
              {rtl ? "ميزة المقاول الموحد" : "The Single Contractor Model"}
            </div>
            <h2 className="mt-4 text-3xl font-medium tracking-normal text-ink md:text-4xl">
              {rtl
                ? "لماذا تجمع الكاميرات والإنذار والشبكة تحت مقاول واحد؟"
                : "Why Consolidate Cameras, Alarms & Cabling Under One Crew?"}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {rtl
                ? "في الرياض، يعاني مديرو المرافق وأصحاب الفلل من تشتت المسؤولية بين مقاول للكاميرات وآخر للإنذار وثالث للشبكة. سيسنت تجمع كل هذا على مخطط واحد وكابينة واحدة وزيارة معاينة واحدة."
                : "In Riyadh, facility managers often wrestle with three separate contractors pointing fingers when a camera goes dark. Sysnet places CCTV, fire safety, and data cabling on a single drawing, one cabinet, and one visit plan."}
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-[14px] border border-line bg-white p-4">
                <h3 className="text-sm font-medium text-navy">
                  {rtl ? "١. مخطط معاينة موحد" : "1. Unified Survey Drawing"}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {rtl
                    ? "تحديد مسارات المواسير والكيابل لجميع الأنظمة قبل إغلاق الأسقف المستعارة."
                    : "Conduit and cable pathways marked for all trades before suspended ceilings close."}
                </p>
              </div>
              <div className="rounded-[14px] border border-line bg-white p-4">
                <h3 className="text-sm font-medium text-navy">
                  {rtl ? "٢. كابينة ومنافذ مرقمة" : "2. Labeled Common Cabinet"}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {rtl
                    ? "تسليم خريطة المنافذ مثبتة على الكابينة لمنع التداخل بين الكاميرات والشبكة."
                    : "Port maps fixed to the rack door so future additions never disrupt existing circuits."}
                </p>
              </div>
              <div className="rounded-[14px] border border-line bg-white p-4">
                <h3 className="text-sm font-medium text-navy">
                  {rtl ? "٣. مسؤولية واضحة أمام مكتب الملز" : "3. Clear Malaz Desk Accountability"}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {rtl
                    ? "رقم واحد ومكتب واحد تتواصل معه لأي إضافة أو صيانة دون وساطة."
                    : "One local desk and phone number for surveys, warranty, and scheduled maintenance."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Loop */}
      <section className="overflow-hidden border-t border-line bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 text-center md:px-10">
          <p className="font-mono text-xs uppercase tracking-widest text-orange-deep">
            {copy[locale].supply.label}
          </p>
        </div>
        <div className="pt-6">
          <BrandLoop label={copy[locale].supply.label} rtl={rtl} />
        </div>
      </section>

      {/* Survey Booking CTA Banner */}
      <section className="relative overflow-hidden bg-navy text-ice">
        <div className="absolute inset-0">
          <Photo src="/images/workstations.jpg" alt="" className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy to-navy-deep/90" />
        </div>
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-20">
          <div>
            <h2 className="max-w-[18ch] text-3xl font-medium leading-[1.1] tracking-normal text-white md:text-5xl">
              {copy[locale].book.title}
            </h2>
            <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-ice/85">
              {copy[locale].book.body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex h-12 items-center justify-center rounded-[5px] bg-paper px-6 text-sm font-medium uppercase tracking-normal text-navy hover:bg-ice"
            >
              {copy[locale].book.survey}
            </Link>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex h-12 items-center justify-center rounded-[5px] border border-white/50 px-6 text-sm font-medium uppercase tracking-normal text-white hover:bg-white/10"
            >
              <Phone className="me-2 size-4" />
              {copy[locale].book.call}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
