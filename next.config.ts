import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 defaults to [75] only; allow higher quality for photos.
    qualities: [75, 90, 95, 100],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 640],
  },
};

export default nextConfig;
