<template>
  <div class="mt-2 h-full bg-neutral-800 p-2 rounded">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-xl hover:opacity-25 cursor-pointer transition-all">
        <v-icon icon="mdi-arrow-left"></v-icon>
        {{ props.directory.title }}
      </h2>
      <v-btn
        variant="outlined"
        icon
        color="secondary"
        @click="isListView = !isListView"
      >
        <v-icon v-if="!isListView">mdi-view-list-outline</v-icon>
        <v-icon v-else>mdi-view-grid-outline</v-icon>
      </v-btn>
    </div>
    <div class="flex gap-5 select-none flex-wrap" @contextmenu.prevent="handle">
      <template v-if="!isListView">
        <template v-for="child in props.directory.children" :key="child.id">
          <Directory
            @click="routeToDir(child as DirectoryDTO)"
            @contextmenu.prevent.stop="handleContextMenuEvent"
            v-if="child.isDir"
            :directory="(child as DirectoryDTO)"
          />
          <File
            @contextmenu.prevent.stop="handleContextMenuEvent"
            :file="(child as FileDTO)"
            v-else
          />
        </template>
      </template>
      <v-table class="w-full" v-else :hover="true">
        <thead>
          <tr>
            <th class="text-left">File Name</th>
            <th>Type</th>
            <th class="text-left">ModifiedAt</th>
          </tr>
        </thead>
        <tbody>
          <tr @contextmenu.prevent.stop="handleContextMenuEvent" v-for="item in props.directory.children" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item?.isDir ? 'Directory': 'File' }}</td>
            <td>{{ item.modifiedAt }}</td>
          </tr>
        </tbody>
      </v-table>
      <ContextMenu
        @close="isShowMenu = $event"
        :x="event?.x"
        :y="event?.y"
        v-if="isShowMenu"
      >
        <v-list-item
          v-for="(item, i) in options"
          :key="i"
          :value="item"
          active-color="primary"
          rounded="xl"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </ContextMenu>
      <ContextMenu
        :x="event?.x"
        :y="event?.y"
        v-if="isShowDirSettingsMenu"
        @close="isShowDirSettingsMenu = false"
      >
        <CreateFolderModal>
          <v-list-item active-color="primary" rounded="xl" value="createFolder">
            <template v-slot:prepend>
              <v-icon icon="mdi-folder-plus"></v-icon>
            </template>

            <v-list-item-title>Create folder</v-list-item-title>
          </v-list-item>
        </CreateFolderModal>
        <v-list-item active-color="primary" rounded="xl" value="uploadFiles">
          <template v-slot:prepend>
            <v-icon icon="mdi-upload"></v-icon>
          </template>

          <v-list-item-title>Upload files</v-list-item-title>
        </v-list-item>
      </ContextMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DirectoryDTO from "@/contracts/DirectoryDTO";
import FileDTO from "@/contracts/FileDTO";
import Directory from "./components/Directory.vue";
import File from "./components/File.vue";
import ContextMenu from "@/components/ContextMenu/index.vue";
import CreateFolderModal from "@/components/CreateFolderModal/index.vue";

interface Props {
  directory: DirectoryDTO;
}

const event = ref<MouseEvent | null>(null);
const isShowMenu = ref<boolean>(false);
const isShowDirSettingsMenu = ref<boolean>(false);
const isListView = ref(false);
const emit = defineEmits<{
  (e: "route", value: DirectoryDTO): void;
}>();

const routeToDir = (dir: DirectoryDTO) => {
  emit("route", dir);
};

const options = [
  {
    icon: "mdi-star-outline",
    text: "Add to favourites",
  },
  {
    icon: "mdi-recycle",
    text: "Delete",
  },
  {
    icon: "mdi-folder-move",
    text: "Move",
  },
  {
    text: "Rename",
    icon: "mdi-rename",
  },
];

const handleContextMenuEvent = (_event: MouseEvent) => {
  event.value = _event;
  isShowMenu.value = true;
};

const handle = (_event: MouseEvent) => {
  event.value = _event;
  isShowDirSettingsMenu.value = true;
};

const props = defineProps<Props>();
</script>
