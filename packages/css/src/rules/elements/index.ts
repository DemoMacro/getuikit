import type { Rule } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";
import { button } from "./button";
import { descriptionList } from "./description-list";
import { divider } from "./divider";
import { form } from "./form";
import { formRange } from "./form-range";
import { heading } from "./heading";
import { icon } from "./icon";
import { link } from "./link";
import { list } from "./list";
import { progress } from "./progress";
import { table } from "./table";

export const elementsRules: Rule<Theme>[] = [
  link,
  heading,
  divider,
  list,
  descriptionList,
  table,
  icon,
  formRange,
  form,
  button,
  progress,
].flat(1);
