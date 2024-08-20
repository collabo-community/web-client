/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/projects',
        has: [
          {
            type: 'host',
            value: 'app.localhost',
          },
        ],
        destination: '/',
        permanent: false,
      },
      {
        source: '/app-home/home',
        destination: '/',
        permanent: false,
      },
      {
        source: '/app-home',
        destination: '/',
        permanent: false,
      },
      {
        source: '/home',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
