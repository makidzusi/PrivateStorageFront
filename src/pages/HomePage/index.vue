<template>
  <div>
    <h1 class="text-2xl">Files</h1>
    <template v-if="data">
        <DirectoryView :directory="data"/>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getFolderByPathAsync } from "@/api/filesApi";
import DirectoryView from '@/components/DirectoryView/index.vue'
import Directory from "@/contracts/DirectoryDTO";
const data = ref<Directory | null>(null);

onMounted(() => {
  getFolderByPathAsync('/').then((res: Directory) => {
    data.value = res;
  });
});
</script>
