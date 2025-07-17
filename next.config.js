/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // REMOVE serverActions karena tidak kompatibel dengan static export
  output: 'export', // penting untuk GitHub Pages
  basePath: isProd ? '/rvpinoz.github.io' : '',
  assetPrefix: isProd ? '/rvpinoz.github.io/' : '',
};

module.exports = nextConfig;