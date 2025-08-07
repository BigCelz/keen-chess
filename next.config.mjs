/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'out',
  basePath: '/keen-chess',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

