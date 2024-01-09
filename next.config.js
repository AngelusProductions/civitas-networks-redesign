/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.civitasnetworks.com',
        port: '',
        pathname: '**',
      },
    ],
  },
  output: 'export'
}

module.exports = nextConfig
