import type { Metadata } from "next";
import { PageHero } from "@/components/brand";
import { DocumentTitle } from "@/components/locale";
import { copy } from "@/lib/copy";
import { getLocale } from "@/lib/locale.server";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Sysnet handles survey requests sent from this website.",
};

export default async function PrivacyPage() {
  const page = copy[await getLocale()];
  const t = page.privacy;

  return (
    <>
      <DocumentTitle title={`${page.meta.privacyTitle} · ${page.meta.brand}`} />
      <PageHero title={t.title} lede={t.lede} />
      <article className="mx-auto max-w-[65ch] space-y-4 px-4 py-16 text-base leading-relaxed text-muted md:px-10">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </>
  );
}
