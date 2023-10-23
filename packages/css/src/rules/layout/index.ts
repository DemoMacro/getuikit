import type { Rule } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";
import { card } from "./card";
import { container } from "./container";
import { section } from "./section";
import { tile } from "./tile";

export const layoutRules: Rule<Theme>[] = [section, container, tile, card].flat(
  1,
);
