/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: [],
    remotePatterns: [],
  },
  output: 'export',
  distDir: 'dist',
  assetPrefix: './',
  trailingSlash: true,
  // Add basePath if deploying to a subdirectory
  // basePath: '/your-base-path',
}

export default nextConfig
