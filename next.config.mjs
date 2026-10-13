/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/docs/variables/random-values",
        destination: "/docs/variables/fake-data-generation",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
