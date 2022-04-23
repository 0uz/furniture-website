/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader : "akamai",
    path : "",
  },
  basePath: "/furniture-website",
  assetPrefix: "/furniture-website"
}

module.exports = nextConfig
