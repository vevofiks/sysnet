import type { Locale } from "@/lib/locale";
import { absoluteUrl } from "@/lib/paths";
import { company } from "@/lib/site";

const businessId = `${company.url}/#business`;
const orgId = `${company.url}/#organization`;

const areaServed = [
  { "@type": "Country", name: "Saudi Arabia" },
  { "@type": "City", name: "Riyadh" },
  { "@type": "City", name: "Dammam" },
];

const address = {
  "@type": "PostalAddress",
  streetAddress: "Malaz",
  addressLocality: "Riyadh",
  addressRegion: "Riyadh",
  addressCountry: "SA",
};

const hours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
  opens: "09:00",
  closes: "18:00",
};

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": businessId,
        name: "Sysnet",
        alternateName: ["Sysnet Technology", company.legal],
        url: company.url,
        telephone: company.phoneTel,
        email: company.email,
        image: `${company.url}/images/pair.jpg`,
        logo: `${company.url}/logo-mark.png`,
        address,
        openingHoursSpecification: hours,
        areaServed,
        parentOrganization: { "@id": orgId },
      },
      {
        "@type": "Organization",
        "@id": orgId,
        name: company.legal,
        alternateName: "Sysnet",
        url: company.url,
        logo: `${company.url}/logo-mark.png`,
        email: company.email,
        telephone: company.phoneTel,
        address,
      },
      {
        "@type": "WebSite",
        "@id": `${company.url}/#website`,
        url: company.url,
        name: "Sysnet",
        inLanguage: ["en", "ar"],
        publisher: { "@id": orgId },
      },
    ],
  };
}

export function serviceSchema({
  locale,
  path,
  name,
  description,
}: {
  locale: Locale;
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(locale, path),
    serviceType: name,
    areaServed,
    provider: { "@id": businessId },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
  locale: Locale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
