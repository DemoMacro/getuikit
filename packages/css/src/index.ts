import type { Preset } from "unocss";
import {
  presetAttributify,
  presetIcons,
  presetMini,
  presetTypography,
  presetWebFonts,
} from "unocss";
import type { PresetMiniOptions, Theme } from "unocss/preset-mini";

export type PresetUIKitOptions = PresetMiniOptions;

export default function presetUIKit(
  options: PresetUIKitOptions = {
    variablePrefix: "uk",
    prefix: "uk",
  },
): Preset<Theme> {
  return {
    name: "@getuikit/css",
    presets: [
      presetMini(options),
      presetAttributify({
        prefix: options.prefix as string,
      }),
      presetIcons(),
      presetTypography(),
    ],
  };
}
