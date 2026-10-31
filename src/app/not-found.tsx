import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found | Sysnet",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60dvh] max-w-[1400px] flex-col justify-center px-4 py-20 md:px-10">
      <h1 className="max-w-[16ch] text-4xl font-medium leading-[1.08] tracking-normal md:text-6xl">
        That page is not on the rate card.
      </h1>
      <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted">
        The address does not match a Sysnet page. Open the English or Arabic home page.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/en"
          className="inline-flex h-12 items-center justify-center rounded-[5px] bg-navy px-5 text-sm font-medium uppercase tracking-normal text-white hover:bg-navy-deep"
        >
          English
        </Link>
        <Link
          href="/ar"
          className="inline-flex h-12 items-center justify-center rounded-[5px] border border-line px-5 text-sm font-medium uppercase tracking-normal text-ink hover:border-navy"
        >
          العربية
        </Link>
      </div>
    </section>
  );
}
