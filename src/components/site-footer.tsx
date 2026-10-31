import Link from "next/link";
import { Logo } from "@/components/brand";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { localePath } from "@/lib/paths";
import { company } from "@/lib/site";

async function copyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function SiteFooter({ locale }: { locale: Locale }) {
  const { t, services } = content(locale);
  const year = await copyrightYear();

  return (
    <footer className="bg-navy-deep text-ice">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] md:px-10">
        <div>
          <Link href={localePath(locale, "/")} aria-label={t.a11y.home} className="inline-flex rounded-sm">
            <Logo tone="ice" />
          </Link>
          <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-ice/75">{t.footer.blurb}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-white">{t.nav.servicesHeading}</p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={localePath(locale, `/services/${service.slug}`)}
                  className="text-sm text-ice/80 hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href={localePath(locale, "/services")} className="text-sm font-medium text-white hover:text-ice">
                {t.nav.allServices}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-white">{t.nav.company}</p>
          <ul className="mt-4 space-y-2 text-sm text-ice/80">
            <li>
              <Link href={localePath(locale, "/about")} className="hover:text-white">
                {t.nav.about}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/projects")} className="hover:text-white">
                {t.nav.projects}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/contact")} className="hover:text-white">
                {t.nav.contact}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/privacy")} className="hover:text-white">
                {t.nav.privacy}
              </Link>
            </li>
            <li>
              <Link href={localePath(locale, "/terms")} className="hover:text-white">
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
          <p>
            © {year} {t.meta.brand}. {t.company.legal}.
          </p>
        </div>
      </div>
    </footer>
  );
}
