import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Ensures static HTML export for Netlify
  images: {
    unoptimized: true, // ✅ Allows images from /public without Next’s optimization
  },
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;