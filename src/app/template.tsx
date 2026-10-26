"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { useMotionReady } from "@/lib/use-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Template({ children }: { children: ReactNode }) {
  const on = useMotionReady();

  return (
    <motion.div
      key={on ? "motion" : "still"}
      initial={on ? { y: 16 } : false}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.div>
  );
}
