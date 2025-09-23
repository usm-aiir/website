/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static HTML export (replaces `next export`)
  output: 'export',
  // If using next/image, disable optimization for static export
  images: { unoptimized: true },
};

module.exports = nextConfig;
