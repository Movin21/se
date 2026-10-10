import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

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

// Dev uses the default .next folder: a custom distDir isn't ignored by the dev file watcher, causing an endless recompile loop.
// Builds use dist, so running a build never overwrites a running dev server's files.
export default (phase) => ({
  ...nextConfig,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next' : 'dist',
})
