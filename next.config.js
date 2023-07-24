/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    addDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
