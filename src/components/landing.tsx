import { Hero } from "@/components/hero";
import { HeroLead } from "@/components/hero-lead";
import { HomeRest } from "@/components/home-rest";
import { JsonLd } from "@/components/json-ld";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/locale";
import { faqSchema } from "@/lib/schema";

export async function Landing({ locale }: { locale: Locale }) {
  const { faqs } = content(locale);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <Hero>
        <HeroLead locale={locale} />
      </Hero>
      <HomeRest locale={locale} />
    </>
  );
}
