import { icons } from "@getuikit/icons";
import { definePreset } from "@unocss/core";
import {
  presetAttributify,
  presetIcons,
  presetMini,
  presetTypography,
} from "unocss";
import type { AttributifyOptions } from "unocss/preset-attributify";
import type { IconsOptions } from "unocss/preset-icons";
import type { PresetMiniOptions } from "unocss/preset-mini";
import type { TypographyOptions } from "unocss/preset-typography";

export type PresetUIKitOptions = {
  base?: PresetMiniOptions;
  attributify?: AttributifyOptions;
  icons?: IconsOptions;
  typography?: TypographyOptions;
};

export const presetUIKit = definePreset(
  (
    options: PresetUIKitOptions = {
      base: {
        variablePrefix: "uk-",
        prefix: "uk-",
      },
      icons: {
        collections: {
          uk: async () => {
            return icons;
          },
        },
      },
    },
  ) => {
    return {
      name: "@getuikit/css",
      presets: [
        presetMini(options.base),
        presetAttributify(options.attributify),
        presetIcons(options.icons),
        presetTypography(options.typography),
      ],
    };
  },
);

export default presetUIKit;
