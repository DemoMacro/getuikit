import type { UserShortcuts } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";

export const baseSizeAlias: Record<string, string> = {
  xsmall: "xs",
  small: "sm",
  medium: "md",
  large: "lg",
  xlarge: "xl",
  "2xlarge": "2xl",
  "3xlarge": "3xl",
  "4xlarge": "4xl",
  "5xlarge": "5xl",
  "6xlarge": "6xl",
  "7xlarge": "7xl",
};

export const alias: UserShortcuts<Theme> = [
  [/^background-(.*)$/, ([, c]) => `bg-${c}`],
  [/^(width|height|padding|margin)-(.*)$/, ([, p, c]) => `${p.charAt(0)}-${c}`],
  [
    /^(.*)-(xsmall|small|medium|large|xlarge|2xlarge|3xlarge|4xlarge|5xlarge|6xlarge|7xlarge)$/,
    ([c]) =>
      `${c.substring(0, c.lastIndexOf("-")).charAt(0)}-${
        baseSizeAlias[c.substring(c.lastIndexOf("-") + 1)]
      }`,
  ],
];
