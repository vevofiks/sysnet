"use client";

import { useEffect, useRef } from "react";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { useCopy } from "@/components/locale";
import { prefersMotion } from "@/lib/motion-pref";
import { stats } from "@/lib/site";

const icons = [ShieldCheck, CheckCircle2, Zap];

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
      className="grid grid-cols-1 gap-6 sm:grid-cols-3"
    >
      {stats.map((stat, index) => {
        const Icon = icons[index] ?? ShieldCheck;
        return (
          <div
            key={stat.value}
            className="group relative overflow-hidden rounded-[20px] border border-line bg-white p-8 shadow-sm transition-all duration-300 hover:border-navy hover:shadow-lift"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-orange-deep font-semibold">
                Metric 0{index + 1}
              </span>
              <Icon className="size-5 text-navy/70 group-hover:text-navy transition-colors" />
            </div>
            <dt className="mt-4 font-mono text-5xl font-medium tracking-normal text-navy">
              <span data-count={stat.value}>{stat.value}</span>
              <span className="text-orange-deep text-4xl">+</span>
            </dt>
            <dd className="mt-3 text-sm leading-relaxed text-muted">
              {labels[index]}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
