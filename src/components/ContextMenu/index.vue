<template>
  <v-list
    rounded="xl"
    v-on-click-outside="handleClickOutside"
    :style="{
      top: props.y + 'px',
      left: props.x + 'px',
    }"
    class="!fixed"
    item-title="name"
    item-value="id"
  >
    <slot />
  </v-list>
</template>

<script setup lang="ts">
import { vOnClickOutside } from "@vueuse/components";
interface Props {
  x?: number;
  y?: number;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (e: "close", value: boolean): void;
}>();
const handleClickOutside = (): void => {
  emit("close", false);
};
</script>
