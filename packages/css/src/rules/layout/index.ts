import type { Rule } from "@unocss/core";
import { card } from "./card";
import { container } from "./container";
import { section } from "./section";
import { tile } from "./tile";

export const layoutRules: Rule[] = [section, container, tile, card].flat(1);
