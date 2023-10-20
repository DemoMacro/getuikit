import { definePreset } from "@unocss/core";
import { presetAttributify, presetMini, presetTypography } from "unocss";
import type { AttributifyOptions } from "unocss/preset-attributify";
import type { PresetMiniOptions } from "unocss/preset-mini";
import type { TypographyOptions } from "unocss/preset-typography";

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
