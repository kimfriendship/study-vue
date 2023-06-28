const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  devServer: {
    overlay: {
      warnings: false,
    },
  },
  chainWebpack: (config) => {
    // config.module.rule("svg").uses.clear();
    // config.module
    //   .rule("svg")
    //   .use("babel-loader")
    //   .loader("babel-loader")
    //   .end();
    // config.module
    //   .rule("svg")
    //   .exclude.add(resolve("src/svg-icons"))
    //   .end();
    config.module
      .rule("svg")
      .test(/\.svg$/)
      .include.add(resolve("src/svg-icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end();
    // .use("svgo-loader")
    // .loader("svgo-loader")
    // .options({
    //   removeTitle: true,
    //   convertPathData: false,
    //   removeUselessStrokeAndFill: true,
    // })
    // .end();

    // config.module.rules.delete("svg");
    // config.module
    //   .rule("svg-sprite-loader")
    //   .test(/.svg$/)
    //   .include.add(path.resolve("src/lottie"))
    //   .end()
    //   .use("svg-sprite-loader")
    //   .loader("svg-sprite-loader")
    //   .options({
    //     symbolId: "icon-[name]",
    //   });

    // const svgRule = config.module.rule("svg");
    // svgRule.uses.clear();
    // svgRule
    //   .use("babel-loader")
    //   .loader("babel-loader")
    //   .end()
    //   // .use("vue-svg-loader")
    //   // .loader("vue-svg-loader");
    //   .use("svg-sprite-loader")
    //   .loader("svg-sprite-loader")
    //   .options({
    //     runtimeGenerator: require.resolve(
    //       "./svg-to-icon-component-runtime-generator"
    //     ),
    //     // runtimeOptions: {
    //     //   iconModule: "./assets", // Relative to current build context folder}
    //     // },
    //   })
    //   .end();
  },
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     "@": resolve("src"),
    //   },
    plugins: [
      // new BundleAnalyzerPlugin({
      //   analyzerMode: "static",
      //   reportFilename: `report-${new Date().getTime()}.html`,
      //   generateStatsFile: true,
      // }),
      new SpriteLoaderPlugin(),
    ],
  },
};
