import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
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
  ]
});
