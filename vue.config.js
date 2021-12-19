const path = require("path");

module.exports = {
  publicPath: "",
  outputDir: "dist/ui",
  // pages: {
  //   index: {
  //     entry: "src/ui/main.ts",
  //     template: "public/index.html",
  //     filename: "index.html",
  //     title: "Popup Page",
  //     chunks: ["chunk-vendors", "chunk-common", "index"],
  //   },
  //   options: {
  //     entry: "src/ui/options.ts",
  //     template: "public/index.html",
  //     filename: "options.html",
  //     title: "Options Page",
  //     chunks: ["chunk-vendors", "chunk-common", "index"],
  //   },
  // },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
      extensions: [".ts", ".js", ".vue", ".json"],
    },
  },
};
