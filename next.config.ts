import type { NextConfig } from "next";


const isGitHubPages = process.env.NODE_ENV === "production";
const repoName = "landing";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  basePath: "/landing",
  trailingSlash: true,
  output: "export"
};

export default nextConfig;
