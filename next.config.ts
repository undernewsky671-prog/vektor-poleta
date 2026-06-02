import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Локальные изображения из /public/images/ — работают без настройки.
    // Если понадобятся внешние домены — добавьте их сюда:
    // remotePatterns: [{ protocol: "https", hostname: "example.com" }],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
