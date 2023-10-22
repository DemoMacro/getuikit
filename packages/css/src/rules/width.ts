import { Rule, toEscapedSelector } from "@unocss/core";

export const width: Rule[] = [
  [
    /^(w|width)-(\d+)-(\d+)$/,
    ([, , n, d]) => ({
      width: `${(Number(n) / Number(d)) * 100}%`,
    }),
  ],
];
