import initUnocssRuntime from "@unocss/runtime";
import presetUIKit from ".";

initUnocssRuntime({
  /* options */
  defaults: {
    presets: [presetUIKit()],
  },
});
