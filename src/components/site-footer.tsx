import Link from "next/link";
import { Logo } from "@/components/brand";
import { content } from "@/lib/content";
import { getLocale } from "@/lib/locale.server";
import { company } from "@/lib/site";

export async function SiteFooter() {
  const { t, services } = content(await getLocale());

  return (
    <footer className="bg-navy-deep text-ice">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] md:px-10">
        <div>
          <Link href="/" aria-label={t.a11y.home} className="inline-flex rounded-sm">
            <Logo tone="ice" />
          </Link>
          <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-ice/75">{t.footer.blurb}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-white">{t.nav.servicesHeading}</p>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-sm text-ice/80 hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-white">{t.nav.company}</p>
          <ul className="mt-4 space-y-2 text-sm text-ice/80">
            <li>
              <Link href="/about" className="hover:text-white">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-white">
                {t.nav.projects}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                {t.nav.contact}
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                {t.nav.privacy}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                {t.nav.terms}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-white">{t.nav.desk}</p>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-ice/80">
            <p>{t.company.address}</p>
            <p>
              <a className="hover:text-white" href={`tel:${company.phoneTel}`} dir="ltr">
                {company.phoneDisplay}
              </a>
            </p>
            <p>
              <a className="hover:text-white" href={`mailto:${company.email}`} dir="ltr">
                {company.email}
              </a>
            </p>
            <p>{t.company.hours}</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-5 text-xs text-ice/55 md:flex-row md:items-center md:justify-between md:px-10">
          <p>{t.company.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
