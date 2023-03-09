/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  images: {
    domains: [
      'supermomos-app-resources-us.s3.amazonaws.com',
    ],
  },
}

module.exports = nextConfig
