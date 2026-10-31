"use client";

import type { ReactNode } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export function MotionShell({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.55, ease }}>
        {children}
      </m.div>
    </LazyMotion>
  );
}
