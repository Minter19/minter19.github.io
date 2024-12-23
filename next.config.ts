import type { NextConfig } from "next";


const isGitHubPages = process.env.NODE_ENV === "production";
const repoName = "minter19.github.io";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: isGitHubPages ? `/${repoName}` : "",
  assetPrefix: isGitHubPages ? `/${repoName}` : "",
  trailingSlash: true,
  output: "export",
  images: {
    domains: ["upload.wikimedia.org"],
  },  
};

export default nextConfig;
