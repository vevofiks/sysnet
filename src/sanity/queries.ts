import { client, isSanityConfigured } from "./client";
import { urlFor } from "./image";

export interface SanityNotFoundData {
  titleEn?: string;
  titleAr?: string;
  subtitleEn?: string;
  subtitleAr?: string;
  backgroundImageUrl?: string | null;
  homeButtonTextEn?: string;
  homeButtonTextAr?: string;
  productsButtonTextEn?: string;
  productsButtonTextAr?: string;
}

export async function getNotFoundData(): Promise<SanityNotFoundData | null> {
  if (!isSanityConfigured || !client) return null;

  try {
    const data = await client.fetch(
      `*[_type == "notFoundPage"][0]{
        titleEn,
        titleAr,
        subtitleEn,
        subtitleAr,
        backgroundImage,
        homeButtonTextEn,
        homeButtonTextAr,
        productsButtonTextEn,
        productsButtonTextAr
      }`
    );

    if (!data) return null;

    let backgroundImageUrl: string | null = null;
    if (data.backgroundImage) {
      const builder = urlFor(data.backgroundImage);
      if (builder) {
        backgroundImageUrl = builder.width(1920).quality(85).url();
      }
    }

    return {
      ...data,
      backgroundImageUrl,
    };
  } catch (error) {
    console.warn("Notice: Sanity query returned an error or is unconfigured:", error);
    return null;
  }
}
