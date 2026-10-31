import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Noto_Naskh_Arabic, Outfit } from "next/font/google";
import { Suspense } from "react";
import type { ReactNode } from "react";
import { HeaderFallback, SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { DocumentLocale, LocaleProvider } from "@/components/locale";
import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/locale";
import { company } from "@/lib/site";
import { siteGraph } from "@/lib/schema";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-outfit",
  display: "swap",
  preload: false,
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
  preload: false,
});

const arabicSans = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600"],
  variable: "--font-arabic-sans",
  display: "swap",
  preload: false,
});

const arabicDisplay = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["600"],
  variable: "--font-arabic-display",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f4f8fb",
};

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const value = (await params).locale;
  const locale: Locale = value === "ar" ? "ar" : "en";
  const t = copy[locale];
  return {
    metadataBase: new URL(company.url),
    title: {
      default: t.meta.siteTitle,
      template: `%s | ${t.meta.brand}`,
    },
    description: t.meta.siteDescription,
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : undefined,
    openGraph: {
      title: t.meta.ogTitle,
      description: t.meta.ogDescription,
      siteName: t.meta.brand,
      locale: locale === "ar" ? "ar_SA" : "en_SA",
      alternateLocale: locale === "ar" ? ["en_SA"] : ["ar_SA"],
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const value = (await params).locale;
  if (value !== "en" && value !== "ar") notFound();
  const locale: Locale = value;
  const arabic = locale === "ar";

  return (
    <html
      lang={locale}
      dir={arabic ? "rtl" : "ltr"}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${outfit.variable} ${plex.variable} ${arabicSans.variable} ${arabicDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full w-full min-w-0 flex-col bg-paper font-sans text-ink">
        <Script
          id="document-boot"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!reduce)document.documentElement.dataset.motion="on";var p=location.pathname;if(p==="/ar"||p.indexOf("/ar/")===0){document.documentElement.lang="ar";document.documentElement.dir="rtl";}}catch(e){}})();',
          }}
        />
        <Suspense fallback={<HeaderFallback />}>
          <LocalizedDocument locale={locale}>{children}</LocalizedDocument>
        </Suspense>
        <Analytics />
        <JsonLd data={siteGraph()} />
      </body>
    </html>
  );
}

async function LocalizedDocument({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
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
        <SiteFooter locale={locale} />
      </div>
    </LocaleProvider>
  );
}
