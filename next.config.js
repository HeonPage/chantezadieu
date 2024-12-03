/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "glee.or.kr",
        pathname: "/files/attach/**",
      },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "http", hostname: "www.kmc1958.or.kr" },
      { protocol: "https", hostname: "media.discordapp.net" },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
      },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "i.imgur.com" },
      {
        protocol: "https",
        hostname: "exzaepsdlwxhvfnrgiri.supabase.co",
      },
    ],
  },
  /* config options here */ experimental: {
    serverComponentsExternalPackages: ["sharp"],
  },
};

module.exports = nextConfig;
