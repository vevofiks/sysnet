import { createClient } from "next-sanity";
import { draftMode } from "next/headers";
import { projectId, dataset, apiVersion, isSanityConfigured } from "./env";

export { projectId, dataset, apiVersion, isSanityConfigured };

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      stega: {
        studioUrl: "/studio",
      },
    })
  : null;

export async function getSanityClient() {
  if (!isSanityConfigured) return null;

  let isDraft = false;
  try {
    const draft = await draftMode();
    isDraft = draft.isEnabled;
  } catch {
    // Outside of request context
  }

  const token = process.env.SANITY_API_READ_TOKEN;

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !isDraft,
    perspective: isDraft ? "previewDrafts" : "published",
    token: isDraft && token ? token : undefined,
    stega: {
      enabled: isDraft,
      studioUrl: "/studio",
    },
  });
}
