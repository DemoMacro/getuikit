import { definePreset } from "@unocss/core";
import { PresetMiniOptions, presetMini } from "@unocss/preset-mini";
import { rules as presetMiniRules } from "@unocss/preset-mini/rules";
import { rules } from "./rules";

export type PresetUIKitOptions = PresetMiniOptions;

export const presetUIKit = definePreset(
  (
    options: PresetUIKitOptions = {
      variablePrefix: "uk-",
      prefix: "uk-",
    },
  ) => {
    return {
      ...presetMini(options),
      name: "@getuikit/css",
      rules: [...presetMiniRules, ...rules],
    };
  },
);

export default presetUIKit;
