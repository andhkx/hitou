/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactCompiler: true,
  // Matikan StrictMode agar WebGL (three.js) tidak di-mount dua kali di dev
  // (double-mount membuat browser membunuh WebGL context -> kartu hilang).
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
};

export default nextConfig;
