import type { Preset } from "@unocss/core";
import type { PresetMiniOptions, Theme } from "@unocss/preset-mini";
import { presetMini } from "@unocss/preset-mini";

export type PresetUIKitOptions = PresetMiniOptions;

export default function presetUIKit(
  options: PresetUIKitOptions = {
    variablePrefix: "uk",
    prefix: "uk",
  }
): Preset<Theme> {
  return {
    ...presetMini(options),
    name: "@getuikit/css",
  };
}
