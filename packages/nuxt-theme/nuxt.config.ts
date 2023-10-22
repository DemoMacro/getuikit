import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    tsConfig: {
      compilerOptions: {
        forceConsistentCasingInFileNames: true,
      },
    },
  },
  modules: ["@nuxt/content", "@getuikit/nuxt"],
  content: {
    documentDriven: true,
  },
  getuikit: {},
});
