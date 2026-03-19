import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async redirects() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://arden360.com";
    return [
      { source: "/home", destination: "/", permanent: true },
      {
        source: "/:path*",
        has: [{ type: "header", key: "host", value: "junipertechteam.com" }],
        destination: `${siteUrl}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "header", key: "host", value: "www.junipertechteam.com" }],
        destination: `${siteUrl}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
