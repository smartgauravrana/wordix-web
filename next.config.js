/** @type {import('next').NextConfig} */

async function rewrites() {
  return [
    {
      source: "/api/:path*",
      destination: "http://localhost:3001/api/:path*", // Proxy to Backend
    },
  ];
}

const nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === "development") {
  nextConfig.rewrites = rewrites;
}

module.exports = nextConfig;
