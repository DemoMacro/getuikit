import { definePreset } from "@unocss/core";
import {
  AttributifyOptions,
  presetAttributify,
} from "unocss/preset-attributify";
import { PresetMiniOptions, presetMini } from "unocss/preset-mini";
import { TypographyOptions, presetTypography } from "unocss/preset-typography";

export type PresetUIKitOptions = {
  base?: PresetMiniOptions;
  attributify?: AttributifyOptions;
  typography?: TypographyOptions;
};

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
      name: "@getuikit/css",
      presets: [
        presetMini(options.base),
        presetAttributify(options.attributify),
        presetTypography(options.typography),
      ],
    };
  },
);

export default presetUIKit;
