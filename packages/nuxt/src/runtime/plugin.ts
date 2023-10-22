import { ComponentLibrary } from "@getuikit/vue";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(ComponentLibrary);
});
