import { ImageResponse } from "next/og";
import { SITE_URL } from "@/constants/contact";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";
export const alt = "Arden 360 | MSP, VoIP, Security & AV Solutions";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, rgb(6, 16, 43) 0%, rgb(16, 43, 115) 45%, rgb(2, 132, 199) 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "56px 72px",
            width: "100%",
            gap: "18px",
          }}
        >
          <img
            src={`${SITE_URL}/arden-logo.png`}
            width={132}
            height={132}
            alt="Arden 360 logo"
            style={{ objectFit: "contain" }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Arden 360
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 600,
              lineHeight: 1.2,
              maxWidth: "960px",
            }}
          >
            MSP, VoIP, Security &amp; AV Solutions
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              opacity: 0.92,
              lineHeight: 1.35,
              maxWidth: "980px",
            }}
          >
            Professional IT managed services, network cabling, and business
            technology support.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
