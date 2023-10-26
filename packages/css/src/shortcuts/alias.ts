import type { UserShortcuts } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";

export const alias: UserShortcuts<Theme> = [
  [/^background-(.*)$/, ([, c]) => `bg-${c}`],
  [/^(width|height|padding|margin)-(.*)$/, ([, p, c]) => `${p.charAt(0)}-${c}`],
];
