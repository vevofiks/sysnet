"use client";

import { Children, type ReactNode } from "react";
import { motion } from "framer-motion";
import { useLocale } from "@/components/locale";
import { useMotionReady } from "@/lib/use-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const view = { once: true, amount: 0.3 } as const;

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const on = useMotionReady();
  const rtl = useLocale() === "ar";
  const items = Children.toArray(children);

  if (!on) return <div className={className}>{children}</div>;

  return (
    <div className={className}>
      {items.map((child, index) => (
        <motion.div
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
        </motion.div>
      ))}
    </div>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const on = useMotionReady();
  const items = Children.toArray(children);

  if (!on) return <div className={className}>{children}</div>;

  return (
    <div className={className}>
      {items.map((child, index) => (
        <motion.div
          key={index}
          className="h-full min-w-0 [&>*]:h-full"
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, delay: index * 0.07, ease }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export function Fade({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const on = useMotionReady();

  if (!on) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 1.04 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={view}
      transition={{ duration: 1.05, ease }}
    >
      {children}
    </motion.div>
  );
}
