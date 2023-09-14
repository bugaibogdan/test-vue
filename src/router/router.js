import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import RestaurantPage from "@/pages/RestaurantPage.vue";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/restourant/:restourant",
    component: RestaurantPage,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
