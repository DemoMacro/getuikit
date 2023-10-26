import type { UserShortcuts } from "@unocss/core";
import type { Theme } from "@unocss/preset-mini";
import { alias } from "./alias";

export const shortcuts: UserShortcuts<Theme> = [alias].flat(1);
