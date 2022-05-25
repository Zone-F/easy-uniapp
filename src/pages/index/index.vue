<template>
  <el-row>
    <el-col :span="6">
      <div>应用列表</div>
    </el-col>
    <el-col :span="18">
      <div>头部导航栏</div>
      <div>
        <el-tabs v-model="contentTabsActive">
          <el-tab-pane label="页面管理" name="pageDesgin">
            页面管理
          </el-tab-pane>
        </el-tabs>
        <div>app列表</div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { contentTabs, contentTabsActive } from "./index";
</script>

<style lang="scss" scoped></style>
