import initUnocssRuntime from "@unocss/runtime";
import presetUIKit from ".";

initUnocssRuntime({
  /* options */
  autoPrefix: true,
  defaults: {
    presets: [presetUIKit()],
  },
});
