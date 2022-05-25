import { ref } from "vue";

export const contentTabs = [
  { name: "pageDesgin", label: "页面管理" },
  { name: "应用预览", label: "" },
  { name: "应用管理", label: "" },
  { name: "应用设置", label: "" },
];
export const contentTabsActive = ref("pageDesgin");