import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { PageHero } from "@/components/brand";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { QuoteForm } from "@/components/quote-form";
import { DocumentTitle } from "@/components/locale";
import { copy } from "@/lib/copy";
import { parseLocale } from "@/lib/locale";
import { breadcrumbSchema } from "@/lib/schema";
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
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(company.mapsQuery)}&z=14&output=embed`;
  const rows = [
    { label: t.contact.address, value: t.company.address },
    { label: t.contact.phone, value: company.phoneDisplay, href: `tel:${company.phoneTel}` },
    { label: t.contact.email, value: company.email, href: `mailto:${company.email}` },
    { label: t.contact.hours, value: t.company.hours },
  ];

  return (
    <>
      <DocumentTitle title={documentTitle(t.meta.contactTitle, t.meta.brand)} />
      <JsonLd
        data={breadcrumbSchema(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.contact, path: "/contact" },
          ],
          locale,
        )}
      />
      <Breadcrumbs
        locale={locale}
        label={t.a11y.breadcrumb}
        items={[{ name: t.nav.home, path: "/" }, { name: t.nav.contact }]}
      />
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
        <ContactMap src={mapSrc} title={t.a11y.mapTitle} />
      </section>
    </>
  );
}
