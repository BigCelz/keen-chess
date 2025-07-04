/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: { unoptimized: true }, 
  basePath: '/keen-chess', 
  trailingSlash: true, 
};

export default nextConfig;
