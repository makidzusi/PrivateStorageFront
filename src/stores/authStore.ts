import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false
    }),
    actions: {
        signInAsync: () => {
            console.log(true)
        },
        signUpAsync: () => {
            console.log(true)
        },
        logOutAsync: () => {
            console.log(true)
        }
    }
})