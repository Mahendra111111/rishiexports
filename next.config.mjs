/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Disable automatic metadata processing to avoid path issues
  skipTrailingSlashRedirect: true,
  skipMiddlewareUrlNormalize: true,
  // Disable favicon and other metadata routes processing to avoid path issues
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Avoid processing files with apostrophes in path
      config.module.rules.forEach((rule) => {
        if (rule.loader === "next-metadata-route-loader") {
          rule.exclude = /['\\\s]/;
        }
      });
    }
    return config;
  },
  images: {
    unoptimized: true, // Required for 'output: export' and to disable automatic optimization
    disableStaticImages: true, // Disable import optimization for static images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console in production
  },
  experimental: {
    optimizeCss: true, // Optimize CSS
    // Enable safer path handling for projects with special characters in path
    webpackBuildWorker: true,
  },
  serverExternalPackages: ["sharp"],
};

export default nextConfig;
