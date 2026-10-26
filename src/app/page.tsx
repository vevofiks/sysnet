import type { Metadata } from "next";
import { Landing } from "@/components/landing";
import { DocumentTitle } from "@/components/locale";
import { copy } from "@/lib/copy";
import { getLocale } from "@/lib/locale.server";

export const metadata: Metadata = {
  title: "CCTV, fire alarm, and cabling in Riyadh",
  description:
    "Sysnet installs CCTV, intercom, fire alarm, access control, and network cabling for offices, warehouses, and villas in Riyadh. Desk in Malaz.",
};

export default async function Home() {
  const t = copy[await getLocale()];
  return (
    <>
      <DocumentTitle title={`${t.meta.homeTitle} · ${t.meta.brand}`} />
      <Landing />
    </>
  );
}
