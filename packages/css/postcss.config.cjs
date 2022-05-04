module.exports = {
  plugins: [
    require("postcss-preset-env"),
    require("css-declaration-sorter")({ order: "concentric-css" }),
  ],
};
