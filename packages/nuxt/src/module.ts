import presetUIKit from "@getuikit/css";
import type { PresetUIKitOptions } from "@getuikit/css";
import { icons } from "@getuikit/icons";
import {
  addPlugin,
  createResolver,
  defineNuxtModule,
  installModule,
} from "@nuxt/kit";
import type { UnocssNuxtOptions } from "@unocss/nuxt";

export interface ModuleOptions {
  components: boolean;
  css: PresetUIKitOptions;
  unocss: UnocssNuxtOptions;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@getuikit/nuxt",
    configKey: "getuikit",
  },
  defaults: {
    components: true,
    css: {},
    unocss: {
      icons: {
        collections: {
          uk: async () => {
            return icons;
          },
        },
      },
    },
  },
  async setup(options, nuxt) {
    await installModule("@unocss/nuxt", {
      presets: [presetUIKit(options.css)],
      ...options.unocss,
    });

    if (options.components) {
      nuxt.options.build.transpile.push("@getuikit/vue");
      nuxt.options.vue.compilerOptions.isCustomElement = (tag: string) =>
        tag.includes("-");

      const resolver = createResolver(import.meta.url);

      // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
      addPlugin(resolver.resolve("./runtime/plugin"));
    }
  },
});
