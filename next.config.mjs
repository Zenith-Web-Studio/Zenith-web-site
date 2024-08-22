/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'aceternity.com' }, // Add this object to allow images from 'aceternity.com'
    ],
  }
};

export default nextConfig;