import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Camera, Building, MapPin, Phone } from "lucide-react";
import { PageHero, Photo } from "@/components/brand";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DocumentTitle } from "@/components/locale";
import { JsonLd } from "@/components/json-ld";
import { content } from "@/lib/content";
import { copy } from "@/lib/copy";
import { parseLocale } from "@/lib/locale";
import { localePath } from "@/lib/paths";
import { projectsGraph } from "@/lib/schema";
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
    path: "/projects",
    title: t.projectsTitle,
    description: t.projectsDescription,
  });
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = parseLocale((await params).locale);
  const { t, projects } = content(locale);
  const rtl = locale === "ar";

  const standards = [
    {
      title: rtl ? "ترقيم وفحص ١٠٠٪" : "100% Labeled & Tested",
      desc: rtl
        ? "جميع المنافذ والكيابل ترقم عند الطرفين وتسلم ورقة الفحص كاملة."
        : "Every patch lead and port is numbered at both ends with certified test sheets.",
    },
    {
      title: rtl ? "تسجيل ٣٠ يوماً فعلياً" : "Verified 30-Day Retention",
      desc: rtl
        ? "حساب مساحة الأقراص الصلبة وفق عدد الكاميرات ومعدل الإطارات الفعلي."
        : "Hard drives sized to actual resolution and bitrate to guarantee full retention.",
    },
    {
      title: rtl ? "فصل دوائر الحريق عن السرقة" : "Segregated Alarm Circuits",
      desc: rtl
        ? "دوائر إنذار الحريق مستقلة تماماً عن حساسات الأبواب والنوافذ."
        : "Fire alarm loops stay strictly isolated from intrusion contacts.",
    },
    {
      title: rtl ? "تسليم كلمات المرور للإدارة" : "Full Admin Credentials",
      desc: rtl
        ? "تسليم كلمات مرور المشرف وخريطة الكابينة لمدير المبنى دون حجب."
        : "Direct handover of master passwords and cabinet maps to facility leadership.",
    },
  ];

  return (
    <>
      <DocumentTitle title={documentTitle(t.meta.projectsTitle, t.meta.brand)} />
      <JsonLd data={projectsGraph(locale)} />
      <Breadcrumbs
        locale={locale}
        label={t.a11y.breadcrumb}
        items={[{ name: t.nav.home, path: "/" }, { name: t.nav.projects }]}
      />

      <PageHero
        title={t.projectsPage.title}
        lede={t.projectsPage.lede}
        badge={rtl ? "نماذج واقعية من مشاريع الرياض" : "Real Riyadh Installation Scopes"}
        image="/images/warehouse.jpg"
        stats={[
          { label: rtl ? "مستودعات ولوجستيات" : "Warehouses", value: rtl ? "حي السلي" : "Al Sulay Yards" },
          { label: rtl ? "مباني تجارية" : "Commercial", value: rtl ? "حي العليا" : "Olaya Towers" },
          { label: rtl ? "فلل وعيادات" : "Villas & Clinics", value: rtl ? "الملز وصلاح الدين" : "Malaz & Salah Al-Din" },
        ]}
      />

      {/* Case Studies with Dual Imagery */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="space-y-10 md:space-y-12">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <article
                  key={project.slug}
                  id={project.slug}
                  className="rounded-[24px] border border-line bg-[#f8fbfe] p-6 md:p-10 shadow-sm transition-all duration-300 hover:shadow-lift"
                >
                  <div className="grid items-center gap-10 lg:grid-cols-12">
                    {/* Text Column */}
                    <div className={`space-y-6 lg:col-span-5 ${isEven ? "" : "lg:order-2"}`}>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-navy/15 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy">
                          <Building className="size-3.5 text-orange-deep" />
                          {project.tag}
                        </span>
                        <span className="font-mono text-xs text-muted">
                          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="text-2xl font-medium tracking-normal text-ink md:text-3xl lg:text-4xl">
                        {project.title}
                      </h2>

                      <p className="text-base leading-relaxed text-muted">
                        {project.summary}
                      </p>

                      <div className="space-y-3 pt-2">
                        <p className="text-xs font-mono uppercase tracking-wider text-navy font-semibold">
                          {rtl ? "مواصفات النطاق والتسليم:" : "Scope Deliverables:"}
                        </p>
                        <ul className="flex flex-wrap gap-2">
                          {project.facts.map((fact) => (
                            <li
                              key={fact}
                              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-medium text-ink shadow-2xs"
                            >
                              <CheckCircle2 className="size-3.5 text-orange-deep" />
                              {fact}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Link
                          href={localePath(locale, "/contact")}
                          className="inline-flex h-11 items-center gap-2 rounded-[5px] bg-navy px-5 text-sm font-medium uppercase tracking-normal text-white transition-colors duration-200 hover:bg-navy-deep"
                        >
                          {rtl ? "طلب معاينة لنطاق مشابه" : "Request a Similar Survey"}
                          <ArrowRight className="size-4 rtl:rotate-180" />
                        </Link>
                      </div>
                    </div>

                    {/* Dual Imagery Column */}
                    <div className={`grid gap-4 sm:grid-cols-2 lg:col-span-7 ${isEven ? "" : "lg:order-1"}`}>
                      {/* Image 1: Hardware Detail */}
                      <div className="group relative aspect-[4/3] overflow-hidden rounded-[18px] border border-line bg-navy-deep shadow-sm">
                        <Photo
                          src={project.image}
                          alt={project.alt}
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-transparent to-transparent" />
                        <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-medium backdrop-blur-md">
                            <Camera className="size-3" />
                            {rtl ? "تفاصيل التركيب" : "Hardware Detail"}
                          </span>
                        </div>
                      </div>

                      {/* Image 2: Scene / Facility Environment */}
                      <div className="group relative aspect-[4/3] overflow-hidden rounded-[18px] border border-line bg-navy-deep shadow-sm">
                        <Photo
                          src={project.scene}
                          alt={project.sceneAlt}
                          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-transparent to-transparent" />
                        <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-navy/85 px-2.5 py-0.5 text-[11px] font-medium backdrop-blur-md">
                            <MapPin className="size-3 text-orange-soft" />
                            {rtl ? "بيئة الموقع" : "Site Environment"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Delivery Standards Grid */}
      <section className="border-t border-line bg-[#f0f6fa] py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">
              {rtl ? "معايير الجودة" : "Quality Assurance"}
            </span>
            <h2 className="mt-2 text-3xl font-medium tracking-normal text-ink md:text-4xl">
              {rtl ? "التزامات هندسية تطبق على كل مشروع" : "Standards Delivered on Every Project"}
            </h2>
            <p className="mx-auto mt-4 max-w-[65ch] text-base leading-relaxed text-muted">
              {rtl
                ? "سواء كان المشروع مستودعاً في السلي أو فيلا في الملز، يتم تسليم الأعمال وفق معايير هندسية موثقة."
                : "Whether installing 22 warehouse cameras in Al Sulay or 4 access doors in Malaz, these rules never change."}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-10">
            {standards.map((std, i) => (
              <div
                key={std.title}
                className="rounded-[20px] border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:border-navy hover:shadow-lift"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-orange-deep">
                    0{i + 1}
                  </span>
                  <ShieldCheck className="size-5 text-navy" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-ink">{std.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{std.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Survey CTA Banner */}
      <section className="relative overflow-hidden bg-navy text-ice">
        <div className="absolute inset-0">
          <Photo src="/images/office.jpg" alt="" className="object-cover opacity-20" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy to-navy-deep/90" />
        </div>
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-20">
          <div>
            <h2 className="max-w-[18ch] text-3xl font-medium leading-[1.1] tracking-normal text-white md:text-5xl">
              {t.projectsPage.prompt}
            </h2>
            <p className="mt-4 max-w-[55ch] text-base leading-relaxed text-ice/85">
              {t.projectsPage.link}
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
