import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "thuisa"; // change this if using GitHub Pages

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: 'custom',
    loaderFile: './my-loader.ts',
  },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;

