import presetUIKit from "@getuikit/css/dist/icons";
import {
  defineConfig,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [presetUIKit()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
