<template>
  <v-app theme="dark">
    <v-navigation-drawer>
      <v-list>
        <v-list-subheader>Navigation</v-list-subheader>
        <div class="mb-2 flex flex-col gap-2 p-2">
          <v-btn block color="primary" prepend-icon="mdi-upload">Upload</v-btn>
          <CreateFolderModal>
            <v-btn
            block
            variant="outlined"
            prepend-icon="mdi-folder-plus"
            color="secondary"
            >Create</v-btn
          >
          </CreateFolderModal>

        </div>
        <v-list-item
          @click="$router.push({ name: item.path })"
          v-for="(item, i) in links"
          :key="i"
          :value="item"
          active-color="primary"
          rounded="shaped"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      title="PrivateCloud"
      class="flex flex-row items-center justify-center"
    >
      <v-autocomplete
        variant="solo"
        :hide-details="true"
        label="Find File"
        :items="[
          'California',
          'Colorado',
          'Florida',
          'Georgia',
          'Texas',
          'Wyoming',
        ]"
      ></v-autocomplete>
      <v-avatar color="primary"> </v-avatar>
    </v-app-bar>

    <v-main>
      <v-container>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import CreateFolderModal from '@/components/CreateFolderModal/index.vue'
interface Link {
  path: string;
  title: string;
  icon: string;
}

const links: Link[] = [
  {
    path: "Home",
    icon: "mdi-folder",
    title: "My Files",
  },
  {
    path: "Favourites",
    icon: "mdi-folder-star",
    title: "Favourites",
  },
  {
    path: "Recycle",
    icon: "mdi-recycle",
    title: "Recycle Bin",
  },
  {
    path: "Shared",
    icon: "mdi-wifi ",
    title: "Shared Files",
  },
];
</script>
