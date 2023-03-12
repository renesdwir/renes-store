/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig
module.exports = {
  nextConfig: {
    reactStrictMode: true,
    swcMinify: true,
  },
  images: {
    domains: ["http://localhost:3000"],
  },
};
