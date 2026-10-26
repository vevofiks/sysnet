"use client";

import { createContext, useContext, useLayoutEffect, type ReactNode } from "react";
import { copy, type Copy } from "@/lib/copy";
import type { Locale } from "@/lib/locale";
import { prefersMotion } from "@/lib/motion-pref";

const LocaleContext = createContext<Locale>("en");

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useCopy(): Copy {
  return copy[useContext(LocaleContext)];
}

export function DocumentLocale({ locale }: { locale: Locale }) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.lang = locale;
    root.dir = locale === "ar" ? "rtl" : "ltr";
    if (prefersMotion()) root.dataset.motion = "on";
    else delete root.dataset.motion;
  }, [locale]);

  return null;
}

export function DocumentTitle({ title }: { title: string }) {
  useLayoutEffect(() => {
    document.title = title;
  }, [title]);

  return null;
}
