<!--
 * @name: 
 * @Date: 2020-12-03 16:38:46
 * @LastEditTime: 2021-02-20 13:43:29
 * @FilePath: \ai_cloud\src\views\setting\permission\role\role.vue
 * @permission: 
-->
<template>
  <div>
    role
    <el-input v-model="test"></el-input>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "role",
  setup() {
    const test = ref("");
    return { test };
  }
};
</script>
