import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Noto_Naskh_Arabic, Outfit } from "next/font/google";
import { Suspense } from "react";
import type { ReactNode } from "react";
import { HeaderFallback, SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { DocumentLocale, LocaleProvider } from "@/components/locale";
import { copy } from "@/lib/copy";
import { getLocale } from "@/lib/locale.server";
import { company } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

const arabicSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-arabic-sans",
  display: "swap",
});

const arabicDisplay = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["500", "600", "700"],
  variable: "--font-arabic-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4f8fb",
};

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: "Sysnet — CCTV, fire alarm, and cabling in Riyadh",
    template: "%s · Sysnet",
  },
  description:
    "Sysnet, Adam Al Arabia Company, surveys and installs CCTV, intercom, fire alarm, access control, and network cabling from a desk in Malaz, Riyadh.",
  openGraph: {
    title: "Sysnet — CCTV, fire alarm, and cabling in Riyadh",
    description:
      "Site surveys, parts lists, and installation for cameras, alarms, and structured cabling in Riyadh.",
    url: company.url,
    siteName: "Sysnet",
    locale: "en_SA",
    type: "website",
    images: [{ url: "/images/pair.jpg", alt: "Bullet cameras mounted on a concrete wall" }],
  },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sysnet",
  alternateName: company.legal,
  url: company.url,
  telephone: company.phoneTel,
  email: company.email,
  image: `${company.url}/images/pair.jpg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Malaz",
    addressLocality: "Riyadh",
    addressRegion: "Riyadh",
    addressCountry: "SA",
  },
  areaServed: "Riyadh",
  parentOrganization: {
    "@type": "Organization",
    name: company.legal,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${outfit.variable} ${plex.variable} ${arabicSans.variable} ${arabicDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full w-full min-w-0 flex-col bg-paper font-sans text-ink">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;var embedded=navigator.userAgent.indexOf("Cursor/")!==-1;if(!reduce||embedded)document.documentElement.dataset.motion="on";var m=document.cookie.match(/(?:^|; )lang=(ar)/);if(m){document.documentElement.lang="ar";document.documentElement.dir="rtl";}}catch(e){}})();',
          }}
        />
        <Suspense fallback={<HeaderFallback />}>
          <LocalizedDocument>{children}</LocalizedDocument>
        </Suspense>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </body>
    </html>
  );
}

async function LocalizedDocument({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const t = copy[locale];
  const arabic = locale === "ar";

  return (
    <LocaleProvider locale={locale}>
      <DocumentLocale locale={locale} />
      <div
        lang={locale}
        dir={arabic ? "rtl" : "ltr"}
        className={`flex min-h-full w-full min-w-0 max-w-full flex-1 flex-col ${arabic ? "font-arabic" : "font-sans"}`}
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-card focus:px-4 focus:py-2"
        >
          {t.a11y.skip}
        </a>
        <Suspense fallback={<HeaderFallback />}>
          <SiteHeader />
        </Suspense>
        <main id="content" className="w-full min-w-0 flex-1">
          {children}
        </main>
        <SiteFooter />
      </div>
    </LocaleProvider>
  );
}
