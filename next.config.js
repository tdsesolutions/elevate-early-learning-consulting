/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/elevate-early-learning-consulting',
  assetPrefix: '/elevate-early-learning-consulting',
  turbopack: {
    root: '/home/teddiescott30/.openclaw/workspace/elevate-early-learning-consulting',
  },
};

module.exports = nextConfig;
