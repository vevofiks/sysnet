"use client";

import { useSyncExternalStore } from "react";
import { prefersMotion } from "@/lib/motion-pref";

function subscribe(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", onStoreChange);
  return () => media.removeEventListener("change", onStoreChange);
}

/** False during SSR so markup stays visible, then the real preference after hydration. */
export function useMotionReady() {
  return useSyncExternalStore(subscribe, prefersMotion, () => false);
}
