import Image from "next/image";
import {
  Cable,
  Cctv,
  DoorOpen,
  FingerprintPattern,
  FireExtinguisher,
  Monitor,
  Package,
  Presentation,
  Siren,
  Speaker,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  cctv: Cctv,
  intercom: Speaker,
  cabling: Cable,
  computers: Monitor,
  access: FingerprintPattern,
  "fire-alarm": Siren,
  "fire-safety": FireExtinguisher,
  "home-office": DoorOpen,
  "smart-office": Presentation,
  products: Package,
  maintenance: Wrench,
};

export function Logo({ tone = "navy" }: { tone?: "navy" | "ice" }) {
  const height = tone === "ice" ? "h-11" : "h-9";

  return (
    <span className="flex items-center gap-2.5">
      <Image
        src="/logo-mark.png"
        alt=""
        width={143}
        height={133}
        className={`${height} w-auto`}
      />
      <Image
        src="/logo-wordmark.png"
        alt="Sysnet Technology"
        width={272}
        height={90}
        className={`${height} w-auto max-w-[34vw] sm:max-w-none ${tone === "ice" ? "brightness-0 invert" : ""}`}
      />
    </span>
  );
}

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = icons[name] ?? Cctv;
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}

export function Photo({
  src,
  alt,
  className = "object-cover",
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
  fit = "cover",
  quality = 70,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fit?: "cover" | "contain";
  quality?: number;
}) {
  if (fit === "contain") {
    return (
      <Image
        src={src}
        alt={alt}
        width={1600}
        height={1067}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className="h-auto w-full object-contain"
        style={{ width: "100%", height: "auto" }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      quality={quality}
      sizes={sizes}
      className={className}
    />
  );
}

export function PageHero({ title, lede }: { title: string; lede: string }) {
  return (
    <section className="border-b border-white/10 bg-navy text-ice">
      <div className="mx-auto grid max-w-[1400px] items-end gap-8 px-4 py-16 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-24">
        <div>
          <h1 className="max-w-[16ch] text-4xl font-medium leading-[1.08] tracking-normal md:text-6xl">
            {title}
          </h1>
        </div>
        <p className="max-w-[65ch] text-base leading-relaxed text-ice/85">{lede}</p>
      </div>
    </section>
  );
}
