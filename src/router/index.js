import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/TheMain.vue")
  },
  {
    path: "/works-Printbakery",
    name: "works-Printbakery",
    component: () => import("../views/TheWork01.vue")
  },
  {
    path: "/works-Marshall",
    name: "works-Marshall",
    component: () => import("../views/TheWork02.vue")
  },
  {
    path: "/works-Samhwa",
    name: "works-Samhwa",
    component: () => import("../views/TheWork03.vue")
  },
  {
    path: "/works-Laftel",
    name: "works-Laftel",
    component: () => import("../views/TheWork04.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
