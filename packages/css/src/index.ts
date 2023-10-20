import { definePreset } from "unocss";
import { PresetMiniOptions, presetMini } from "unocss/preset-mini";
import { rules } from "./rules";

export type PresetUIKitOptions = PresetMiniOptions;

export const presetUIKit = definePreset(
  (
    options: PresetUIKitOptions = {
      base: {
        variablePrefix: "uk-",
        prefix: "uk-",
      },
    },
  ) => {
    return {
      ...presetMini(options.base),
      name: "@getuikit/css",
      rules: rules,
    };
  },
);

export default presetUIKit;
