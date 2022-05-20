<template>
  <el-row>
    <el-col :span="5">
      <div class="grid-content bg-purple">
        <div class="cell">按钮</div>
      </div>
    </el-col>
    <el-col :span="13" class="container">
      <div class="grid-content bg-purple-light">2</div>
    </el-col>
    <el-col :span="6">
      <div class="grid-content bg-purple">3</div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
const title = ref("Hello");
</script>

<style scoped style="scss">
.cell {
  padding: 10px;
  width: 120px;
  margin: 0 auto;
  cursor: pointer;
  background: #fcd;
}
.container{
  background: #f3f4f6;
}
</style>
