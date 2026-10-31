"use client";

import { useEffect, useState, type ComponentType } from "react";
import type { LogoItem, LogoLoopProps } from "@/components/logo-loop";

const logos: LogoItem[] = [
  { src: "/logos/l1.webp", alt: "EZVIZ", width: 400, height: 115 },
  { src: "/logos/l2.webp", alt: "IDIS", width: 400, height: 178 },
  { src: "/logos/l3.webp", alt: "Dahua", width: 400, height: 127 },
  { src: "/logos/l4.webp", alt: "Hikvision", width: 400, height: 59 },
  { src: "/logos/l5.webp", alt: "IMOU", width: 400, height: 105 },
  { src: "/logos/l6.webp", alt: "Samsung", width: 400, height: 140 },
];

export function BrandLoop({ label, rtl }: { label: string; rtl: boolean }) {
  const [Loop, setLoop] = useState<ComponentType<LogoLoopProps> | null>(null);

  useEffect(() => {
    let alive = true;
    const load = () => {
      void import("@/components/logo-loop").then((mod) => {
        if (alive) setLoop(() => mod.LogoLoop);
      });
    };
    const idle = window.requestIdleCallback?.(load, { timeout: 2000 });
    const timer = idle == null ? window.setTimeout(load, 400) : undefined;
    return () => {
      alive = false;
      if (idle != null) window.cancelIdleCallback?.(idle);
      if (timer != null) window.clearTimeout(timer);
    };
  }, []);

  if (!Loop) return <div className="h-12" aria-hidden="true" />;

  return (
    <Loop
      logos={logos}
      speed={64}
      direction={rtl ? "right" : "left"}
      logoHeight={36}
      gap={88}
      pauseOnHover
      fadeOut
      fadeOutWidth={0.26}
      ariaLabel={label}
    />
  );
}
