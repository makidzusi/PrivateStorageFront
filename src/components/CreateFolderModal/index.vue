<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ props }">
      <div @click="handleClick">
        <slot />
      </div>
    </template>

    <div class="bg-neutral-800 rounded-md p-4 flex flex-col">
      <h3 class="text-white font-bold text-lg mb-2">Folder name</h3>
      <v-text-field variant="solo" label="Folder name"></v-text-field>
      <v-btn color="primary">Create</v-btn>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const dialog = ref<boolean>();

const handleClick = () => {
  dialog.value = true;
};
</script>
