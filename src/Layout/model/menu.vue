<!--
 * @name: 
 * @Date: 2020-11-27 11:15:08
 * @LastEditTime: 2022-03-14 00:00:37
 * @FilePath: \vue3-element-admin\src\Layout\model\menu.vue
 * @permission: 
-->
<template>
  <div class="menu">
    <mdLogo :collapse="isCollapse" />
    <el-menu
      :default-active="currentRoute"
      :router="true"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :collapse="isCollapse"
      :collapse-transition="true"
      @select="toSelect"
    >
      <md-menu-item :menus="treeMenus" />
    </el-menu>
  </div>
</template>

<script>
import { ref, reactive, onMounted, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import mdMenuItem from "./menu-item.vue";
import mdLogo from "./logo";
import Bus from "./bus";

// 将路由转成树
function routesToTree() {
  const router = useRouter();
  const routes = router.options.routes;
  let menus = [];
  let treeMenus = [];
  for (let i = 0; i < routes.length; i++) {
    if (routes[i].path === "/") {
      const children = routes[i].children || [];
      menus = children.map(item => {
        return {
          path: item.path,
          name: item.name,
          meta: { ...item.meta }
        };
      });
      break;
    }
  }

  menus.forEach(item => {
    menus.forEach(cell => {
      if (item.meta && item.meta.parent === cell.name) {
        cell.children = cell.children || [];
        cell.children.push(item);
      }
    });
  });
  treeMenus = menus.filter(item => {
    if (item.meta) {
      return !item.meta.parent;
    }
  });
  return treeMenus;
}
export default {
  name: "app-menu",
  components: { mdMenuItem, mdLogo },
  setup() {
    // 1、选择路由
    const router = useRouter();
    function toSelect(path) {
      router.push({ path: path });
    }

    // 2、左侧菜单展开收起
    const isCollapse = ref(false);
    onMounted(() => {
      Bus.$on("change-menu", () => {
        isCollapse.value = !isCollapse.value;
      });
    });

    // 3、高亮当前路由
    const route = useRoute();
    const currentRoute = computed(() => route.path);

    // 4、路由转树
    const treeMenus = reactive(routesToTree());
    return { isCollapse, currentRoute, toSelect, treeMenus };
  }
};
</script>

<style lang="scss" scoped>
.menu {
  box-shadow: 2px 2px 2px #f0f0f0;
  position: relative;
  padding-top: 50px;
}
.el-menu {
  height: calc(100vh - 50px);
  overflow-y: auto;
}
.el-menu:not(.el-menu--collapse) {
  width: 220px;
}
.menu {
  // 整个滚动条
  ::-webkit-scrollbar {
    width: 0px;
    background: #304156;
  }

  /*滚动条中间滑动部分*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #304156;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(144, 147, 153, 0.3);
  }
}
</style>
