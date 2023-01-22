import { createRouter, RouterOptions, RouteRecordRaw, createWebHistory } from "vue-router";
import HomePage from '@/pages/HomePage/index.vue';

const routes : RouteRecordRaw[] = [{
    path: '/',
    component: HomePage,
    meta: {
        layout: 'MainLayout'
    }
}]

const router = createRouter(<RouterOptions>{
    routes,
    history: createWebHistory()
})

export default router;