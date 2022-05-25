<template>
  <div>
    <component
      v-for="(item, index) in options"
      :key="index"
      :is="componentsMap[item.type]"
      :options="item.options"
      :compStyle="item.compStyle"
    ></component>
  </div>
</template>

<script setup lang="ts">
import EuaButton from "@/components/eua-button/eua-button.vue";

const componentsMap = {
  EuaButton: EuaButton,
};

interface Props {
  options: [];
}
const props = withDefaults(defineProps<Props>(), {
  options: [],
});

console.log("options", props.options);
</script>

<style lang="scss" scoped></style>
