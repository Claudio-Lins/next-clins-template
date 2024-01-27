/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
