import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        forceConsistentCasingInFileNames: true,
      },
    },
  },
});
