import type { Metadata } from "next";
import Link from "next/link";
import { BulletList } from "@/components/bullet-list";
import { PageHero, Photo } from "@/components/brand";
import { DocumentTitle } from "@/components/locale";
import { content } from "@/lib/content";
import { getLocale } from "@/lib/locale.server";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Typical Sysnet scopes in Riyadh: warehouse CCTV, Olaya cabling, a Malaz villa gate, and a clinic fire panel.",
};

export default async function ProjectsPage() {
  const { t, projects } = content(await getLocale());

  return (
    <>
      <DocumentTitle title={`${t.meta.projectsTitle} · ${t.meta.brand}`} />
      <PageHero title={t.projectsPage.title} lede={t.projectsPage.lede} />
      <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-10">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            id={project.slug}
            className="grid items-center gap-8 border-b border-line py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20"
          >
            <div className={index % 2 ? "md:order-2" : ""}>
              <h2 className="max-w-[20ch] text-3xl font-medium tracking-normal md:text-4xl">
                {project.title}
              </h2>
              <p className="mt-4 max-w-[65ch] text-base leading-relaxed text-muted">{project.summary}</p>
              <BulletList className="mt-6" items={project.facts} />
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-[18px]">
              <Photo src={project.image} alt={project.alt} sizes="(min-width: 768px) 40vw, 100vw" />
            </div>
          </article>
        ))}
        <p className="py-12 text-sm text-muted">
          {t.projectsPage.prompt}{" "}
          <Link href="/contact" className="font-medium text-navy">
            {t.projectsPage.link}
          </Link>
        </p>
      </div>
    </>
  );
}
