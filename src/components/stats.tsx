"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { useCopy } from "@/components/locale";
import { useMotionReady } from "@/lib/use-motion";
import { stats } from "@/lib/site";

export function Stats() {
  const ref = useRef<HTMLDListElement>(null);
  const labels = useCopy().stats;
  const on = useMotionReady();
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const root = ref.current;
    if (!on || !inView || !root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
    const controls = nodes.map((node) => {
      const target = Number(node.dataset.count ?? "0");
      return animate(0, target, {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => {
          node.textContent = String(Math.round(value));
        },
      });
    });
    return () => controls.forEach((control) => control.stop());
  }, [on, inView]);

  return (
    <dl
      ref={ref}
      className="grid grid-cols-1 divide-y divide-line border-y border-line md:grid-cols-3 md:divide-x md:divide-y-0"
    >
      {stats.map((stat, index) => (
        <div key={stat.value} className="px-2 py-8 md:px-8">
          <dt className="font-mono text-5xl font-medium tracking-normal text-navy">
            <span data-count={stat.value}>{stat.value}</span>
          </dt>
          <dd className="mt-3 max-w-[24ch] text-sm leading-relaxed text-muted">
            {labels[index]}
          </dd>
        </div>
      ))}
    </dl>
  );
}
