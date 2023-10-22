import { applyPolyfills, defineCustomElements } from "@getuikit/wc/dist/loader";
import { Plugin } from "vue";

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};
