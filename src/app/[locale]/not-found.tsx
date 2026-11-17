import type { Metadata } from "next";
import { headers } from "next/headers";
import { DocumentTitle } from "@/components/locale";
import { NotFoundView } from "@/components/not-found-view";
import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/locale";
import { documentTitle } from "@/lib/seo";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const value = (await headers()).get("x-locale");
  const locale: Locale = value === "ar" ? "ar" : "en";
  const page = copy[locale];

  return (
    <>
      <DocumentTitle title={documentTitle(page.notFound.title, page.meta.brand)} />
      <NotFoundView locale={locale} />
    </>
  );
}
