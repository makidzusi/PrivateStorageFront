<template>
  <v-form @submit.prevent>
    <h1 class="text-center mb-4 text-2xl">Sign In</h1>
    <v-text-field label="Email" required autocomplete="email"></v-text-field>
    <v-text-field label="Password" required type="password" autocomplete="current-password"></v-text-field>
    <v-btn type="submit" color="success" class="mt-4" block> Sign In </v-btn>
    <p class="mt-4 text-center">
      Doesn't have an account yet?
      <RouterLink class="text-blue-500 hover:text-blue-600" :to="{ name: 'SignUp' }"
        >SignUp</RouterLink
      >
    </p>
  </v-form>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";


const authStore = useAuthStore();

const handleSignIn = () => {
  authStore.signInAsync()
};

</script>
