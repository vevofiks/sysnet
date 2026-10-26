import { copy, type Copy } from "@/lib/copy";
import type { Locale } from "@/lib/locale";
import { industries, projects, services, stats, steps } from "@/lib/site";

export function content(locale: Locale) {
  const t = copy[locale];
  return {
    t,
    services: services.map((service) => ({
      ...service,
      ...t.services[service.slug as keyof Copy["services"]],
    })),
    industries: industries.map((item, index) => ({
      ...item,
      ...t.industries[index],
    })),
    steps: steps.map((item, index) => ({
      ...item,
      ...t.steps[index],
    })),
    projects: projects.map((project) => ({
      ...project,
      ...t.projects[project.slug as keyof Copy["projects"]],
    })),
    faqs: t.faqs,
    stats: stats.map((item, index) => ({
      ...item,
      label: t.stats[index] ?? item.label,
    })),
  };
}
