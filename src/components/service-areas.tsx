import { MapPin, Building2 } from "lucide-react";
import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/locale";

export function ServiceAreas({ locale }: { locale: Locale }) {
  const areas = copy[locale].areas;
  const rtl = locale === "ar";

  const districtsByArea: Record<string, string[]> = {
    "Saudi Arabia": ["Riyadh Hub", "Eastern Province", "Central Region"],
    "المملكة العربية السعودية": ["مركز الرياض", "المنطقة الشرقية", "المنطقة الوسطى"],
    Riyadh: ["Malaz", "Olaya", "Al Sulay", "King Fahd Rd", "Al Nakheel", "Hittin", "Al Yasmin"],
    الرياض: ["الملز", "العليا", "السلي", "طريق الملك فهد", "النخيل", "حطين", "الياسمين"],
    Dammam: ["Dammam Port", "Al Khobar", "Jubail", "Dhahran", "2nd Industrial City"],
    الدمام: ["ميناء الدمام", "الخبر", "الجبيل", "الظهران", "المدينة الصناعية الثانية"],
  };

  return (
    <section className="border-t border-line bg-[#f8fbfe] py-12 md:py-16">
      <div className="mx-auto max-w-[1400px] px-4 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3 py-1 text-xs font-medium uppercase tracking-wider text-navy">
              <MapPin className="size-3.5 text-orange-deep" />
              <span>{rtl ? "نطاق التغطية الميدانية" : "Field Coverage Radius"}</span>
            </div>
            <h2 className="mt-3 max-w-[18ch] text-3xl font-medium leading-[1.08] tracking-normal text-ink md:text-4xl">
              {areas.title}
            </h2>
          </div>
          <p className="max-w-[48ch] text-base leading-relaxed text-muted">
            {areas.body}
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-10">
          {areas.places.map((place) => {
            const list = districtsByArea[place.name] ?? [];
            return (
              <div
                key={place.name}
                className="group flex flex-col justify-between rounded-[20px] border border-line bg-white p-6 shadow-sm transition-all duration-300 hover:border-navy hover:shadow-lift"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-wider text-orange-deep">
                      {rtl ? "نطاق معتمد" : "Active Region"}
                    </span>
                    <Building2 className="size-4 text-navy/70" />
                  </div>
                  <h3 className="mt-3 text-xl font-medium text-ink group-hover:text-navy">
                    {place.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{place.detail}</p>
                </div>

                {list.length > 0 && (
                  <div className="mt-6 border-t border-line/70 pt-4">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-muted font-medium">
                      {rtl ? "أبرز المواقع والأحياء:" : "Key Districts Covered:"}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {list.map((d) => (
                        <span
                          key={d}
                          className="rounded-full border border-line bg-[#f8fbfe] px-2.5 py-0.5 text-xs text-ink/80"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
