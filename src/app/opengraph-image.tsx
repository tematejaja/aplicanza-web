import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const alt = "Aplicanza. Implementamos inteligencia artificial para que tu empresa avance.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "stretch",
        background: "#F4F7F8",
        color: "#0B1F3A",
        display: "flex",
        fontFamily: "Arial, sans-serif",
        height: "100%",
        padding: "68px 76px",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "72%" }}>
        <div style={{ display: "flex", fontSize: 38, fontWeight: 700 }}>Aplicanza</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", fontSize: 66, fontWeight: 700, letterSpacing: -3, lineHeight: 1.02 }}>
            Implementamos inteligencia artificial para que tu empresa avance.
          </div>
          <div style={{ color: "#526275", display: "flex", fontSize: 25 }}>IA aplicada para pymes.</div>
        </div>
      </div>
      <div style={{ alignItems: "center", display: "flex", justifyContent: "center", width: "28%" }}>
        <div style={{ background: "#138A8A", display: "flex", height: 8, width: 210 }} />
        <div
          style={{
            borderBottom: "22px solid transparent",
            borderLeft: "32px solid #138A8A",
            borderTop: "22px solid transparent",
            display: "flex",
            height: 0,
            width: 0,
          }}
        />
      </div>
    </div>,
    size,
  );
}
