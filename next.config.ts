import type { NextConfig } from "next";

const nextConfig: NextConfig = {
images: {
remotePatterns: [
{
protocol: "https",
hostname: "img.magnific.com",
},
{
protocol: "https",
hostname: "images.unsplash.com",
},
{
protocol: "https",
hostname: "api.abcz.work",
},
],
},
};

export default nextConfig;
