import type { Metadata } from "next";
import type { Locale } from "@/lib/locale";
import { absoluteUrl } from "@/lib/paths";
import { company } from "@/lib/site";

export function documentTitle(title: string, brand: string) {
  return title.includes("|") ? title : `${title} | ${brand}`;
}

export function pageMeta({
  locale,
  path,
  title,
  description,
  image,
  alt,
  keywords,
  category = "Low Current & Security Systems",
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
  keywords?: string[];
  category?: string;
}): Metadata {
  const canonical = absoluteUrl(locale, path);
  const en = absoluteUrl("en", path);
  const ar = absoluteUrl("ar", path);
  const ogLocale = locale === "ar" ? "ar_SA" : "en_SA";
  const altOgLocale = locale === "ar" ? "en_SA" : "ar_SA";
  const imageUrl = image ?? `${company.url}/og?locale=${locale}&title=${encodeURIComponent(title)}`;
  const imageAlt = alt ?? title;

  return {
    metadataBase: new URL(company.url),
    title,
    description,
    ...(keywords && keywords.length > 0 ? { keywords } : {}),
    authors: [{ name: "Sysnet - Adam Al Arabia Company", url: company.url }],
    creator: "Sysnet Technology",
    publisher: "Sysnet - Adam Al Arabia Company",
    category,
    manifest: "/manifest.webmanifest",
    icons: {
      icon: "/favicon.ico",
      apple: "/logo-mark.png",
      shortcut: "/favicon.ico",
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    alternates: {
      canonical,
      languages: {
        en,
        ar,
        "en-SA": en,
        "ar-SA": ar,
        "x-default": en,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Sysnet Technology",
      locale: ogLocale,
      alternateLocale: [altOgLocale],
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
