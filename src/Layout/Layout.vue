<!--
 * @name: 
 * @Date: 2020-11-27 10:19:30
 * @LastEditTime: 2021-02-20 13:41:36
 * @FilePath: \ai_cloud\src\Layout\Layout.vue
 * @permission: 
-->
<template>
  <div class="flex">
    <!-- 左侧菜单 -->
    <md-menu />
    <div style="width: 100%">
      <!-- 头部信息 -->
      <md-header />
      <!-- 导航标签 -->
      <md-nav />
      <!-- 主体 -->
      <md-main />
    </div>
  </div>
</template>

<script>
import mdMenu from "./model/menu.vue";
import mdHeader from "./model/header.vue";
import mdNav from "./model/nav.vue";
import mdMain from "./model/main.vue";

export default {
  components: {
    mdMenu,
    mdHeader,
    mdNav,
    mdMain
  }
};
</script>
