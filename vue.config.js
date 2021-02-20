/*
 * @name:
 * @Date: 2020-11-30 16:59:39
 * @LastEditTime: 2021-02-20 13:14:28
 * @FilePath: \ai_cloud\vue.config.js
 * @permission:
 */
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, ".", dir);
}
module.exports = {
  productionSourceMap: false,
  devServer: {
    port: 8088,
    open: true
  },
  // 使用svg-sprite-loader自动导入svg图标
  chainWebpack: (config) => {
    config.module.rule("svg").exclude.add(resolve("src/icons")).end();

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
  }
};
