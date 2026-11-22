import type { Metadata } from "next";
import { headers } from "next/headers";
import { DocumentTitle } from "@/components/locale";
import { NotFoundView } from "@/components/not-found-view";
import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/locale";
import { documentTitle } from "@/lib/seo";
import { getNotFoundData } from "@/sanity/queries";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const value = (await headers()).get("x-locale");
  const locale: Locale = value === "ar" ? "ar" : "en";
  const page = copy[locale];

  // Fetch optional Sanity data (falls back seamlessly if not configured)
  const sanityData = await getNotFoundData();

  const title = locale === "ar"
    ? (sanityData?.titleAr || page.notFound.title)
    : (sanityData?.titleEn || page.notFound.title);

  return (
    <>
      <DocumentTitle title={documentTitle(title, page.meta.brand)} />
      <NotFoundView locale={locale} sanityData={sanityData} />
    </>
  );
}
