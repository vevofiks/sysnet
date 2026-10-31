import Link from "next/link";
import type { Locale } from "@/lib/locale";
import { localePath } from "@/lib/paths";

export function Breadcrumbs({
  locale,
  label,
  items,
}: {
  locale: Locale;
  label: string;
  items: { name: string; path?: string }[];
}) {
  return (
    <nav aria-label={label} className="border-b border-line bg-paper">
      <ol className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-2 gap-y-1 px-4 py-3 text-sm text-muted md:px-10">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {last || !item.path ? (
                <span className="text-ink" aria-current={last ? "page" : undefined}>
                  {item.name}
                </span>
              ) : (
                <Link href={localePath(locale, item.path)} className="hover:text-navy">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
