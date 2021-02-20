<!--
 * @name: 
 * @Date: 2020-12-21 16:09:16
 * @LastEditTime: 2021-02-20 13:42:01
 * @FilePath: \ai_cloud\src\Layout\model\main.vue
 * @permission: 
-->
<template>
  <div style="padding: 10px; box-sizing: border-box">
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <keep-alive :include="data.cachedViews">
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import Bus from "./bus";
import { computed, onMounted, reactive } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "app-main",
  setup() {
    const route = useRoute();
    const data = reactive({ cachedViews: [] });
    const fullPath = computed(() => route.fullPath);

    onMounted(() => {
      const childrens = route.matched[0].children;
      childrens.forEach((item) => {
        if (item.meta && !item.meta.noCache) {
          data.cachedViews.push(item.name);
        }
      });

      // 如果标签被删除，则删除缓存
      Bus.$on("closeTag", (name) => {
        data.cachedViews.forEach((item, index) => {
          if (item === name) {
            data.cachedViews.splice(index, 1);
          }
        });
      });

      // 添加缓存
      Bus.$on("addCachedViews", (name) => {
        // nav.vue中已判断meta中是否有noCache
        if (!data.cachedViews.includes(name)) {
          data.cachedViews.push(name);
        }
      });
    });
    return { data, fullPath };
  }
};
</script>
