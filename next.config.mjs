/** @type {import('next').NextConfig} */
const { withSitemap } = require('next-sitemap');

const nextConfig = {
  reactStrictMode: true, // Optional: enables React's Strict Mode
  // Other Next.js configuration options can go here
};

module.exports = withSitemap(nextConfig);
