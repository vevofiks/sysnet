/** True when entrance motion should run. */
export function prefersMotion() {
  if (typeof window === "undefined") return false;
  // Cursor's embedded browser reports prefers-reduced-motion: reduce even
  // when the OS has animations enabled, which skipped every tween.
  if (navigator.userAgent.includes("Cursor/")) return true;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const scrollFrames = new WeakMap<HTMLElement, number>();

/**
 * scrollBy({ behavior: "smooth" }) is ignored while the browser reports
 * reduced motion, including this preview. Animate scrollLeft in that case.
 */
export function scrollByMotion(el: HTMLElement, left: number) {
  const pending = scrollFrames.get(el);
  if (pending) cancelAnimationFrame(pending);

  const from = el.scrollLeft;
  el.scrollBy({ left, behavior: "auto" });
  const to = el.scrollLeft;
  if (!prefersMotion() || from === to) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    el.scrollLeft = from;
    el.scrollBy({ left, behavior: "smooth" });
    return;
  }

  el.scrollLeft = from;
  const snap = el.style.scrollSnapType;
  el.style.scrollSnapType = "none";
  const started = performance.now();
  const duration = 480;
  const step = (now: number) => {
    const progress = Math.min(1, (now - started) / duration);
    const eased = 1 - (1 - progress) ** 3;
    el.scrollLeft = from + (to - from) * eased;
    if (progress < 1) {
      scrollFrames.set(el, requestAnimationFrame(step));
      return;
    }
    el.style.scrollSnapType = snap;
    scrollFrames.delete(el);
  };
  scrollFrames.set(el, requestAnimationFrame(step));
}
