import presetUIKit from "@getuikit/css";
import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  installModule,
} from "@nuxt/kit";
import type { UnocssNuxtOptions } from "@unocss/nuxt";

export interface ModuleOptions {
  components: boolean;
  unocss: UnocssNuxtOptions;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@getuikit/nuxt",
    configKey: "getuikit",
  },
  defaults: {
    components: true,
    unocss: {
      presets: [presetUIKit],
    },
  },
  async setup(options, nuxt) {
    if (options.components) {
      nuxt.options.build.transpile.push("@getuikit/vue");
      nuxt.options.vue.compilerOptions.isCustomElement = (tag: string) =>
        tag.includes("-");

      const resolver = createResolver(import.meta.url);

      // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
      addPlugin(resolver.resolve("./runtime/plugin"));
    }

    await installModule("@unocss/nuxt", options.unocss);
  },
});
