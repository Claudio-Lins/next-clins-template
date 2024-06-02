/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
