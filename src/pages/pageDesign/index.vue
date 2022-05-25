<template>
  <el-row class="container">
    <el-col :span="5">
      <el-tabs tab-position="left" style="height: 100%">
        <el-tab-pane label="基础组件">
          <div></div>
          <div class="grid-content bg-purple">
            <div class="cell" @click="addComponents('EuaButton')">按钮</div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Config">Config</el-tab-pane>
        <el-tab-pane label="Role">Role</el-tab-pane>
        <el-tab-pane label="Task">Task</el-tab-pane>
      </el-tabs>
    </el-col>
    <el-col :span="13" class="center">
      <PreviewPage :options="componentList" />
      <!-- <eua-button
        :options="{
          type: 'warn',
        }"
      ></eua-button> -->
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">组件编辑区域</div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import PreviewPage from "@/pages/preview/index.vue";
import { EuaComponent } from "@/ts/components";
import { ref } from "vue";

const title = ref("Hello");

const componentList = ref<EuaComponent[]>([]);

function addComponents(type: string) {
  componentList.value.push({
    type,
    options: {
      type: "warn",
    },
    compStyle: {},
  });
}
</script>

<style scoped style="scss">
.cell {
  padding: 10px;
  width: 70px;
  margin: 0 auto;
  cursor: pointer;
  background: #fcd;
}
.container {
  height: 100vh;
}
.center {
  background: #f3f4f6;
}
</style>
