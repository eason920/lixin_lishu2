const webpack = require("webpack");
const path = require("path");
const meta = require("./src/info/meta");

function resolve(dir) {
  return path.join(__dirname, ".", dir);
}

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/", // for php
  // publicPath: process.env.NODE_ENV === 'production' ? '/lixin_lishu/dist/' : '/', // for github
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    }
    // optimization: {
    //   splitChunks: {
    //     minSize: 10000,
    //     maxSize: 20000
    //   }
    // }
  },

  devServer: {
    port: 9000, // CHANGE YOUR PORT HERE!
    https: false
  },

  chainWebpack: config => {
    config.module.rules.delete("svg"); // 重点:删除默认配置中处理svg,
    // const svgRule = config.module.rule('svg')
    // svgRule.uses.clear()

    config.module
      .rule("@yzfe/vue-svgicon-loader")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/svg")) // 处理svg目录
      .end()
      .use("@yzfe/vue-svgicon-loader")
      .loader("@yzfe/vue-svgicon-loader")
      .options({
        symbolId: "icon-[name]"
      });
    config.plugin("html").tap(args => {
      args[0].title = meta.info.title;
      args[0].metaTitle = meta.info.title;
      args[0].ogMetaTitle = meta.info.title;
      args[0].metaDescription = meta.info.description;
      args[0].ogMetaDescription = meta.info.description;
      args[0].metaKeywords = meta.info.keywords;
      args[0].ogMetaType = "website";

      return args;
    });
    config.plugin("preload").tap(options => {
      // for import() lazy routes use initial https://github.com/vuejs/preload-webpack-plugin
      options.include = "initial";
      // or split chunks at the bottom
      options.include = ["chunk-elementUI"];
      return options;
    });
    // remove the prefetch plugin
    config.plugins.delete("prefetch");
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
};
