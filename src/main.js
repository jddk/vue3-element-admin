/*
 * @name:
 * @Date: 2020-11-27 09:49:28
 * @LastEditTime: 2021-02-20 14:07:47
 * @FilePath: \ai_cloud\src\main.js
 * @permission:
 */
import { createApp } from "vue";
import "normalize.css/normalize.css";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router/router";
import "./router/routerIntercept";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import "@/styles/index.scss"; // global css

import SvgIcon from "@/components/SvgIcon/SvgIcon.vue";

createApp(App)
  .use(router)
  .use(ElementPlus, { size: "small" })
  .component("svg-icon", SvgIcon)
  .mount("#app");

// 自动导入svg
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
const req = require.context("./icons/svg", false, /\.svg$/);
requireAll(req);
