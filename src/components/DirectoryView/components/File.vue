<template>
  <div class="w-fit cursor-pointer hover:opacity-40 transition-all">
    <svg
      class="h-24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      version="1.1"
    >
      <path
        d="M853.333333 960H170.666667V64h469.333333l213.333333 213.333333z"
        fill="#90CAF9"
      />
      <path d="M821.333333 298.666667H618.666667V96z" fill="#E1F5FE" />
    </svg>
    <span class="block text-center">{{ props.file.title }}</span>
  </div>
</template>

<script lang="ts" setup>
import FileDTO from "@/contracts/FileDTO";
interface Props {
  file: FileDTO;
}
const props = defineProps<Props>();
</script>
