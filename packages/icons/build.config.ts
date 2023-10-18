import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  entries: ["src/index"],
  outDir: "dist/json",
  rollup: {
    emitCJS: true,
  },
});
