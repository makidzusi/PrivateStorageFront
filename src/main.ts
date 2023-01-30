import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'
import '@/assets/styles/index.scss'

import MainLayout from '@/layouts/MainLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const pinia = createPinia()


const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(pinia)

app.component('MainLayout', MainLayout)
app.component('AuthLayout', AuthLayout)

app.mount('#app')
