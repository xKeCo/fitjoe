/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["media.graphcms.com", "media.graphassets.com"],
  },
  nextConfig,
};
