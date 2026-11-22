import { createImageUrlBuilder } from "@sanity/image-url";
import { projectId, dataset, isSanityConfigured } from "./env";

const imageBuilder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

export function urlFor(source: any) {
  if (!imageBuilder || !source) return null;
  return imageBuilder.image(source);
}
