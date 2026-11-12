import { content } from "@/lib/content";
import { copy } from "@/lib/copy";
import type { Guide } from "@/lib/guides";
import type { Locale } from "@/lib/locale";
import { absoluteUrl } from "@/lib/paths";
import { company } from "@/lib/site";

export const BUSINESS_ID = `${company.url}/#business`;
export const ORG_ID = `${company.url}/#organization`;
export const WEBSITE_ID = `${company.url}/#website`;

export const areaServed = [
  { "@type": "City", name: "Riyadh" },
  { "@type": "City", name: "Dammam" },
  { "@type": "Country", name: "Saudi Arabia" },
];

export const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "Malaz District",
  addressLocality: "Riyadh",
  addressRegion: "Riyadh Province",
  postalCode: "12836",
  addressCountry: "SA",
};

export const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
  opens: "09:00",
  closes: "18:00",
};

export const geoCoordinates = {
  "@type": "GeoCoordinates",
  latitude: 24.6644,
  longitude: 46.7275,
};

export function localBusinessNode(locale: Locale) {
  const isAr = locale === "ar";
  const { services } = content(locale);

  return {
    "@type": ["LocalBusiness", "SecurityService", "ProfessionalService"],
    "@id": BUSINESS_ID,
    name: isAr ? "سيسنت للتكنولوجيا" : "Sysnet Technology",
    legalName: isAr ? "سيسنت - شركة آدم العربية" : "Sysnet - Adam Al Arabia Company",
    alternateName: isAr
      ? ["سيسنت", "سيسنت الرياض", "شركة آدم العربية"]
      : ["Sysnet", "Sysnet KSA", "Sysnet Riyadh", company.legal],
    url: company.url,
    telephone: company.phoneTel,
    email: company.email,
    logo: `${company.url}/logo-mark.png`,
    image: `${company.url}/images/cctv-featured.jpg`,
    priceRange: "$$",
    currenciesAccepted: "SAR",
    paymentAccepted: "Cash, Credit Card, Bank Wire Transfer",
    address: postalAddress,
    geo: geoCoordinates,
    hasMap: "https://maps.google.com/?q=24.6644,46.7275",
    openingHoursSpecification: openingHours,
    areaServed,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phoneTel,
        contactType: "customer service",
        areaServed: ["SA"],
        availableLanguage: ["English", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: company.phoneTel,
        contactType: "sales",
        areaServed: ["SA"],
        availableLanguage: ["English", "Arabic"],
      },
    ],
    knowsAbout: isAr
      ? [
          "تركيب كاميرات مراقبة هيكفيجن وداهوا",
          "تمديد شبكات كمبيوتر Cat6 وفايبر",
          "أجهزة بصمة وتحكم في الدخول",
          "أنظمة إنذار الحريق المعتمدة من الدفاع المدني",
          "إنتركم مرئي للفلل والمباني",
          "صيانة دورية للأنظمة الأمنية والشبكات",
        ]
      : [
          "Commercial CCTV Camera Installation",
          "Structured Cabling and Fiber Optics",
          "Biometric Access Control and Time Attendance",
          "Civil Defense Approved Fire Alarm Systems",
          "Video Intercom Systems",
          "Low Current Preventive Maintenance AMC",
        ],
    parentOrganization: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: company.legal,
      alternateName: "Sysnet",
      url: company.url,
      logo: `${company.url}/logo-mark.png`,
      email: company.email,
      telephone: company.phoneTel,
      address: postalAddress,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: isAr ? "خدمات الأنظمة الأمنية والتيار الخفيف" : "Low Current & Security Services",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: absoluteUrl(locale, `/services/${service.slug}`),
        },
        position: index + 1,
      })),
    },
  };
}

export function breadcrumbNode(
  items: { name: string; path?: string }[],
  locale: Locale,
  canonicalUrl: string,
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(locale, item.path) } : { item: canonicalUrl }),
    })),
  };
}

export function faqNode(faqs: { q: string; a: string }[], canonicalUrl: string) {
  return {
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function siteGraph(locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessNode(locale),
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: company.url,
        name: "Sysnet Technology",
        alternateName: "سيسنت للتكنولوجيا",
        inLanguage: ["en", "ar"],
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function homePageGraph(locale: Locale) {
  const canonical = absoluteUrl(locale, "/");
  const t = copy[locale];
  const { services } = content(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessNode(locale),
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: t.meta.homeTitle,
        description: t.meta.homeDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        inLanguage: locale === "ar" ? "ar-SA" : "en-SA",
      },
      faqNode(t.faqs, canonical),
      {
        "@type": "ItemList",
        "@id": `${canonical}#services`,
        name: locale === "ar" ? "خدمات سيسنت بالرياض" : "Sysnet Riyadh Services",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          url: absoluteUrl(locale, `/services/${service.slug}`),
        })),
      },
    ],
  };
}

export function aboutPageGraph(locale: Locale) {
  const canonical = absoluteUrl(locale, "/about");
  const t = copy[locale];
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessNode(locale),
      breadcrumbNode(
        [
          { name: t.nav.home, path: "/" },
          { name: t.nav.about, path: "/about" },
        ],
        locale,
        canonical,
      ),
      {
        "@type": "AboutPage",
        "@id": `${canonical}#about`,
        url: canonical,
        name: t.meta.aboutTitle,
        description: t.meta.aboutDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        inLanguage: locale === "ar" ? "ar-SA" : "en-SA",
      },
    ],
  };
}

export function servicesCatalogGraph(locale: Locale) {
  const canonical = absoluteUrl(locale, "/services");
  const t = copy[locale];
  const isAr = locale === "ar";
  const { services } = content(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessNode(locale),
      breadcrumbNode(
        [
          { name: t.nav.home, path: "/" },
          { name: t.nav.services, path: "/services" },
        ],
        locale,
        canonical,
      ),
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#collection`,
        url: canonical,
        name: t.meta.servicesTitle,
        description: t.meta.servicesDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        inLanguage: isAr ? "ar-SA" : "en-SA",
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#services-list`,
        name: isAr ? "دليل خدمات الأنظمة الأمنية والشبكات" : "Low Current & Security Services Catalog",
        description: t.meta.servicesDescription,
        numberOfItems: services.length,
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.title,
          description: service.summary,
          url: absoluteUrl(locale, `/services/${service.slug}`),
        })),
      },
    ],
  };
}

export function serviceDetailGraph({
  locale,
  slug,
  name,
  description,
  guide,
}: {
  locale: Locale;
  slug: string;
  name: string;
  description: string;
  guide: Guide;
}) {
  const canonical = absoluteUrl(locale, `/services/${slug}`);
  const t = copy[locale];

  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessNode(locale),
      breadcrumbNode(
        [
          { name: t.nav.home, path: "/" },
          { name: t.nav.services, path: "/services" },
          { name, path: `/services/${slug}` },
        ],
        locale,
        canonical,
      ),
      {
        "@type": "Service",
        "@id": `${canonical}#service`,
        name,
        serviceType: guide.h1,
        description,
        url: canonical,
        areaServed,
        provider: { "@id": BUSINESS_ID },
        offers: {
          "@type": "Offer",
          priceCurrency: "SAR",
          availability: "https://schema.org/InStock",
          areaServed,
        },
      },
      faqNode(guide.faq, canonical),
    ],
  };
}

export function projectsGraph(locale: Locale) {
  const canonical = absoluteUrl(locale, "/projects");
  const t = copy[locale];
  const isAr = locale === "ar";
  const { projects } = content(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessNode(locale),
      breadcrumbNode(
        [
          { name: t.nav.home, path: "/" },
          { name: t.nav.projects, path: "/projects" },
        ],
        locale,
        canonical,
      ),
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#projects`,
        url: canonical,
        name: t.meta.projectsTitle,
        description: t.meta.projectsDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        inLanguage: isAr ? "ar-SA" : "en-SA",
      },
      {
        "@type": "ItemList",
        "@id": `${canonical}#projects-list`,
        name: isAr ? "مشاريع سيسنت الميدانية المنفذة" : "Verified Sysnet Field Projects in Riyadh",
        itemListElement: projects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          description: project.summary,
          url: absoluteUrl(locale, `/projects#${project.slug}`),
        })),
      },
    ],
  };
}

export function contactPageGraph(locale: Locale) {
  const canonical = absoluteUrl(locale, "/contact");
  const t = copy[locale];
  const isAr = locale === "ar";
  return {
    "@context": "https://schema.org",
    "@graph": [
      localBusinessNode(locale),
      breadcrumbNode(
        [
          { name: t.nav.home, path: "/" },
          { name: t.nav.contact, path: "/contact" },
        ],
        locale,
        canonical,
      ),
      {
        "@type": "ContactPage",
        "@id": `${canonical}#contact`,
        url: canonical,
        name: t.meta.contactTitle,
        description: t.meta.contactDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        inLanguage: isAr ? "ar-SA" : "en-SA",
      },
      faqNode(t.faqs, canonical),
    ],
  };
}

// Backwards-compatible standalone schemas
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
    provider: { "@id": BUSINESS_ID },
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
