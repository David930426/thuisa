import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "your-repo-name"; // change this if using GitHub Pages

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // <-- important
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;

