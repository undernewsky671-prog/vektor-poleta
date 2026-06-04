import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Позволяет загружать изображения которых ещё нет — без ошибки сборки
    dangerouslyAllowSVG: false,
    unoptimized: false,
  },
};

export default nextConfig;
