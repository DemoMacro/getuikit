import { definePreset } from "unocss";
import { PresetMiniOptions, presetMini } from "unocss/preset-mini";
import { rules } from "./rules";

export type PresetUIKitOptions = PresetMiniOptions;

export const presetUIKit = definePreset(
  (
    options: PresetUIKitOptions = {
      variablePrefix: "uk-",
      prefix: "uk-",
    }
  ) => {
    return {
      ...presetMini(options),
      name: "@getuikit/css",
      rules: rules,
    };
  }
);

export default presetUIKit;
