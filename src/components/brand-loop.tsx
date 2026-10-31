"use client";

import { LogoLoop, type LogoItem } from "@/components/logo-loop";

const logos: LogoItem[] = [
  { src: "/logos/l1.webp", alt: "EZVIZ", width: 400, height: 115 },
  { src: "/logos/l2.webp", alt: "IDIS", width: 400, height: 178 },
  { src: "/logos/l3.webp", alt: "Dahua", width: 400, height: 127 },
  { src: "/logos/l4.webp", alt: "Hikvision", width: 400, height: 59 },
  { src: "/logos/l5.webp", alt: "IMOU", width: 400, height: 105 },
  { src: "/logos/l6.webp", alt: "Samsung", width: 400, height: 140 },
];

export function BrandLoop({ label, rtl }: { label: string; rtl: boolean }) {
  return (
    <LogoLoop
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
