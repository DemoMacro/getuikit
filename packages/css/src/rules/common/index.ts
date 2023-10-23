import type { Rule } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";
import { alert } from "./alert";
import { article } from "./article";
import { badge } from "./badge";
import { close } from "./close";
import { comment } from "./comment";
import { label } from "./label";
import { marker } from "./marker";
import { overlay } from "./overlay";
import { placeholder } from "./placeholder";
import { search } from "./search";
import { spinner } from "./spinner";
import { totop } from "./totop";

export const commonRules: Rule<Theme>[] = [
  close,
  spinner,
  totop,
  marker,
  alert,
  placeholder,
  badge,
  label,
  overlay,
  article,
  comment,
  search,
].flat(1);
