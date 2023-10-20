import initUnocssRuntime from "@unocss/runtime";
import presetUIKit from "../icons";

initUnocssRuntime({
  /* options */
  autoPrefix: true,
  defaults: {
    presets: [presetUIKit()],
  },
});
