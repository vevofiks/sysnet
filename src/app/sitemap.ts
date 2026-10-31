import type { MetadataRoute } from "next";
import { locales } from "@/lib/locale";
import { absoluteUrl } from "@/lib/paths";
import { services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/about",
    "/services",
    ...services.map((service) => `/services/${service.slug}`),
    "/projects",
    "/contact",
    "/privacy",
    "/terms",
  ];
  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: absoluteUrl(locale, path),
      lastModified: new Date("2026-10-31"),
      alternates: {
        languages: {
          en: absoluteUrl("en", path),
          ar: absoluteUrl("ar", path),
          "en-SA": absoluteUrl("en", path),
          "ar-SA": absoluteUrl("ar", path),
          "x-default": absoluteUrl("en", path),
        },
      },
    })),
  );
}
