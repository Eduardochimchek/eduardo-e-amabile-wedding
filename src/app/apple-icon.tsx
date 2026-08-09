import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1E3A8A",
          color: "#F7F4EE",
          fontSize: 64,
          fontWeight: 600,
          letterSpacing: "0.06em",
        }}
      >
        E&A
      </div>
    ),
    { ...size },
  );
}
