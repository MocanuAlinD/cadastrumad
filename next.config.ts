import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    localPatterns: [
      {
        pathname: '/**',
        search: '',
      },
    ],
  },
}

export default nextConfig;
