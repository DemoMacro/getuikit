import presetUIKit from "@getuikit/css/icons";
import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetUIKit()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
