/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendUrl: "http://localhost:4000/api",
  },
};

module.exports = nextConfig;
