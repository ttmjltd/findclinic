/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "panel.findclinics.co.uk",
        port: "",
      },
    ],
  },
};

export default nextConfig;
