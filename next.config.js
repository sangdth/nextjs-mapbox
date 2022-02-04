/** @type {import('next').NextConfig} */
const nextConfig = {
  // In order to use mapbox styles v10, I have to
  // turn off this swcMinify and use .babelrc
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = nextConfig
