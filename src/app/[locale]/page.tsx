import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { DocumentTitle } from "@/components/locale";
import { JsonLd } from "@/components/json-ld";
import { copy } from "@/lib/copy";
import { parseLocale } from "@/lib/locale";
import { homePageGraph } from "@/lib/schema";
import { documentTitle, pageMeta } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = parseLocale((await params).locale);
  const t = copy[locale];
  return {
    ...pageMeta({
      locale,
      path: "/",
      title: t.meta.homeTitle,
      description: t.meta.homeDescription,
    }),
    title: { absolute: documentTitle(t.meta.homeTitle, t.meta.brand) },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const locale = parseLocale((await params).locale);
  const t = copy[locale];
  return (
    <>
      <DocumentTitle title={documentTitle(t.meta.homeTitle, t.meta.brand)} />
      <JsonLd data={homePageGraph(locale)} />
      <Landing locale={locale} />
    </>
  );
}
