"use client";

import { useLayoutEffect, useState } from "react";
import { prefersMotion } from "@/lib/motion-pref";

/** False during SSR so markup stays visible, then true before the first paint when motion should run. */
export function useMotionReady() {
  const [ready, setReady] = useState(false);
  useLayoutEffect(() => {
    setReady(true);
  }, []);
  return ready && prefersMotion();
}
