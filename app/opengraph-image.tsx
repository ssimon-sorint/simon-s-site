import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Simon Andy Asoltanei — Backend Developer";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(circle at 70% 30%, rgba(124,255,176,0.18), transparent 55%), #0b0d0e",
          color: "#e9ebee",
          fontFamily: "ui-sans-serif, system-ui",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 22,
            color: "#a3a8af",
          }}
        >
          <span style={{ color: "#7cffb0" }}>$</span>
          simon.asoltanei
          <span style={{ color: "#7cffb0" }}>_</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 100,
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Simon Andy</span>
            <span style={{ color: "#a3a8af" }}>Asoltanei.</span>
          </div>
          <div style={{ fontSize: 32, color: "#cdd1d6", maxWidth: 900, display: "flex" }}>
            Backend developer · 19 · Milano / Lombardia
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 22,
            color: "#a3a8af",
          }}
        >
          <span style={{ color: "#7cffb0" }}>→</span>
          <span>python</span>
          <span style={{ color: "#3a3f44" }}>·</span>
          <span>node.js</span>
          <span style={{ color: "#3a3f44" }}>·</span>
          <span>java</span>
          <span style={{ color: "#3a3f44" }}>·</span>
          <span>postgres</span>
          <span style={{ color: "#3a3f44" }}>·</span>
          <span>sql</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
