import { icons } from "@getuikit/icons";
import {
  definePreset,
  presetAttributify,
  presetIcons,
  presetMini,
  presetTypography,
} from "unocss";
import type { PresetMiniOptions } from "unocss/preset-mini";

export type PresetUIKitOptions = PresetMiniOptions;

export const presetUIKit = definePreset(
  (
    options: PresetUIKitOptions = {
      variablePrefix: "uk-",
      prefix: "uk-",
    },
  ) => {
    return {
      name: "@getuikit/css",
      presets: [
        presetMini(options),
        presetAttributify({
          prefix: options.prefix as string,
        }),
        presetIcons({
          collections: {
            uikit: async () => {
              return icons;
            },
          },
        }),
        presetTypography(),
      ],
    };
  },
);

export default presetUIKit;
