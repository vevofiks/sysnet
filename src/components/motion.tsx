"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { useMotionReady } from "@/lib/use-motion";

type LiveModule = typeof import("./motion-live");

let liveModule: LiveModule | null = null;
let started = false;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return liveModule;
}

function getServerSnapshot() {
  return null;
}

function ensureLive() {
  if (started || typeof window === "undefined") return;
  started = true;
  const run = () => {
    window.removeEventListener("pointerdown", run);
    window.removeEventListener("keydown", run);
    window.removeEventListener("scroll", run, true);
    void import("./motion-live").then((mod) => {
      liveModule = mod;
      listeners.forEach((listener) => listener());
    });
  };
  window.addEventListener("pointerdown", run, { once: true, passive: true });
  window.addEventListener("keydown", run, { once: true });
  window.addEventListener("scroll", run, { once: true, passive: true, capture: true });
}

function useLiveModule(enabled: boolean) {
  const mod = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  if (enabled) ensureLive();
  return enabled ? mod : null;
}

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const live = useLiveModule(useMotionReady());
  if (!live) return <div className={className}>{children}</div>;
  return <live.LiveReveal className={className}>{children}</live.LiveReveal>;
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const live = useLiveModule(useMotionReady());
  if (!live) return <div className={className}>{children}</div>;
  return <live.LiveStagger className={className}>{children}</live.LiveStagger>;
}

export function Fade({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const live = useLiveModule(useMotionReady());
  if (!live) return <div className={className}>{children}</div>;
  return <live.LiveFade className={className}>{children}</live.LiveFade>;
}
