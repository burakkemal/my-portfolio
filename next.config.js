
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-domain.com'], // Eğer harici bir URL kullanıyorsanız
    unoptimized: true,
  },
}

module.exports = nextConfig 
