<!--
 * @name: 
 * @Date: 2020-11-27 10:44:06
 * @LastEditTime: 2021-02-20 13:12:55
 * @FilePath: \ai_cloud\src\views\rent\contract\contract.vue
 * @permission: 
-->

<template>
  <div>
    合同
    <el-input v-model="test"></el-input>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "contract",
  setup() {
    const test = ref("");
    return { test };
  }
};
</script>

<style scoped></style>
