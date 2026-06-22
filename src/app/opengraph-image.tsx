import { ImageResponse } from "next/og";

export const alt =
  "Vinicius Rodrigues — Revenue Systems & GTM Automation Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#9ca3af",
            fontSize: 28,
            letterSpacing: 3,
          }}
        >
          VINICIUS RODRIGUES
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            Revenue Systems & GTM Automation Engineer
          </div>
          <div
            style={{
              display: "flex",
              color: "#d1d5db",
              fontSize: 34,
              lineHeight: 1.3,
            }}
          >
            I build the systems that turn marketing into revenue for agencies &
            SMBs.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            color: "#009ffb",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          GoHighLevel · AI Automation · Backend & CRM Integrations
        </div>
      </div>
    ),
    { ...size }
  );
}
