import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration pour les micro-frontends
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
  // Permettre les domaines externes pour les images et ressources
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
