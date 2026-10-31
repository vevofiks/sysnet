"use client";

export function HomeFaq({
  title,
  faqs,
}: {
  title: string;
  faqs: { q: string; a: string }[];
}) {
  return (
    <section className="border-t border-line">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-16 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-24">
        <h2 className="text-3xl font-medium tracking-normal md:text-4xl">{title}</h2>
        <div>
          {faqs.map((item) => (
            <details key={item.q} className="group border-b border-line py-2">
              <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 text-start text-base font-medium marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-line text-lg text-orange-deep transition-transform duration-300 ease-out-expo group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-[65ch] pb-4 text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
