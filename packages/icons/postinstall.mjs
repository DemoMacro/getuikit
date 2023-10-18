import {
  cleanupSVG,
  exportIconPackage,
  importDirectorySync,
  isEmptyColor,
  parseColorsSync,
  runSVGO,
  writeJSONFile,
} from "@iconify/tools";

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

// Export
writeJSONFile("./src/icons.json", iconSet.export());

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
