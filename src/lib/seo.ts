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
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  alt?: string;
}): Metadata {
  const canonical = absoluteUrl(locale, path);
  const en = absoluteUrl("en", path);
  const ar = absoluteUrl("ar", path);
  const ogLocale = locale === "ar" ? "ar_SA" : "en_SA";
  const imageUrl = image ?? `/og?locale=${locale}&title=${encodeURIComponent(title)}`;
  const imageAlt = alt ?? title;

  return {
    title,
    description,
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
      siteName: "Sysnet",
      locale: ogLocale,
      alternateLocale: locale === "ar" ? ["en_SA"] : ["ar_SA"],
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    metadataBase: new URL(company.url),
  };
}
