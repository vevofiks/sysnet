import type { MetadataRoute } from "next";
import { locales } from "@/lib/locale";
import { absoluteUrl } from "@/lib/paths";
import { services } from "@/lib/site";

type SitemapItemConfig = {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-12T10:00:00.000Z");

  // Core static routes with customized search priorities
  const routes: SitemapItemConfig[] = [
    { path: "/", changeFrequency: "daily", priority: 1.0 },
    { path: "/services", changeFrequency: "weekly", priority: 0.9 },
    ...services.map((service) => {
      // High-priority core low-current services in Riyadh
      const isTopService = [
        "cctv",
        "cabling",
        "access",
        "fire-alarm",
        "intercom",
      ].includes(service.slug);

      return {
        path: `/services/${service.slug}`,
        changeFrequency: "weekly" as const,
        priority: isTopService ? 0.9 : 0.85,
      };
    }),
    { path: "/projects", changeFrequency: "weekly", priority: 0.8 },
    { path: "/contact", changeFrequency: "weekly", priority: 0.85 },
    { path: "/about", changeFrequency: "monthly", priority: 0.75 },
    { path: "/privacy", changeFrequency: "monthly", priority: 0.3 },
    { path: "/terms", changeFrequency: "monthly", priority: 0.3 },
  ];

  return routes.flatMap(({ path, changeFrequency, priority }) =>
    locales.map((locale) => ({
      url: absoluteUrl(locale, path),
      lastModified,
      changeFrequency,
      priority,
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
