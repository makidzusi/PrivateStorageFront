<template>
  <v-form ref="form" @submit.prevent>
    <h1 class="text-center mb-4 text-2xl">Sign Up</h1>
    <v-text-field label="Email" required autocomplete="email"></v-text-field>
    <v-text-field
      label="Username"
      required
      autocomplete="username"
    ></v-text-field>
    <v-text-field
      label="Password"
      required
      type="password"
      autocomplete="current-password"
    ></v-text-field>
    <v-btn
      type="submit"
      @click="handleSignUp"
      color="success"
      class="mt-4"
      block
    >
      Sign Up
    </v-btn>
    <p class="mt-4 text-center">
      Already have an account?
      <RouterLink
        class="text-blue-500 hover:text-blue-600"
        :to="{ name: 'SignIn' }"
        >SignIn</RouterLink
      >
    </p>
  </v-form>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/authStore";


const authStore = useAuthStore();

const handleSignUp = () => {
  authStore.signUpAsync()
};
</script>
