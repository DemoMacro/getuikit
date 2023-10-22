import { postcss } from "@stencil-community/postcss";
import { Config } from "@stencil/core";
import { vueOutputTarget } from "@stencil/vue-output-target";
import unocss from "@unocss/postcss";

export const config: Config = {
  namespace: "web-components",
  plugins: [
    postcss({
      plugins: [unocss()],
    }),
  ],
  outputTargets: [
    {
      type: "dist",
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "dist-hydrate-script",
      dir: "dist/hydrate",
    },
    vueOutputTarget({
      componentCorePackage: "@getuikit/wc",
      proxiesFile: "../vue/src/components.ts",
    }),
    {
      type: "docs-json",
      file: "dist/docs.json",
    },
    {
      type: "docs-vscode",
      file: "dist/docs.code.json",
    },
  ],
};
