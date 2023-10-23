import type { Rule } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";
import { commonRules } from "./common";
import { elementsRules } from "./elements";
import { layoutRules } from "./layout";
import { navsRules } from "./navs";
import { utilityRules } from "./utilities";

export const rules: Rule<Theme>[] = [
  ...commonRules,
  ...elementsRules,
  ...layoutRules,
  ...navsRules,
  ...utilityRules,
];
