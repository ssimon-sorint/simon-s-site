import type { NextConfig } from "next";

const repo = "simon-s-site";
const isProd = process.env.NODE_ENV === "production";

const config: NextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
};

export default config;
