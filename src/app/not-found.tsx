import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found-view";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page Not Found | Sysnet",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, overflow: "hidden", backgroundColor: "#082a7f" }}>
        <NotFoundView locale="en" />
      </body>
    </html>
  );
}
