import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  declaration: true,
  clean: false,
  entries: [
    {
      input: "src/index",
      outDir: "dist",
      cleanDist: false,
    },
  ],
  rollup: {
    emitCJS: true,
  },
});
