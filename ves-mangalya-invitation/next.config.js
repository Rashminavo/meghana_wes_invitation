/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/invitation.html',
        destination: '/invitation',
      },
    ];
  },
};

module.exports = nextConfig;
