<template>
  <v-list
    :style="{
      top: props.y + 'px',
      left: props.x + 'px',
    }"
    class="!fixed"
    :items="items"
    item-title="name"
    item-value="id"
  ></v-list>
</template>

<script setup lang="ts">
interface Props {
  id: string;
  x?: number;
  y?: number;
}

const items = [
  {
    name: "Rename",
    id: 1,
  },
  {
    name: "Delete",
    id: 2,
  },
  {
    name: "Move",
    id: 3,
  },
];

const props = defineProps<Props>();
</script>
