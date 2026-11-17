"use client";

import Image from "next/image";
import Link from "next/link";
import { Home, LayoutGrid, Wrench } from "lucide-react";
import type { Locale } from "@/lib/locale";
import { localePath } from "@/lib/paths";

interface NotFoundViewProps {
  locale?: Locale;
}

export function NotFoundView({ locale = "en" }: NotFoundViewProps) {
  const isArabic = locale === "ar";

  const homeHref = locale ? localePath(locale, "/") : "/";
  const productsHref = locale ? localePath(locale, "/services") : "/services";

  return (
    <div
      dir={isArabic ? "rtl" : "ltr"}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#082a7f",
        color: "#ffffff",
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* 1. Background image layer */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        <Image
          src="/404-img.png"
          alt="404 Page Not Found"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        {/* Subtle vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle, transparent 60%, rgba(8, 42, 127, 0.45) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* 2. Top Header (Tools Icon + Title + Subtitle) - moved down from top edge */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "640px",
          padding: "clamp(56px, 9vh, 90px) 16px 0 16px",
          boxSizing: "border-box",
          pointerEvents: "auto",
        }}
      >
        {/* Crossed Wrenches Icon (Orange) */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            marginBottom: "12px",
            color: "#FF5722",
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.5))",
          }}
          aria-hidden="true"
        >
          <Wrench
            style={{
              position: "absolute",
              width: "36px",
              height: "36px",
              transform: "rotate(45deg)",
            }}
            fill="currentColor"
            strokeWidth={1.5}
          />
          <Wrench
            style={{
              position: "absolute",
              width: "36px",
              height: "36px",
              transform: "rotate(-45deg) scaleX(-1)",
            }}
            fill="currentColor"
            stroke="#082a7f"
            strokeWidth={1.2}
          />
        </div>

        {/* Title */}
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(26px, 4.5vw, 46px)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            color: "#ffffff",
            textShadow: "0 3px 12px rgba(0, 0, 0, 0.6)",
          }}
        >
          {isArabic ? (
            <>
              <span style={{ color: "#ffffff" }}>الصفحة </span>
              <span style={{ color: "#FF5722" }}>غير موجودة</span>
            </>
          ) : (
            <>
              <span style={{ color: "#ffffff" }}>Page </span>
              <span style={{ color: "#FF5722" }}>Not Found</span>
            </>
          )}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            margin: "12px 0 0 0",
            fontSize: "clamp(13px, 1.8vw, 16px)",
            lineHeight: 1.5,
            color: "rgba(224, 238, 255, 0.95)",
            maxWidth: "460px",
            textShadow: "0 2px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          {isArabic
            ? "الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها."
            : "The page you're looking for doesn't seem to exist or may have been moved."}
        </p>
      </div>

      {/* 3. Middle space (allows the 3D room, 404, hole, ladder, and toolbox to show) */}
      <div style={{ flex: 1, minHeight: "60px", pointerEvents: "none" }} />

      {/* 4. Bottom Action Buttons - moved up from bottom edge */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "14px",
          width: "100%",
          padding: "0 16px clamp(60px, 9vh, 92px) 16px",
          boxSizing: "border-box",
          pointerEvents: "auto",
        }}
      >
        {/* Back to Home Button (Orange) */}
        <Link
          href={homeHref}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            borderRadius: "9999px",
            backgroundColor: "#FF5722",
            color: "#ffffff",
            padding: "13px 28px",
            fontSize: "15px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 10px 25px -4px rgba(255, 87, 34, 0.45), 0 6px 12px -4px rgba(0, 0, 0, 0.3)",
            cursor: "pointer",
            transition: "all 0.18s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#F4511E";
            e.currentTarget.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FF5722";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Home style={{ width: "19px", height: "19px", color: "#ffffff" }} strokeWidth={2.4} />
          <span>{isArabic ? "العودة إلى الرئيسية" : "Back to Home"}</span>
        </Link>

        {/* Browse Products Button */}
        <Link
          href={productsHref}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            borderRadius: "9999px",
            border: "1.5px solid rgba(255, 255, 255, 0.65)",
            backgroundColor: "rgba(23, 67, 156, 0.75)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            color: "#ffffff",
            padding: "13px 28px",
            fontSize: "15px",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 10px 25px -4px rgba(0, 0, 0, 0.35)",
            cursor: "pointer",
            transition: "all 0.18s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
            e.currentTarget.style.borderColor = "#ffffff";
            e.currentTarget.style.transform = "scale(1.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(23, 67, 156, 0.75)";
            e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.65)";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <LayoutGrid style={{ width: "19px", height: "19px", color: "#ffffff" }} strokeWidth={2.2} />
          <span>{isArabic ? "تصفح المنتجات" : "Browse Products"}</span>
        </Link>
      </div>
    </div>
  );
}
