import presetUIKit from "@getuikit/css";
// uno.config.ts
import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetUIKit()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
