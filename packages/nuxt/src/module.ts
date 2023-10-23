import { addPlugin, createResolver, defineNuxtModule } from "@nuxt/kit";

export interface ModuleOptions {
  addPlugin: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@getuikit/nuxt",
    configKey: "getuikit",
  },
  setup(options, nuxt) {
    nuxt.options.build.transpile.push("@getuikit/vue");
    nuxt.options.vue.compilerOptions.isCustomElement = (tag: string) =>
      tag.includes("-");

    const resolver = createResolver(import.meta.url);

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});
