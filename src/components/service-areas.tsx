import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/locale";

export function ServiceAreas({ locale }: { locale: Locale }) {
  const areas = copy[locale].areas;

  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 py-14 md:px-10 md:py-20">
        <h2 className="max-w-[18ch] text-3xl font-medium leading-[1.08] tracking-normal md:text-4xl">
          {areas.title}
        </h2>
        <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted">{areas.body}</p>
        <ul className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {areas.places.map((place) => (
            <li key={place.name} className="bg-paper p-5">
              <h3 className="text-base font-medium text-ink">{place.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{place.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
