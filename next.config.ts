import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/myself/app",
  assetPrefix: "/myself/app/",
  output: "export",
};

const isGithubPages = process.env.NODE_ENV === 'production';

const basePath = isGithubPages ? '/myself' : '';
const assetPrefix = isGithubPages ? '/myself/' : '';

module.exports = {
  basePath,
  assetPrefix,
};

export default nextConfig;
