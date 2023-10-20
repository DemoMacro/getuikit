# @getuikit/css

![npm version](https://img.shields.io/npm/v/@getuikit/css)
![npm downloads](https://img.shields.io/npm/dw/@getuikit/css)
![npm license](https://img.shields.io/npm/l/@getuikit/css)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)

> UIKit-style preset for UnoCSS, powered by Demo Macro.

## Getting started

```bash
# npm
$ npm install -D @getuikit/css

# yarn
$ yarn add -D @getuikit/css

# pnpm
$ pnpm add -D @getuikit/css
```

## Usage

### Unocss

```ts
// uno.config.ts
import presetUIKit from "@getuikit/css";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [presetUIKit()],
});
```

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@getuikit/css/dist/runtime.global.js"></script>
```

## License

- [MIT](LICENSE) &copy; [Demo Macro](https://imst.xyz/)
