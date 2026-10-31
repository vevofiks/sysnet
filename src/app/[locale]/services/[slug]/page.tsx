import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Photo, ServiceIcon } from "@/components/brand";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BulletList } from "@/components/bullet-list";
import { DocumentTitle } from "@/components/locale";
import { JsonLd } from "@/components/json-ld";
import { ServiceAreas } from "@/components/service-areas";
import { content } from "@/lib/content";
import { guideFor } from "@/lib/guides";
import { parseLocale } from "@/lib/locale";
import { localePath } from "@/lib/paths";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { documentTitle, pageMeta } from "@/lib/seo";
import { company, services as catalog } from "@/lib/site";

type Params = { locale: string; slug: string };

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
  return pageMeta({
    locale,
    path: `/services/${slug}`,
    title: guide.seoTitle,
    description: guide.seoDescription,
    alt: service.alt,
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

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <DocumentTitle title={documentTitle(guide.seoTitle, t.meta.brand)} />
      <JsonLd
        data={serviceSchema({
          locale,
          path: `/services/${slug}`,
          name: guide.h1,
          description: guide.seoDescription,
        })}
      />
      <JsonLd
        data={breadcrumbSchema(
          [
            { name: t.nav.home, path: "/" },
            { name: t.nav.services, path: "/services" },
            { name: service.title, path: `/services/${slug}` },
          ],
          locale,
        )}
      />
      <JsonLd data={faqSchema(guide.faq)} />
      <Breadcrumbs
        locale={locale}
        label={t.a11y.breadcrumb}
        items={[
          { name: t.nav.home, path: "/" },
          { name: t.nav.services, path: "/services" },
          { name: service.title },
        ]}
      />
      <header className="border-b border-white/10 bg-navy text-ice">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-4 py-5 md:flex-row md:items-end md:justify-between md:gap-12 md:px-10 md:py-6">
          <div>
            <p className="font-mono text-sm text-orange-soft">
              {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
            </p>
            <h1 className="mt-1 max-w-[22ch] text-2xl font-medium leading-[1.15] tracking-normal md:text-3xl">
              {guide.h1}
            </h1>
          </div>
          <p className="max-w-[42ch] text-base leading-snug text-ice/85 md:pb-1 md:text-lg">
            {service.summary}
          </p>
        </div>
      </header>
      <article className="mx-auto grid max-w-[1400px] items-center gap-8 px-4 py-8 md:grid-cols-2 md:gap-12 md:px-10 md:py-12">
        <div>
          <ServiceIcon name={service.icon} className="size-8 text-navy" />
          <p className="mt-5 text-xl leading-relaxed text-ink md:text-2xl">{service.detail}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={localePath(locale, "/contact")}
              className="inline-flex h-12 items-center justify-center rounded-[5px] bg-navy px-5 text-sm font-medium uppercase tracking-normal text-white hover:bg-navy-deep"
            >
              {t.book.survey}
            </Link>
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex h-12 items-center justify-center rounded-[5px] border border-line px-5 text-sm font-medium uppercase tracking-normal text-ink hover:border-navy"
            >
              {t.book.call}
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[18px] bg-ice">
          <Photo
            src={service.image}
            alt={service.alt}
            sizes="(min-width: 768px) 46vw, 100vw"
            priority
            fit="contain"
          />
        </div>
      </article>

      {guide.sections.map((section) => (
        <section key={section.heading} className="border-t border-line">
          <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-10 md:py-20">
            <h2 className="max-w-[24ch] text-3xl font-medium leading-[1.08] tracking-normal md:text-4xl">
              {section.heading}
            </h2>
            <div className="mt-6 max-w-[68ch] space-y-4 text-base leading-relaxed text-muted">
              {section.body.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-20">
          <h2 className="text-3xl font-medium tracking-normal md:text-4xl">{t.faqTitle}</h2>
          <div>
            {guide.faq.map((item) => (
              <details key={item.q} className="group border-b border-line py-2">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-start text-base font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-lg text-orange-deep transition-transform duration-300 ease-out-expo group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-[65ch] pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreas locale={locale} />

      <section className="border-t border-line bg-ice">
        <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-10 md:py-20">
          <h2 className="max-w-[18ch] text-3xl font-medium leading-[1.08] tracking-normal md:text-4xl">
            {t.servicesPage.includes}
          </h2>
          <ol className="mt-8 grid gap-px bg-line md:grid-cols-2">
            {service.includes.map((item, itemIndex) => (
              <li
                key={item}
                className={`bg-ice p-5 ${
                  itemIndex === service.includes.length - 1 && service.includes.length % 2 === 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <p className="font-mono text-sm text-orange-deep">
                  {String(itemIndex + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1400px] items-start gap-8 px-4 py-14 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-20">
          <h2 className="max-w-[16ch] text-3xl font-medium leading-[1.08] tracking-normal md:text-4xl">
            {t.servicesPage.leaves}
          </h2>
          <BulletList items={service.leaves} />
        </div>
      </section>

      <section className="border-t border-line bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-10 md:py-20">
          <h2 className="max-w-[20ch] text-3xl font-medium tracking-normal md:text-4xl">
            {t.servicesPage.other}
          </h2>
          <ul className="mt-8 grid gap-x-12 md:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug} className="border-t border-line">
                <Link
                  href={localePath(locale, `/services/${item.slug}`)}
                  className="flex items-center justify-between gap-6 py-4 hover:text-navy"
                >
                  <span className="font-medium">{item.title}</span>
                  <ArrowRight className="size-4 shrink-0 rtl:rotate-180" strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <Link href={localePath(locale, "/services")} className="mt-8 inline-flex h-11 items-center text-sm font-medium text-navy">
            {t.priced.allLines}
          </Link>
        </div>
      </section>
    </>
  );
}
