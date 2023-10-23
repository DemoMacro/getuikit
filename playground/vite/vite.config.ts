// vite.config.ts
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";

export default defineConfig({
  plugins: [
    UnoCSS(),
    Pages({
      extensions: ["html"],
    }),
  ],
});
