/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
