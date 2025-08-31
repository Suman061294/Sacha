/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint check on build
  },
};

module.exports = nextConfig;

