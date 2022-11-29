/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        transpilePackages: ['react-syntax-highlighter'],
    },
};

module.exports = nextConfig;
