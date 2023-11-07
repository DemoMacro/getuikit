import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  entries: ["src/index"],
  externals: ["vue", "@getuikit/wc", "@getuikit/wc/dist/loader"],
  rollup: {
    emitCJS: true,
    esbuild: {
      minify: true,
    },
  },
});
