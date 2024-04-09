/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/code-collabo/overview',
        destination: '/code-collabo',
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
