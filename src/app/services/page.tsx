import type { Metadata } from "next";
import { PageHero, Photo, ServiceIcon } from "@/components/brand";
import { DocumentTitle } from "@/components/locale";
import { content } from "@/lib/content";
import { getLocale } from "@/lib/locale.server";

export const metadata: Metadata = {
  title: "Services",
  description:
    "CCTV, intercom, network cabling, computers, biometric access, fire alarm, fire safety, home and office projects, smart office, product sales, and maintenance in Riyadh.",
};

export default async function ServicesPage() {
  const { t, services } = content(await getLocale());

  return (
    <>
      <DocumentTitle title={`${t.meta.servicesTitle} · ${t.meta.brand}`} />
      <PageHero title={t.servicesPage.title} lede={t.servicesPage.lede} />
      <div className="mx-auto max-w-[1400px] px-4 md:px-10">
        {services.map((service, index) => (
          <article
            key={service.slug}
            id={service.slug}
            className="grid scroll-mt-28 items-center gap-8 border-b border-line py-14 md:grid-cols-2 md:gap-14 md:py-20"
          >
            <div className={`relative min-h-72 overflow-hidden rounded-[18px] ${index % 2 ? "md:order-2" : ""}`}>
              <Photo
                src={service.image}
                alt={service.alt}
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <div>
              <ServiceIcon name={service.icon} className="size-6 text-navy" />
              <h2 className="mt-4 text-3xl font-medium tracking-normal">{service.title}</h2>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{service.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
