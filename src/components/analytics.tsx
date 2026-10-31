"use client";

import { useEffect } from "react";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function track(name: string, params: Record<string, string> = {}) {
  window.dataLayer = window.dataLayer ?? [];
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }
  window.dataLayer.push({ event: name, ...params });
}

export function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!id) return;
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", id);

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script.async = true;
    document.head.appendChild(script);

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest?.("a");
      const href = anchor?.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) track("phone_click", { link_url: href });
      if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        track("whatsapp_click", { link_url: href });
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      script.remove();
    };
  }, [id]);

  return null;
}
