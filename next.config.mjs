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
  assetPrefix: '',  // Empty string for root deployment
  trailingSlash: true,
}

export default nextConfig
