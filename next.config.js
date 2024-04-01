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
        source: '/other-subcommunity/overview',
        destination: '/other-subcommunity',
        permanent: false,
      },
      {
        source: '/community/home',
        destination: '/',
        permanent: false,
      },
      {
        source: '/community',
        destination: '/',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig;
