import type { Rule } from "@unocss/core";
import { breadcrumb } from "./breadcrumb";
import { dotnav } from "./dotnav";
import { dropdown } from "./dropdown";
import { iconnav } from "./iconnav";
import { lightbox } from "./lightbox";
import { nav } from "./nav";
import { navbar } from "./navbar";
import { pagination } from "./pagination";
import { slidenav } from "./slidenav";
import { subnav } from "./subnav";
import { tab } from "./tab";
import { thumbnav } from "./thumbnav";

export const navsRules: Rule[] = [
  nav,
  navbar,
  subnav,
  breadcrumb,
  pagination,
  tab,
  slidenav,
  dotnav,
  thumbnav,
  iconnav,
  dropdown,
  lightbox,
].flat(1);
