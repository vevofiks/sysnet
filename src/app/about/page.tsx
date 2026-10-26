import type { Metadata } from "next";
import { PageHero, Photo } from "@/components/brand";
import { DocumentTitle } from "@/components/locale";
import { copy } from "@/lib/copy";
import { getLocale } from "@/lib/locale.server";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sysnet is Adam Al Arabia Company, affiliated with NetPro, installing CCTV, alarms, and cabling from Malaz, Riyadh.",
};

export default async function AboutPage() {
  const page = copy[await getLocale()];
  const t = page.about;

  return (
    <>
      <DocumentTitle title={`${page.meta.aboutTitle} · ${page.meta.brand}`} />
      <PageHero title={t.title} lede={t.lede} />
      <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 py-16 md:grid-cols-2 md:px-10 md:py-24">
        <div className="relative min-h-[420px] overflow-hidden rounded-[18px]">
          <Photo
            src="/images/riyadh.jpg"
            alt={t.skylineAlt}
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-3xl font-medium tracking-normal md:text-4xl">{t.heading}</h2>
          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{t.p1}</p>
          <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{t.p2}</p>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {t.rows.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-6 py-3">
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="text-end text-sm" dir={value.includes("@") || value.includes("+") ? "ltr" : undefined}>
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:px-10 md:py-24">
          <h2 className="text-3xl font-medium tracking-normal">{t.workTitle}</h2>
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
            <div className="max-w-[65ch] space-y-4 text-base leading-relaxed text-muted">
              {t.work.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="relative min-h-72 overflow-hidden rounded-[18px]">
              <Photo
                src="/images/tech.jpg"
                alt={t.techAlt}
                sizes="(min-width: 768px) 30vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
