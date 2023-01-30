<template>
  <v-app theme="dark">
    <v-navigation-drawer>
      <div class="m-2">
        <router-link
          class="p-4 h-10 flex items-center hover:bg-slate-800 rounded-md"
          :to="link.path"
          v-for="link in links"
          :key="link.path"
        >
          <v-icon :icon="link.icon"></v-icon>
          {{ link.title }}
        </router-link>
      </div>
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
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
interface Link {
  path: string;
  title: string;
  icon: string;
}

const links: Link[] = [
  {
    path: "/",
    icon: "mdiFolderHome",
    title: "My Files",
  },
  {
    path: "Favourites",
    icon: "mdiFolderHome",
    title: "Favourites",
  },
];
</script>
