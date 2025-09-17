/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for 'output: export'
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // Responsive image sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // Image sizes for srcset
    formats: ['image/webp', 'image/avif'], // Modern image formats
    minimumCacheTTL: 60, // Cache optimized images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console in production
  },
  experimental: {
    optimizeCss: true, // Optimize CSS
  },
  serverExternalPackages: ['sharp'],
};

export default nextConfig;