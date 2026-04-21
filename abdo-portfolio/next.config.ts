import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/abdo-portfolio',
  assetPrefix: '/abdo-portfolio/',
  images: {
    unoptimized: true
  }
};

export default nextConfig;