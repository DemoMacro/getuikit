import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  sourcemap: false,
  experimental: {
    payloadExtraction: true,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        forceConsistentCasingInFileNames: true,
      },
    },
  },
  nitro: {
    future: {
      nativeSWR: true,
    },
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    routeRules: {},
  },
  extends: ["@getuikit/nuxt-theme"],
});
