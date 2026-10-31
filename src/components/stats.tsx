"use client";

import { useEffect, useRef } from "react";
import { useCopy } from "@/components/locale";
import { prefersMotion } from "@/lib/motion-pref";
import { stats } from "@/lib/site";

export function Stats() {
  const ref = useRef<HTMLDListElement>(null);
  const labels = useCopy().stats;

  useEffect(() => {
    const root = ref.current;
    if (!root || !prefersMotion()) return;
    let stopped = false;
    const stops: Array<() => void> = [];
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        void import("framer-motion").then(({ animate }) => {
          if (stopped) return;
          const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
          for (const node of nodes) {
            const target = Number(node.dataset.count ?? "0");
            const controls = animate(0, target, {
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              onUpdate: (value) => {
                node.textContent = String(Math.round(value));
              },
            });
            stops.push(() => controls.stop());
          }
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(root);
    return () => {
      stopped = true;
      observer.disconnect();
      stops.forEach((stop) => stop());
    };
  }, []);

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
