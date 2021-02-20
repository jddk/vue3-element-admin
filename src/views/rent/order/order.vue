<!--
 * @name: 
 * @Date: 2020-11-27 10:43:29
 * @LastEditTime: 2021-02-20 13:43:22
 * @FilePath: \ai_cloud\src\views\rent\order\order.vue
 * @permission: 
-->
<template>
  <div>
    订单
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
