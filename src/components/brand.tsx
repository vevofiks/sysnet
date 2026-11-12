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

export function Logo({
  tone = "navy",
  className,
}: {
  tone?: "navy" | "ice";
  className?: string;
}) {
  const height = tone === "ice" ? "h-9 sm:h-11" : "h-7 sm:h-9";

  return (
    <span className={`flex items-center gap-1.5 sm:gap-2.5 ${className ?? ""}`}>
      <Image
        src="/logo-mark.png"
        alt=""
        width={143}
        height={133}
        priority
        className={`${height} w-auto`}
      />
      <Image
        src="/logo-wordmark.png"
        alt="Sysnet Technology"
        width={272}
        height={90}
        priority
        className={`${height} w-auto max-w-[30vw] sm:max-w-none ${tone === "ice" ? "brightness-0 invert" : ""}`}
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
  quality = 80,
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

export function PageHero({
  title,
  lede,
  badge,
  image,
  stats,
  children,
}: {
  title: string;
  lede: string;
  badge?: string;
  image?: string;
  stats?: Array<{ label: string; value: string }>;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line/20 bg-navy text-ice">
      {image ? (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            quality={65}
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy/90 to-navy-deep/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/15 via-transparent to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-navy to-navy-deep" />
      )}
      <div className="relative mx-auto max-w-[1400px] px-4 py-12 md:px-10 md:py-16">
        {badge ? (
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-orange-soft backdrop-blur-md">
            {badge}
          </div>
        ) : null}
        <div className="grid items-end gap-8 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-[18ch] text-3xl font-medium leading-[1.08] tracking-normal text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>
          </div>
          <div className="space-y-6">
            <p className="max-w-[65ch] text-base leading-relaxed text-ice/90 md:text-lg">{lede}</p>
            {stats && stats.length > 0 ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[10px] border border-white/15 bg-white/10 p-3 backdrop-blur-sm"
                  >
                    <p className="text-xs uppercase tracking-wider text-orange-soft">{stat.label}</p>
                    <p className="mt-1 text-sm font-medium text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
