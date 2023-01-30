<template>
  <div class="mt-2 h-full">
    <h2 class="text-xl">{{ props.directory.title }}</h2>
    <div class="flex gap-5 select-none flex-wrap">
      <template v-for="child in props.directory.children" :key="child.id">
        <Directory @contextmenu.prevent="handleContextMenuEvent" v-if="child.isDir" :directory="(child as DirectoryDTO)" />
        <File @contextmenu.prevent="handleContextMenuEvent" :file="(child as FileDTO)" v-else />
      </template>
      <ContextMenu :x="event?.x" :y="event?.y"  v-if="isShowMenu" id="asds"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import DirectoryDTO from "@/contracts/DirectoryDTO";
import FileDTO from "@/contracts/FileDTO";
import Directory from "./components/Directory.vue";
import File from "./components/File.vue";
import ContextMenu from "@/components/ContextMenu/index.vue"

interface Props {
  directory: DirectoryDTO;
}

const event = ref<MouseEvent | null>(null)
const isShowMenu = ref<boolean>(false)


const handleContextMenuEvent = (_event: MouseEvent) => {
    event.value = _event
    console.log(_event)
    isShowMenu.value = true
}

const props = defineProps<Props>();
</script>
