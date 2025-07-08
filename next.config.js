const nextTranslate = require('next-translate-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    // @ts-ignore
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'))

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    )

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i

    return config
  },
  i18n: {
    locales: ['en', 'nl'], // Supported locales
    defaultLocale: 'en', // Default fallback locale
  },
  images: {
    domains: [
      'images.unsplash.com',
      'media.graphassets.com',
      'plus.unsplash.com',
      'cdn.shopify.com',
      'firebasestorage.googleapis.com',
      'i.ytimg.com',
    ],
  },
  reactStrictMode: true,
}

module.exports = nextTranslate(nextConfig)
