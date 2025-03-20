import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "100MB",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.lovepik.com'
      },
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io'
      },
    ]
  }
};

export default nextConfig;
