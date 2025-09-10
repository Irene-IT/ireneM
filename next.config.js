// @ts-check
const { withContentlayer } = require('next-contentlayer2');

/**
 * @type {import('next').NextConfig}
 */
const nextconfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: "standalone",
  experimental: {
    reactCompiler: true, // для React 19
  },
  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 128, 256],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 600000,
    unoptimized: true, // важливо для next-image-export-optimizer
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/media",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },
  turbopack: {
  root: __dirname
}, // if you want to use turbopack, uncomment this line
};

module.exports = withContentlayer(nextconfig);
