import Link from "next/link";
import { ArrowRight, ShieldCheck, Phone, MapPin, FileSpreadsheet, Wrench, CheckCircle2 } from "lucide-react";
import { BulletList } from "@/components/bullet-list";
import { Photo, ServiceIcon } from "@/components/brand";
import { Fade, Reveal, Stagger } from "@/components/motion";
import { ServiceAreas } from "@/components/service-areas";
import { CaseRail } from "@/components/case-rail";
import { Stats } from "@/components/stats";
import { BrandLoop } from "@/components/brand-loop";
import { HomeFaq } from "@/components/home-faq";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { localePath } from "@/lib/paths";
import { company } from "@/lib/site";

const industryImages: Record<string, string> = {
  "01": "/images/office.jpg",
  "02": "/images/warehouse.jpg",
  "03": "/images/sector-clinic.jpg",
  "04": "/images/villa.jpg",
  "05": "/images/sector-hospitality.jpg",
};

const stepIcons = [Phone, MapPin, FileSpreadsheet, Wrench, ShieldCheck];

export function HomeRest({ locale }: { locale: Locale }) {
  const { t, services, industries, steps, projects, faqs } = content(locale);
  const rtl = locale === "ar";
  const featured = services.filter((service) => service.featured);
  const rest = services.filter((service) => !service.featured);

  return (
    <>
      {/* The Unified Crew Section */}
      <section className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-12 md:grid-cols-[0.95fr_1.05fr] md:px-10 md:py-16">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-deep/20 bg-orange-soft/40 px-3.5 py-1 text-xs font-medium uppercase tracking-wider text-orange-deep">
            <ShieldCheck className="size-3.5" />
            {rtl ? "فريق عمل موحد في الرياض" : "Unified Riyadh Field Crew"}
          </div>
          <h2 className="mt-4 max-w-[16ch] text-3xl font-medium leading-[1.08] tracking-normal text-ink md:text-5xl">
            {t.crew.title}
          </h2>
          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{t.crew.body}</p>
          <BulletList className="mt-8" items={t.crew.points} />

          <div className="mt-8 flex flex-wrap gap-4 pt-2">
            <Link
              href={localePath(locale, "/services")}
              className="inline-flex h-12 items-center gap-2 rounded-[5px] bg-navy px-6 text-sm font-medium uppercase tracking-normal text-white transition-colors hover:bg-navy-deep"
            >
              {t.priced.allLines}
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex h-12 items-center justify-center rounded-[5px] border border-line bg-white px-6 text-sm font-medium uppercase tracking-normal text-ink transition-colors hover:border-navy"
            >
              {t.book.survey}
            </Link>
          </div>
        </Reveal>

        <div className="relative">
          <Fade className="group relative min-h-[440px] overflow-hidden rounded-[24px] border border-line bg-navy-deep shadow-lift">
            <Photo
              src="/images/cctv.jpg"
              alt={t.crew.alt}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent" />
            <div className="absolute bottom-6 start-6 end-6 rounded-[14px] border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md">
              <div className="text-xs font-mono uppercase tracking-wider text-orange-soft">
                <span>{rtl ? "مسؤولية فنية كاملة" : "Consolidated Accountability"}</span>
              </div>
              <p className="mt-1 text-sm font-medium leading-relaxed">
                {rtl
                  ? "مخطط معتمد، وكابينة واحدة تجمع الكاميرات والإنذار والشبكة، وتسليم رسمي بكلمات المرور."
                  : "Marked floor plans, single cabinet for CCTV, alarm & network, with verified handover sheets."}
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* Sectors / Industry Applications with Photo Backgrounds */}
      <section className="relative overflow-hidden bg-navy-deep text-ice">
        <div className="absolute inset-0">
          <Photo
            src="/images/riyadh.jpg"
            alt=""
            className="object-cover opacity-35"
            sizes="100vw"
            quality={60}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy/70 to-navy-deep/90" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 py-12 md:px-10 md:py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-orange-soft">
                {rtl ? "قطاعات الأعمال في الرياض" : "Riyadh Facility Sectors"}
              </span>
              <h2 className="mt-2 max-w-[18ch] text-3xl font-medium leading-[1.08] tracking-normal text-white md:text-5xl">
                {t.sectorsTitle}
              </h2>
            </Reveal>
            <p className="max-w-[45ch] text-sm text-ice/80">
              {rtl
                ? "تجهيز متكامل للشركات والمستودعات والفلل والمنشآت الصحية."
                : "Tailored camera angles, retention sizing, and cabling designed for each facility type."}
            </p>
          </div>

          <Stagger className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((item) => (
              <article
                key={item.index}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-white/15 bg-white/[0.08] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-soft/60 hover:bg-white/[0.12] hover:shadow-2xl"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-navy-deep">
                  <Photo
                    src={industryImages[item.index] ?? "/images/office.jpg"}
                    alt={item.title}
                    sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent opacity-60" />
                  <span className="absolute top-3 start-3 inline-flex items-center rounded-md border border-white/20 bg-navy-deep/85 px-2.5 py-1 font-mono text-xs font-semibold text-orange-soft backdrop-blur-md shadow-sm">
                    {item.index}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="text-base font-semibold leading-snug text-white transition-colors group-hover:text-orange-soft">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-ice/85">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Equipment Brand Marquee */}
      <section className="overflow-hidden border-b border-line bg-white" aria-label={t.supply.label}>
        <div className="mx-auto max-w-[1400px] px-4 pt-10 text-center md:px-10 md:pt-14">
          <p className="font-mono text-xs uppercase tracking-widest text-orange-deep">{t.supply.label}</p>
        </div>
        <div className="pb-10 pt-4 md:pb-14">
          <BrandLoop label={t.supply.label} rtl={locale === "ar"} />
        </div>
      </section>

      {/* Featured Services + Complete Scope Cards */}
      <section className="border-t border-line/60 bg-[#f8fbfe] py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">
                {rtl ? "النطاقات والأسعار" : "Scoped Engineering"}
              </span>
              <h2 className="mt-2 max-w-[16ch] text-3xl font-medium leading-[1.08] tracking-normal text-ink md:text-5xl">
                {t.priced.title}
              </h2>
            </Reveal>
            <p className="max-w-[65ch] text-base leading-relaxed text-muted">{t.priced.lede}</p>
          </div>

          {/* 4 Featured Scopes with Photography */}
          <Stagger className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((service) => (
              <article
                key={service.slug}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-deep hover:shadow-lift"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-ice">
                  <Photo
                    src={service.image}
                    alt={service.alt}
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    quality={90}
                    className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 start-3 end-3 flex items-center justify-between text-white">
                    <ServiceIcon name={service.icon} className="size-5 text-white" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-medium tracking-normal text-ink group-hover:text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                  <Link
                    href={localePath(locale, `/services/${service.slug}`)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-navy transition-colors group-hover:text-orange-deep"
                  >
                    <span>{t.priced.seeScope}</span>
                    <ArrowRight className="size-4 rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </Stagger>

          {/* Additional 7 Services with Visual Mini-Cards */}
          <div className="mt-8 rounded-[22px] border border-line bg-white p-6 md:p-8 shadow-sm">
            <div className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-orange-deep">
                  {rtl ? "النطاقات التكميلية" : "Complementary Trades"}
                </span>
                <h3 className="mt-1 text-xl font-medium text-ink">
                  {rtl ? "خطوط الخدمة الأخرى المنفذة في نفس الزيارة" : "All Other Scopes Quoted & Installed Together"}
                </h3>
              </div>
              <div className="flex gap-3">
                <Link
                  href={localePath(locale, "/services")}
                  className="inline-flex h-10 items-center justify-center rounded-[5px] bg-navy px-4 text-xs font-medium uppercase tracking-normal text-white hover:bg-navy-deep"
                >
                  {t.priced.allLines}
                </Link>
                <Link
                  href={localePath(locale, "/contact")}
                  className="inline-flex h-10 items-center justify-center rounded-[5px] border border-line px-4 text-xs font-medium uppercase tracking-normal text-ink hover:border-navy"
                >
                  {t.priced.parts}
                </Link>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {rest.map((service) => (
                <Link
                  key={service.slug}
                  href={localePath(locale, `/services/${service.slug}`)}
                  className="group flex flex-col overflow-hidden rounded-[18px] border border-line bg-[#f8fbfe] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:bg-white hover:shadow-card"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-ice">
                    <Photo
                      src={service.image}
                      alt={service.alt}
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      quality={90}
                      className="object-cover transition-transform duration-500 ease-out-expo group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-2.5 start-2.5">
                      <span className="inline-flex size-7 items-center justify-center rounded-md bg-navy/85 text-white backdrop-blur-md shadow-sm">
                        <ServiceIcon name={service.icon} className="size-3.5 text-white" />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-sm font-semibold text-ink transition-colors group-hover:text-navy">
                      {service.title}
                    </p>
                    <p className="mt-1 flex-1 text-xs leading-relaxed text-muted line-clamp-2">
                      {service.summary}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-orange-deep">
                      <span>{t.priced.seeScope}</span>
                      <ArrowRight className="size-3 rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="border-t border-line/60 bg-gradient-to-b from-white via-[#f4f8fb] to-white py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">
              {rtl ? "مسار العمل الميداني" : "Structured Methodology"}
            </span>
            <Reveal>
              <h2 className="mt-2 text-3xl font-medium leading-[1.08] tracking-normal text-ink md:text-5xl">
                {t.stepsTitle}
              </h2>
            </Reveal>
            <p className="mx-auto mt-4 max-w-[60ch] text-base text-muted">
              {rtl
                ? "من المكالمة الأولى إلى تسليم المخطط النهائي وكلمات المرور لمدير المبنى."
                : "From the first phone call to the handover of passwords and test sheets."}
            </p>
          </div>

          <Stagger className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, idx) => {
              const StepIcon = stepIcons[idx] ?? CheckCircle2;
              return (
                <article
                  key={step.index}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[18px] border border-line bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-card"
                >
                  <div className="absolute top-0 start-0 end-0 h-1 bg-gradient-to-r from-orange-deep via-orange to-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-md bg-orange-soft/50 px-2 py-0.5 font-mono text-xs font-bold text-orange-deep">
                        {step.index}
                      </span>
                      <div className="flex size-8 items-center justify-center rounded-lg bg-ice text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                        <StepIcon className="size-4" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-ink transition-colors group-hover:text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{step.text}</p>
                  </div>
                </article>
              );
            })}
          </Stagger>

          {/* Operational Trust Indicator Band */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 rounded-[14px] border border-line/80 bg-white px-6 py-3.5 text-xs text-muted shadow-2xs">
            <span className="inline-flex items-center gap-1.5 font-medium text-ink">
              <CheckCircle2 className="size-4 text-orange-deep" />
              {rtl ? "معاينة ميدانية خلال 24 ساعة" : "Site survey dispatched within 24 hours"}
            </span>
            <span className="hidden sm:inline text-line">•</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-ink">
              <CheckCircle2 className="size-4 text-orange-deep" />
              {rtl ? "مخطط كابلات وجدول كميات معتمد" : "Certified cable schedule & parts list"}
            </span>
            <span className="hidden sm:inline text-line">•</span>
            <span className="inline-flex items-center gap-1.5 font-medium text-ink">
              <CheckCircle2 className="size-4 text-orange-deep" />
              {rtl ? "تسليم معتمد مع كلمات المرور" : "Tested handover with passwords"}
            </span>
          </div>
        </div>
      </section>

      {/* Projects Showcase & Stats */}
      <section className="border-t border-line bg-[#f8fbfe] py-12 md:py-16">
        <div className="mx-auto max-w-[1400px] px-4 md:px-10">
          <div className="grid items-end gap-6 md:grid-cols-[1fr_1fr]">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-orange-deep">
                {rtl ? "مشاريع نموذجية" : "Verified Projects"}
              </span>
              <h2 className="mt-2 max-w-[16ch] text-3xl font-medium leading-[1.08] tracking-normal text-ink md:text-5xl">
                {t.survey.title}
              </h2>
            </Reveal>
            <p className="max-w-[65ch] text-base leading-relaxed text-muted">{t.survey.lede}</p>
          </div>
          <div className="mt-8">
            <CaseRail items={projects} />
          </div>
          <div className="mt-10">
            <Stats />
          </div>
        </div>
      </section>

      <ServiceAreas locale={locale} />
      <HomeFaq title={t.faqTitle} faqs={faqs} />

      {/* High-impact Booking CTA Banner */}
      <section className="relative overflow-hidden bg-navy text-ice">
        <div className="absolute inset-0">
          <Photo src="/images/workstations.jpg" alt="" className="object-cover opacity-25" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy to-navy-deep/90" />
        </div>
        <div className="relative mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-16">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-mono uppercase tracking-wider text-orange-soft backdrop-blur-md">
              <span>{rtl ? "مكتب الملز بالرياض" : "Riyadh Operations Hub"}</span>
            </div>
            <h2 className="max-w-[16ch] text-3xl font-medium leading-[1.08] tracking-normal text-white md:text-5xl">
              {t.book.title}
            </h2>
            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-ice/90 md:text-lg">
              {t.book.body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex h-12 items-center justify-center rounded-[5px] bg-paper px-6 text-sm font-medium uppercase tracking-normal text-navy transition-colors hover:bg-ice"
            >
              {t.book.survey}
            </Link>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-[5px] border border-white/50 px-6 text-sm font-medium uppercase tracking-normal text-white transition-colors hover:bg-white/10"
            >
              <Phone className="size-4" />
              {t.book.call}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
