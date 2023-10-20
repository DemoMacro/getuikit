import { icons } from "@getuikit/icons";
import { definePreset } from "@unocss/core";
import { IconsOptions, presetIcons } from "unocss/preset-icons";
import { PresetUIKitOptions, presetUIKit } from ".";

export interface presetUIKitWithIconsOptions extends PresetUIKitOptions {
  icons: IconsOptions;
}

export const presetUIKitWithIcons = definePreset(
  (
    options: presetUIKitWithIconsOptions = {
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
        presetUIKit({
          base: options.base,
          attributify: options.attributify,
          typography: options.typography,
        }),
        presetIcons(options.icons),
      ],
    };
  },
);

export default presetUIKitWithIcons;
