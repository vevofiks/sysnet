import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Clock, Mail, MapPin, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/brand";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { QuoteForm } from "@/components/quote-form";
import { DocumentTitle } from "@/components/locale";
import { copy } from "@/lib/copy";
import { parseLocale } from "@/lib/locale";
import { contactPageGraph } from "@/lib/schema";
import { documentTitle, pageMeta } from "@/lib/seo";
import { company } from "@/lib/site";

const ContactMap = dynamic(() => import("@/components/contact-map").then((mod) => mod.ContactMap));

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const t = copy[locale];
  return pageMeta({
    locale,
    path: "/contact",
    title: t.meta.contactTitle,
    description: t.meta.contactDescription,
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = parseLocale((await params).locale);
  const t = copy[locale];
  const rtl = locale === "ar";
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&z=14&output=embed`;

  const districts = [
    rtl ? "الملز" : "Al Malaz",
    rtl ? "العليا" : "Al Olaya",
    rtl ? "السلي" : "Al Sulay",
    rtl ? "طريق الملك فهد" : "King Fahd Rd",
    rtl ? "النخيل" : "Al Nakheel",
    rtl ? "الدمام" : "Dammam",
  ];

  const steps = [
    {
      num: "1",
      title: rtl ? "استلام الطلب في مكتب الملز" : "Request Received at Malaz Desk",
      desc: rtl ? "مراجعة الموقع ونوع المبنى فوراً." : "Immediate review of location and facility type.",
    },
    {
      num: "2",
      title: rtl ? "تحديد موعد المعاينة الميدانية" : "Site Survey Appointment Scheduled",
      desc: rtl ? "فريق المسح الميداني يزور موقعك لتحديد المخطط." : "Field crew attends your building to mark plans.",
    },
    {
      num: "3",
      title: rtl ? "تسليم جدول الكميات والأسعار" : "Itemized Parts & Labour Quotation",
      desc: rtl ? "عرض أسعار مفصل يفصل الأجهزة عن التركيب." : "Transparent breakdown separating equipment from labour.",
    },
  ];

  return (
    <>
      <DocumentTitle title={documentTitle(t.meta.contactTitle, t.meta.brand)} />
      <JsonLd data={contactPageGraph(locale)} />
      <Breadcrumbs
        locale={locale}
        label={t.a11y.breadcrumb}
        items={[{ name: t.nav.home, path: "/" }, { name: t.nav.contact }]}
      />

      <PageHero
        title={t.contact.title}
        lede={t.contact.lede}
        badge={rtl ? "مكتب الحجز والمعاينة الميدانية" : "Direct Malaz Survey Booking Desk"}
        image="/images/office.jpg"
        stats={[
          { label: rtl ? "سرعة الرد" : "Response Time", value: rtl ? "في نفس اليوم" : "Same-Day Dispatch" },
          { label: rtl ? "الهاتف المباشر" : "Direct Phone", value: company.phoneDisplay },
          { label: rtl ? "تغطية المعاينة" : "Survey Radius", value: rtl ? "الرياض والدمام" : "Riyadh & Dammam" },
        ]}
      />

      <section className="mx-auto grid max-w-[1400px] gap-10 px-4 py-12 lg:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-16">
        {/* Left Column: Operations Hub */}
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center rounded-full border border-green-600/20 bg-green-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-green-700">
              {rtl ? "المكتب متاح للرد المباشر" : "Malaz Desk Active & Online"}
            </div>
            <h2 className="mt-3 text-3xl font-medium tracking-normal text-ink">
              {t.contact.heading}
            </h2>
            <p className="mt-2 text-base text-muted">
              {rtl
                ? "تواصل مباشرة مع المهندسين في مكتب الملز لحجز معاينة كاميرات المراقبة، أجهزة الإنذار، أو تمديد الشبكات."
                : "Connect directly with technicians in Malaz to book surveys for CCTV, fire alarms, or cabling."}
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${company.phoneTel}`}
              className="flex items-start gap-3.5 rounded-[16px] border border-line bg-white p-4 shadow-sm transition-all hover:border-navy hover:shadow-lift"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-ice text-navy">
                <Phone className="size-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">{t.contact.phone}</p>
                <p className="mt-0.5 text-sm font-medium text-navy" dir="ltr">
                  {company.phoneDisplay}
                </p>
              </div>
            </a>

            <a
              href={`https://wa.me/${company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3.5 rounded-[16px] border border-line bg-white p-4 shadow-sm transition-all hover:border-green-600 hover:shadow-lift"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-green-50 text-green-700">
                <MessageSquare className="size-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">WhatsApp</p>
                <p className="mt-0.5 text-sm font-medium text-green-800" dir="ltr">
                  {company.phoneDisplay}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${company.email}`}
              className="flex items-start gap-3.5 rounded-[16px] border border-line bg-white p-4 shadow-sm transition-all hover:border-navy hover:shadow-lift"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-ice text-navy">
                <Mail className="size-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">{t.contact.email}</p>
                <p className="mt-0.5 text-sm font-medium text-navy" dir="ltr">
                  {company.email}
                </p>
              </div>
            </a>

            <div className="flex items-start gap-3.5 rounded-[16px] border border-line bg-white p-4 shadow-sm">
              <div className="grid size-10 shrink-0 place-items-center rounded-[10px] bg-orange-soft/50 text-orange-deep">
                <Clock className="size-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted">{t.contact.hours}</p>
                <p className="mt-0.5 text-sm font-medium text-ink">
                  {t.company.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Operational Hub Visual Card */}
          <div className="overflow-hidden rounded-[20px] border border-line bg-[#f8fbfe] p-5 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-navy">
              <MapPin className="size-4 text-orange-deep" />
              <span>{t.contact.address}</span>
            </div>
            <p className="mt-2 text-base font-medium text-ink">{t.company.address}</p>

            <div className="mt-4 pt-4 border-t border-line/70">
              <p className="text-xs font-mono uppercase tracking-wider text-muted">
                {rtl ? "أحياء الرياض والدمام المشمولة بالمعاينة:" : "Riyadh & Dammam Districts Covered:"}
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {districts.map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-line bg-white px-2.5 py-1 text-xs font-medium text-ink"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline: What Happens Next */}
          <div className="rounded-[20px] border border-line bg-white p-6 shadow-sm">
            <h3 className="text-sm font-medium uppercase tracking-wider text-navy">
              {rtl ? "خطوات ما بعد إرسال النموذج" : "What Happens After You Submit"}
            </h3>
            <div className="mt-5 space-y-4">
              {steps.map((st) => (
                <div key={st.num} className="flex items-start gap-3.5">
                  <div className="grid size-6 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-white">
                    {st.num}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{st.title}</p>
                    <p className="text-xs text-muted leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Quote Form in elevated container */}
        <div className="rounded-[24px] border border-line bg-white p-6 md:p-10 shadow-lift">
          <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-orange-deep">
                {rtl ? "طلب مباشر" : "Fast WhatsApp Form"}
              </span>
              <h3 className="text-xl font-medium text-ink">
                {rtl ? "طلب معاينة وعرض سعر" : "Request Survey & Quotation"}
              </h3>
            </div>
            <ShieldCheck className="size-6 text-navy" />
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-line bg-[#f8fbfe]">
        <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-10">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-2">
              <MapPin className="size-4 text-orange-deep" />
              <h2 className="text-base font-medium text-ink">{t.a11y.mapHeading}</h2>
            </div>
            <span className="text-xs text-muted">{company.address}</span>
          </div>
        </div>
        <ContactMap src={mapSrc} title={t.a11y.mapTitle} />
      </section>
    </>
  );
}
