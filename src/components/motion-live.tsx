"use client";

import { Children, type ReactNode } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useLocale } from "@/components/locale";

const ease = [0.16, 1, 0.3, 1] as const;
const view = { once: true, amount: 0.3 } as const;

export function LiveReveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const rtl = useLocale() === "ar";
  const items = Children.toArray(children);

  return (
    <LazyMotion features={domAnimation} strict>
      <div className={className}>
        {items.map((child, index) => (
          <m.div
            key={index}
            initial={{
              opacity: 0,
              x: index === 0 ? (rtl ? 72 : -72) : 0,
              y: index === 0 ? 0 : 40,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={view}
            transition={{ duration: 0.9, delay: index * 0.08, ease }}
          >
            {child}
          </m.div>
        ))}
      </div>
    </LazyMotion>
  );
}

export function LiveStagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const items = Children.toArray(children);

  return (
    <LazyMotion features={domAnimation} strict>
      <div className={className}>
        {items.map((child, index) => (
          <m.div
            key={index}
            className="h-full min-w-0 [&>*]:h-full"
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: index * 0.07, ease }}
          >
            {child}
          </m.div>
        ))}
      </div>
    </LazyMotion>
  );
}

export function LiveFade({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        className={className}
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={view}
        transition={{ duration: 1.05, ease }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
