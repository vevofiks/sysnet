import { draftMode } from "next/headers";
import { Hero } from "@/components/hero";
import { HeroLead } from "@/components/hero-lead";
import { HomeRest } from "@/components/home-rest";
import { JsonLd } from "@/components/json-ld";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { faqSchema } from "@/lib/schema";
import { getHomePageData } from "@/sanity/queries";

export async function Landing({ locale }: { locale: Locale }) {
  const { faqs } = content(locale);
  const sanityData = await getHomePageData(locale);
  let isDraft = false;
  try {
    const draft = await draftMode();
    isDraft = draft.isEnabled;
  } catch {}

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Hero isDraft={isDraft}>
        <HeroLead locale={locale} sanityData={sanityData} />
      </Hero>
      <HomeRest locale={locale} sanityData={sanityData} />
    </>
  );
}
