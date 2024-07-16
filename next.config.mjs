/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    domains: [
      "cdn.dribbble.com",
      "i.pinimg.com",
      "miro.medium.com",
      "images.pexels.com",
    ],
  },
};

export default nextConfig;
