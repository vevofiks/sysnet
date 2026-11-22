import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found-view";
import { getNotFoundData } from "@/sanity/queries";
import "./globals.css";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Page Not Found | Sysnet",
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const sanityData = await getNotFoundData();

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: "hidden", backgroundColor: "#082a7f" }}>
        <NotFoundView locale="en" sanityData={sanityData} />
      </body>
    </html>
  );
}
