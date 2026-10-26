import type { MetadataRoute } from "next";
import { company } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/services", "/projects", "/contact", "/privacy", "/terms"];
  return paths.map((path) => ({
    url: `${company.url}${path || "/"}`,
    lastModified: new Date("2026-10-15"),
  }));
}
