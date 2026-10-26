import type { Metadata } from "next";
import { PageHero } from "@/components/brand";
import { QuoteForm } from "@/components/quote-form";
import { DocumentTitle } from "@/components/locale";
import { copy } from "@/lib/copy";
import { getLocale } from "@/lib/locale.server";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a Sysnet site survey in Riyadh. Malaz desk, sales@sysnet-ksa.com, +966 53 298 0149.",
};

export default async function ContactPage() {
  const t = copy[await getLocale()];
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&z=14&output=embed`;
  const rows = [
    { label: t.contact.address, value: t.company.address },
    { label: t.contact.phone, value: company.phoneDisplay, href: `tel:${company.phoneTel}` },
    { label: t.contact.email, value: company.email, href: `mailto:${company.email}` },
    { label: t.contact.hours, value: t.company.hours },
  ];

  return (
    <>
      <DocumentTitle title={`${t.meta.contactTitle} · ${t.meta.brand}`} />
      <PageHero title={t.contact.title} lede={t.contact.lede} />
      <section className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-20">
        <div>
          <h2 className="text-2xl font-medium tracking-normal">{t.contact.heading}</h2>
          <dl className="mt-6 divide-y divide-line border-y border-line">
            {rows.map((row) => (
              <div key={row.label} className="grid gap-1 py-4">
                <dt className="text-sm text-muted">{row.label}</dt>
                <dd className="text-base">
                  {row.href ? (
                    <a href={row.href} className="font-medium text-navy" dir="ltr">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <QuoteForm />
      </section>
      <section className="border-t border-line">
        <h2 className="sr-only">{t.a11y.mapHeading}</h2>
        <iframe
          title={t.a11y.mapTitle}
          src={mapSrc}
          className="h-[420px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
