"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type ReactNode } from "react";
import { useMotionReady } from "@/lib/use-motion";

const MotionShell = dynamic(
  () => import("./template-motion").then((mod) => mod.MotionShell),
  { ssr: false },
);

let clientReady = false;

export default function Template({ children }: { children: ReactNode }) {
  const on = useMotionReady();
  const [animate] = useState(() => clientReady);

  useEffect(() => {
    clientReady = true;
  }, []);

  if (!on || !animate) return children;
  return <MotionShell>{children}</MotionShell>;
}
