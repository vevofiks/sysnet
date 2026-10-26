import Link from "next/link";
import { DocumentTitle } from "@/components/locale";
import { copy } from "@/lib/copy";
import { getLocale } from "@/lib/locale.server";

export default async function NotFound() {
  const page = copy[await getLocale()];
  const t = page.notFound;

  return (
    <section className="mx-auto flex min-h-[60dvh] max-w-[1400px] flex-col justify-center px-4 py-20 md:px-10">
      <DocumentTitle title={`${t.title} · ${page.meta.brand}`} />
      <h1 className="max-w-[14ch] text-4xl font-medium leading-[1.08] tracking-normal md:text-6xl">
        {t.title}
      </h1>
      <p className="mt-4 max-w-[48ch] text-base leading-relaxed text-muted">{t.body}</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex h-12 items-center justify-center rounded-[5px] bg-navy px-5 text-sm font-medium uppercase tracking-normal text-white hover:bg-navy-deep"
        >
          {t.home}
        </Link>
        <Link
          href="/services"
          className="inline-flex h-12 items-center justify-center rounded-[5px] border border-line px-5 text-sm font-medium uppercase tracking-normal text-ink hover:border-navy"
        >
          {t.services}
        </Link>
      </div>
    </section>
  );
}
