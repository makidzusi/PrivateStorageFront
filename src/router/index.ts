import {
  createRouter,
  RouterOptions,
  RouteRecordRaw,
  createWebHistory,
} from "vue-router";
import HomePage from "@/pages/HomePage/index.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HomePage,
    meta: {
      layout: "MainLayout",
    },
  },
  {
    path: "/auth",
    children: [
        {
            path: 'sign-in',
            name: "SignIn",
            component: () => import('../pages/SignInPage/index.vue'),
            meta: {
                layout: "AuthLayout",
            }
        },
        {
            path: 'sign-up',
            name: "SignUp",
            component: () => import('../pages/SignUpPage/index.vue'),
            meta: {
                layout: "AuthLayout",
            }
        }
    ]
  }
];

const router = createRouter(<RouterOptions>{
  routes,
  history: createWebHistory(),
});

export default router;
