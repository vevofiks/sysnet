"use client";

import { useEffect, useRef } from "react";

export function ContactMap({ src, title }: { src: string; title: string }) {
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const el = frame.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || !frame.current) return;
        frame.current.src = src;
        observer.disconnect();
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <iframe
      ref={frame}
      title={title}
      className="h-[420px] w-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
