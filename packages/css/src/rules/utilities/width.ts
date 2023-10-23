import type { Rule } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";

export const width: Rule<Theme>[] = [
  [
    /^(w|width)-(\d+)-(\d+)$/,
    ([, , n, d]) => ({
      width: `${(Number(n) / Number(d)) * 100}%`,
    }),
  ],
];
