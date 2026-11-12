import { ImageResponse } from "next/og";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || "Sysnet").slice(0, 90);
  const locale = searchParams.get("locale") === "ar" ? "AR" : "EN";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a2244",
          color: "#f6f9fc",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}>
          <span>Sysnet</span>
          <span style={{ color: "#ffd7cc" }}>{locale}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 64, lineHeight: 1.1, maxWidth: 980 }}>{title}</div>
          <div style={{ fontSize: 28, color: "#ffd7cc" }}>Adam Al Arabia Company · Riyadh</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
