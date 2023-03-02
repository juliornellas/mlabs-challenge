import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/users/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing-page",
      component: LandingPage,
    },
    {
      path: "/details/:user_id",
      name: "user-detail",
      component: () => import("@/views/users/details/Index.vue"),
      props: true,
    },
  ],
});

export default router;
