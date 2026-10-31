import type { Metadata } from "next";
import { PageHero } from "@/components/brand";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DocumentTitle } from "@/components/locale";
import { JsonLd } from "@/components/json-ld";
import { copy } from "@/lib/copy";
import { parseLocale } from "@/lib/locale";
import { breadcrumbSchema } from "@/lib/schema";
import { documentTitle, pageMeta } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const t = copy[locale];
  return pageMeta({
    locale,
    path: "/privacy",
    title: t.meta.privacyTitle,
    description: t.meta.privacyDescription,
  });
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = parseLocale((await params).locale);
  const page = copy[locale];
  const t = page.privacy;

  return (
    <>
      <DocumentTitle title={documentTitle(page.meta.privacyTitle, page.meta.brand)} />
      <JsonLd
        data={breadcrumbSchema(
          [
            { name: page.nav.home, path: "/" },
            { name: page.nav.privacy, path: "/privacy" },
          ],
          locale,
        )}
      />
      <Breadcrumbs
        locale={locale}
        label={page.a11y.breadcrumb}
        items={[{ name: page.nav.home, path: "/" }, { name: page.nav.privacy }]}
      />
      <PageHero title={t.title} lede={t.lede} />
      <article className="mx-auto max-w-[65ch] space-y-4 px-4 py-16 text-base leading-relaxed text-muted md:px-10">
        {t.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </>
  );
}
