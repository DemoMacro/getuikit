import type { Rule } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";
import { align } from "./align";
import { animation } from "./animation";
import { background } from "./background";
import { column } from "./column";
import { cover } from "./cover";
import { flex } from "./flex";
import { grid } from "./grid";
import { height } from "./height";
import { inverse } from "./inverse";
import { margin } from "./margin";
import { padding } from "./padding";
import { position } from "./position";
import { svg } from "./svg";
import { text } from "./text";
import { transition } from "./transition";
import { utility } from "./utility";
import { visibility } from "./visibility";
import { width } from "./width";

export const utilityRules: Rule<Theme>[] = [
  animation,
  width,
  height,
  text,
  column,
  cover,
  background,
  align,
  svg,
  utility,
  flex,
  grid,
  margin,
  padding,
  position,
  transition,
  visibility,
  inverse,
].flat(1);
