/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // If you use <Image/>, add this:
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

