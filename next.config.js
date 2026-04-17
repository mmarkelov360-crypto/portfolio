/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Обязательно для GitHub Pages
  },
  trailingSlash: true,
}

module.exports = nextConfig