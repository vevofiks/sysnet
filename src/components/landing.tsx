import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BulletList } from "@/components/bullet-list";
import { Photo, ServiceIcon } from "@/components/brand";
import { CaseRail } from "@/components/case-rail";
import { Hero } from "@/components/hero";
import { Fade, Reveal, Stagger } from "@/components/motion";
import { Stats } from "@/components/stats";
import { content } from "@/lib/content";
import { getLocale } from "@/lib/locale.server";
import { partners } from "@/lib/site";

export async function Landing() {
  const { t, services, industries, steps, projects, faqs } = content(await getLocale());
  const featured = services.filter((service) => service.featured);
  const rest = services.filter((service) => !service.featured);

  return (
    <>
      <Hero />

      <section className="border-b border-line bg-paper" aria-label={t.supply.label}>
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="max-w-[42ch] text-sm leading-relaxed text-muted">
            {t.supply.text}
          </p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {partners.map((name) => (
              <li
                key={name}
                className="font-mono text-sm uppercase tracking-[0.18em] text-navy"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:py-24">
        <Reveal>
          <h2 className="max-w-[16ch] text-3xl font-medium leading-[1.08] tracking-normal md:text-5xl">
            {t.crew.title}
          </h2>
          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">
            {t.crew.body}
          </p>
          <BulletList className="mt-8" items={t.crew.points} />
        </Reveal>
        <Fade className="relative min-h-[420px] overflow-hidden rounded-[18px]">
          <Photo
            src="/images/grey-cams.jpg"
            alt={t.crew.alt}
            sizes="(min-width: 768px) 45vw, 100vw"
          />
        </Fade>
      </section>

      <section className="relative overflow-hidden bg-navy text-ice">
        <div className="absolute inset-0">
          <Photo
            src="/images/riyadh.jpg"
            alt=""
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-deep/82" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-4 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2 className="max-w-[18ch] text-3xl font-medium leading-[1.08] tracking-normal md:text-5xl">
              {t.sectorsTitle}
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-1 border border-white/15 md:grid-cols-2 lg:grid-cols-5">
            {industries.map((item) => (
              <article
                key={item.index}
                className="border-b border-white/15 p-5 transition-colors duration-300 ease-out-expo last:border-b-0 hover:bg-orange/20 md:border-b-0 md:border-e md:last:border-e-0"
              >
                <p className="font-mono text-sm text-orange-soft">{item.index}</p>
                <h3 className="mt-6 text-lg font-medium leading-snug">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ice/75">{item.text}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-10 md:py-24">
        <div className="grid items-end gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <h2 className="max-w-[16ch] text-3xl font-medium leading-[1.08] tracking-normal md:text-5xl">
              {t.priced.title}
            </h2>
          </Reveal>
          <p className="max-w-[65ch] text-base leading-relaxed text-muted">
            {t.priced.lede}
          </p>
        </div>
        <Stagger className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((service) => (
            <article
              key={service.slug}
              className="flex flex-col rounded-[18px] border border-line bg-white p-6 text-ink shadow-lift transition-colors duration-300 ease-out-expo hover:bg-orange-soft"
            >
              <ServiceIcon name={service.icon} className="size-6 text-navy" />
              <h3 className="mt-8 text-xl font-medium tracking-normal">{service.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{service.summary}</p>
              <Link
                href={`/services#${service.slug}`}
                className="mt-6 inline-flex h-11 items-center gap-2 text-sm font-medium uppercase tracking-normal text-navy"
              >
                {t.priced.seeScope}
                <ArrowRight className="size-4 rtl:rotate-180" strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </Stagger>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/services"
            className="inline-flex h-12 items-center justify-center rounded-[5px] bg-navy px-5 text-sm font-medium uppercase tracking-normal text-white hover:bg-navy-deep"
          >
            {t.priced.allLines}
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-[5px] border border-line px-5 text-sm font-medium uppercase tracking-normal text-ink hover:border-navy"
          >
            {t.priced.parts}
          </Link>
        </div>
        <ul className="mt-10 grid gap-x-12 md:grid-cols-2">
          {rest.map((service) => (
            <li key={service.slug} className="border-t border-line">
              <Link
                href={`/services#${service.slug}`}
                className="flex items-baseline justify-between gap-6 py-4 hover:text-navy"
              >
                <span className="font-medium">{service.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ice">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2 className="max-w-[18ch] text-3xl font-medium leading-[1.08] tracking-normal md:text-5xl">
              {t.stepsTitle}
            </h2>
          </Reveal>
          <Stagger className="mt-10 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <article key={step.index} className="bg-ice p-5">
                <p className="font-mono text-sm text-orange-deep">{step.index}</p>
                <h3 className="mt-6 text-lg font-medium">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
              </article>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-10 md:py-24">
          <div className="grid items-end gap-8 md:grid-cols-[1fr_1fr]">
          <Reveal>
            <h2 className="max-w-[16ch] text-3xl font-medium leading-[1.08] tracking-normal md:text-5xl">
              {t.survey.title}
            </h2>
          </Reveal>
          <p className="max-w-[65ch] text-base leading-relaxed text-muted">
            {t.survey.lede}
          </p>
          </div>
          <div className="mt-10">
            <CaseRail items={projects} />
          </div>
          <div className="mt-14">
            <Stats />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-24">
          <Reveal>
            <h2 className="text-3xl font-medium tracking-normal md:text-4xl">
              {t.faqTitle}
            </h2>
          </Reveal>
          <div>
            {faqs.map((item) => (
              <details key={item.q} className="group border-b border-line py-2">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-start text-base font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-lg text-orange-deep transition-transform duration-300 ease-out-expo group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-[65ch] pb-4 text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy text-ice">
        <div className="absolute inset-0">
          <Photo
            src="/images/riyadh.jpg"
            alt=""
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>
        <div className="relative mx-auto grid max-w-[1400px] items-end gap-8 px-4 py-16 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-24">
          <div>
            <h2 className="max-w-[16ch] text-3xl font-medium leading-[1.08] tracking-normal md:text-5xl">
              {t.book.title}
            </h2>
            <p className="mt-5 max-w-[58ch] text-base leading-relaxed text-ice/85">
              {t.book.body}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[5px] bg-paper px-5 text-sm font-medium uppercase tracking-normal text-navy hover:bg-ice"
            >
              {t.book.survey}
            </Link>
            <a
              href="tel:+966532980149"
              className="inline-flex h-12 items-center justify-center rounded-[5px] border border-white/50 px-5 text-sm font-medium uppercase tracking-normal text-white hover:bg-white/10"
            >
              {t.book.call}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
