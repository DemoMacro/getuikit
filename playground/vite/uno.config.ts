// uno.config.ts
import { defineConfig } from "unocss";
import presetUIKit from "@getuikit/css";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUIKit()],
});
