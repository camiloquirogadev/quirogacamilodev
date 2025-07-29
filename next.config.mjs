/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/quirogacamilodev",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
