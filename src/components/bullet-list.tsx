import { Check } from "lucide-react";

export function BulletList({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`grid gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-orange-deep text-white">
            <Check className="size-3.5" strokeWidth={2.5} aria-hidden="true" />
          </span>
          <span className="pt-0.5 text-sm leading-relaxed text-ink">{item}</span>
        </li>
      ))}
    </ul>
  );
}
