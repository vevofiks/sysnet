import type { Metadata } from "next";
import { PageHero } from "@/components/brand";
import { DocumentTitle } from "@/components/locale";
import { copy } from "@/lib/copy";
import { getLocale } from "@/lib/locale.server";

export const metadata: Metadata = {
  title: "Terms",
  description: "How a Sysnet quote becomes a confirmed job.",
};

export default async function TermsPage() {
  const page = copy[await getLocale()];
  const t = page.terms;

  return (
    <>
      <DocumentTitle title={`${page.meta.termsTitle} · ${page.meta.brand}`} />
      <PageHero title={t.title} lede={t.lede} />
      <article className="mx-auto max-w-[65ch] space-y-4 px-4 py-16 text-base leading-relaxed text-muted md:px-10">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </>
  );
}
