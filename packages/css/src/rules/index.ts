import type { Rule } from "@unocss/core";
import { commonRules } from "./common";
import { elementsRules } from "./elements";
import { layoutRules } from "./layout";
import { navsRules } from "./navs";
import { utilityRules } from "./utilities";

export const rules: Rule[] = [
  ...commonRules,
  ...elementsRules,
  ...layoutRules,
  ...navsRules,
  ...utilityRules,
];
