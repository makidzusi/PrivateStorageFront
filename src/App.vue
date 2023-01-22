<template>
  <component :is="$route.meta.layout">
    <RouterView></RouterView>
  </component>
</template>

<script setup lang="ts">
import {RouterView} from 'vue-router'
</script>