/** @type {import('next').NextConfig} */
const nextConfig = {
    generateBuildId: async () => {
    // Generate a unique build ID
    return 'civitas-networks'; // Change this to a dynamic value if needed
  },
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
}

module.exports = nextConfig
