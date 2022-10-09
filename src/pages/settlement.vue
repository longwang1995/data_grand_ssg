<template>
  <div>
    <el-card>
      <el-form inline>
        <el-form-item label="品种名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="业务提交时间">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="销售负责人">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="结清类型">
          <ElSelect></ElSelect>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-table>
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  layout: "default",
};
</script>
<script setup>
import { useHead } from "@vueuse/head";
import {
  ElForm,
  ElFormItem,
  ElInput,
  ElSelect,
  ElCard,
  ElTable,
  ElTableColumn,
} from "element-plus";
useHead({
  title: "业务部结算清单",
});
</script>
<style lang="less" scoped></style>
