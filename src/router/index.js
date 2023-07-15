import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FavoriteView from "../views/FavoriteView";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
    // props: { name: "home" },
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: FavoriteView,
    props: {
      name: "favorite",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
