import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'git-scm.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.docker.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*seeklogo.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*esdm*',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*github*',
        port: '',
        pathname: '/**',
      },{
        protocol: 'https',
        hostname: '*licdn*',
        port: '',
        pathname: '/**',
      }
    ]
  }
};

export default nextConfig;
