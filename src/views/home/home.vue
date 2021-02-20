<!--
 * @name: 
 * @Date: 2020-11-27 10:26:19
 * @LastEditTime: 2021-02-20 13:43:04
 * @FilePath: \ai_cloud\src\views\home\home.vue
 * @permission: 
-->
<template>
  <div>
    <el-table :data="tableData">
      <el-table-column label="序号" type="index"></el-table-column>
      <el-table-column label="条形码" prop="barCode"></el-table-column>
      <el-table-column label="产品名" prop="name"></el-table-column>
    </el-table>
  </div>
</template>

<script>
import { toRefs, reactive } from "vue";

export default {
  name: "order",
  setup() {
    const data = reactive({
      tableData: [
        { barCode: "DEBD-124", name: "方圆扣" },
        { barCode: "DEBD-125", name: "方圆扣" },
        { barCode: "DEBD-126", name: "方圆扣" },
        { barCode: "DEBD-127", name: "方圆扣" }
      ]
    });
    return { ...toRefs(data) };
  }
};
</script>

<style scoped></style>
