/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // penting untuk export static
  basePath: isProd ? '/nama-repo-kamu' : '',
  assetPrefix: isProd ? '/nama-repo-kamu/' : '',
};

module.exports = nextConfig;
