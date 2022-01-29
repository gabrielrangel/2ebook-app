const { resolve, join } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CACHE_DIR: resolve(__dirname, "./.next/cache/api/epub"),
    EPUB_TEMPLATE_DIR: resolve(__dirname, "./Assets/Template/epub"),
    EPUB_ASSETS_RELATIVE_PATH: "OEBPS",
    EPUB_TEXT_RELATIVE_PATH: join("OEBPS", "text"),
  },
};

module.exports = nextConfig;
