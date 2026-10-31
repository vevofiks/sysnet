import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, Photo } from "@/components/brand";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DocumentTitle } from "@/components/locale";
import { JsonLd } from "@/components/json-ld";
import { content } from "@/lib/content";
import { copy } from "@/lib/copy";
import { parseLocale } from "@/lib/locale";
import { localePath } from "@/lib/paths";
import { breadcrumbSchema } from "@/lib/schema";
import { documentTitle, pageMeta } from "@/lib/seo";

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

  return (
    <>
      <DocumentTitle title={documentTitle(t.meta.servicesTitle, t.meta.brand)} />
      <JsonLd
        data={breadcrumbSchema(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.services, path: "/services" },
          ],
          locale,
        )}
      />
      <Breadcrumbs
        locale={locale}
        label={t.a11y.breadcrumb}
        items={[{ name: t.nav.home, path: "/" }, { name: t.nav.services }]}
      />
      <PageHero title={t.servicesPage.title} lede={t.servicesPage.lede} />
      <div className="mx-auto grid max-w-[1400px] gap-5 px-4 py-16 sm:grid-cols-2 md:px-10 md:py-24 xl:grid-cols-3">
        {services.map((service, index) => (
          <Link
            key={service.slug}
            href={localePath(locale, `/services/${service.slug}`)}
            className="group flex flex-col overflow-hidden rounded-[18px] border border-line bg-white shadow-lift transition-colors duration-300 ease-out-expo hover:border-orange-deep"
          >
            <div className="relative aspect-[16/10]">
              <Photo
                src={service.image}
                alt={service.alt}
                sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-sm text-orange-deep">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-xl font-medium tracking-normal">{service.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-normal text-navy">
                {t.priced.seeScope}
                <ArrowRight className="size-4 rtl:rotate-180" strokeWidth={1.5} aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
