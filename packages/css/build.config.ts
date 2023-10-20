import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  entries: ["src/index", "src/icons"],
  rollup: {
    emitCJS: true,
    output: {
      exports: "named",
    },
  },
});
