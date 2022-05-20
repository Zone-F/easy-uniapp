<template>
  <button :type="props.options.type">页面主操作 Normal</button>
</template>

<script setup lang="ts">
interface Props {
  options: {
    type?: "primary" | "default" | "warn";
  };
  compStyle?: object;
}
const props = withDefaults(defineProps<Props>(), {
  options: {
    type: "default"
  },
});
</script>

<style lang="sass" scoped></style>
