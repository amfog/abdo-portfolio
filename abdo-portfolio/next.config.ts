import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/abdo-portfolio" : "",
  assetPrefix: isProd ? "/abdo-portfolio/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;