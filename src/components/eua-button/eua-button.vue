<template>
  <!-- <button :type="props.options.type">页面主操作 Normal</button> -->
  <button :type="props.options.type">页面主操作 Normal</button>
  <!-- <button >页面主操作 Normal</button> -->
</template>

<script setup lang="ts">
// const props = defineProps({
//   options: {
//     type:Object,
//     default:()=>{

//     }
//   }
// });
interface Props {
  options: {
    type: "primary" | "default" | "warn";
  };
  compStyle?: object;
}
const props = withDefaults(defineProps<Props>(), {
  options: {
    type: "default",
  },
});
// const props = defineProps<{
//   options: {
//     type?: "primary" | "default" | "warn";
//   };
//   compStyle?: object;
// }>();
</script>

<style lang="sass" scoped></style>
