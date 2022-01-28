const { resolve, join } = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    EPUB_TEMPLATE_DIR: resolve(__dirname, "template/epub"),
    EPUB_ASSETS_RELATIVE_PATH: "OEBPS",
    EPUB_TEXT_RELATIVE_PATH: join("OEBPS", "text"),
  },
};

module.exports = nextConfig;
