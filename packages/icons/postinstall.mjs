import { mkdirSync, rmSync, writeFileSync } from "fs";
import {
  cleanupSVG,
  exportIconPackage,
  exportJSONPackage,
  importDirectorySync,
  isEmptyColor,
  parseColorsSync,
  runSVGO,
} from "@iconify/tools";
import { getIconsCSS, getIconsContentCSS } from "@iconify/utils";

// Import icons
const iconSet = importDirectorySync("./node_modules/uikit/src/images", {
  prefix: "uk",
});

// Validate, clean up, fix palette and optimise
iconSet.forEachSync((name, type) => {
  if (type !== "icon") {
    return;
  }

  const svg = iconSet.toSVG(name);
  if (!svg) {
    // Invalid icon
    iconSet.remove(name);
    return;
  }

  // Clean up and optimise icons
  try {
    // Clean up icon code
    cleanupSVG(svg);

    // Assume icon is monotone: replace color with currentColor, add if missing
    // If icon is not monotone, remove this code
    parseColorsSync(svg, {
      defaultColor: "currentColor",
      callback: (attr, colorStr, color) => {
        return !color || isEmptyColor(color) ? colorStr : "currentColor";
      },
    });

    // Optimise
    runSVGO(svg);
  } catch (err) {
    // Invalid icon
    console.error(`Error parsing ${name}:`, err);
    iconSet.remove(name);
    return;
  }

  // Update icon
  iconSet.fromSVG(name, svg);
});

const icons = iconSet.export();

// Export
rmSync("dist", { recursive: true, force: true });

(async () => {
  // Target directory
  const target = "dist/json";

  // Export package
  await exportJSONPackage(iconSet, {
    target,
    cleanup: true,
  });
})();

(async () => {
  // Target directory
  const target = "dist/es";

  // Export package
  await exportIconPackage(iconSet, {
    target,
    module: true,
    cleanup: true,
  });
})();

mkdirSync("dist/css", { recursive: true });

// Generate Icons CSS
const IconsCSS = getIconsCSS(icons, iconSet.list(), {
  iconSelector: ".{prefix}-icon-{name}",
});

writeFileSync("dist/css/icons.css", IconsCSS, { encoding: "utf8" });

// GenerateIcons Content CSS
const IconsContentCSS = getIconsContentCSS(icons, iconSet.list(), {
  iconSelector: ".{prefix}-icon-{name}::after",
  height: 16,
});

writeFileSync("dist/css/icons-content.css", IconsContentCSS, {
  encoding: "utf8",
});
