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
  // Dev uses the default .next folder: a custom distDir isn't ignored by the dev file watcher, causing an endless recompile loop
  distDir: process.env.NODE_ENV === 'production' ? 'dist' : '.next',
  assetPrefix: '',  // Empty string for root deployment
  trailingSlash: true,
}

export default nextConfig
