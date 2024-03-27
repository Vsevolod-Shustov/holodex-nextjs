/** @type {import('next').NextConfig} */

const BASE_PATH =
  process.env.NODE_ENV === "production"
    ? "/holodex-nextjs"
    : "";

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  basePath: BASE_PATH
}

module.exports = nextConfig
