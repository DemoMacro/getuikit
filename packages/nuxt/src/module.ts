import { addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";

export interface ModuleOptions {
  addPlugin: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@getuikit/nuxt",
    configKey: "getuikit",
  },
  defaults: {
    addPlugin: true,
  },
  setup(options, nuxt) {
    if (options.addPlugin) {
      // Create resolver to resolve relative paths
      const { resolve } = createResolver(import.meta.url);

      addPlugin(resolve("./runtime/plugin"));
    }
  },
});
