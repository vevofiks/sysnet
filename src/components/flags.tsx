"use client";

import { useId } from "react";
import type { Locale } from "@/lib/locale";

export function Flag({ locale }: { locale: Locale }) {
  return (
    <span className="inline-flex h-4 w-6 shrink-0 overflow-hidden rounded-[2px] ring-1 ring-navy/20">
      {locale === "ar" ? <SaudiFlag /> : <UkFlag />}
    </span>
  );
}

function SaudiFlag() {
  return (
    <svg viewBox="0 0 24 16" className="h-full w-full" aria-hidden="true">
      <rect width="24" height="16" fill="#006C35" />
      <path
        d="M4.6 5.6c.9-.8 1.8-.9 2.8-.2.7.5 1.4.6 2.2.1.9-.5 1.7-.3 2.6.3.7.4 1.5.5 2.2 0"
        fill="none"
        stroke="#fff"
        strokeWidth="0.7"
        strokeLinecap="round"
      />
      <path
        d="M4.4 10.7h14.2"
        fill="none"
        stroke="#fff"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
      <path d="M4.2 9.7 2.6 10.7l1.6 1" fill="#fff" />
    </svg>
  );
}

function UkFlag() {
  const raw = useId();
  const id = `uk-${raw.replace(/:/g, "")}`;

  return (
    <svg viewBox="0 0 60 30" className="h-full w-full" aria-hidden="true">
      <defs>
        <clipPath id={id}>
          <rect width="60" height="30" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        <rect width="60" height="30" fill="#012169" />
        <path d="M0 0 60 30M60 0 0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0 60 30M60 0 0 30" stroke="#C8102E" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
