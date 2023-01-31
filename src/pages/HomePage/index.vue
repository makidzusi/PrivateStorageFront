<template>
  <div>
    <h1 class="text-2xl">Files</h1>
    <template v-if="data">
      <div class="flex items-center text-lg text-neutral-400">
        <div
          class="mr-2 hover:text-white/25 cursor-pointer"
          @click="handleFolderChangeByPath(0)"
        >
          /
        </div>
        <div
          class="mr-2"
          v-for="(item, idx) in data.path.split('/').filter((el) => el !== '')"
        >
          <span
            @click="handleFolderChangeByPath(idx + 1)"
            class="mr-2 hover:text-white/25 cursor-pointer"
            >{{ item }}</span
          >
          <span>/</span>
        </div>
      </div>
      <DirectoryView @route="handleFolderChange" :directory="data" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getFolderByPathAsync, getFolderByIdAsync } from "@/api/filesApi";
import DirectoryView from "@/components/DirectoryView/index.vue";
import Directory from "@/contracts/DirectoryDTO";
const data = ref<Directory | null>(null);

onMounted(() => {
  getFolderByPathAsync("/").then((res: Directory) => {
    data.value = res;
  });
});

const handleFolderChangeByPath = (_pos: number) => {
  let _path;
  if (_pos === 0) {
    _path = "/";
  } else {
    _path = data.value?.path
      .split("/")
      .slice(0, _pos + 1)
      .join("/");
  }

  if (_path) {
    getFolderByPathAsync(_path).then((res: Directory) => {
      data.value = res;
    });
  }
};

const handleFolderChange = (_dir: Directory) => {
  getFolderByIdAsync(_dir.id).then((res: Directory) => {
    data.value = res;
  });
};
</script>
