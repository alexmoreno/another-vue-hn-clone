import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home/:page?",
    name: "Home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/item/:id?",
    name: "ItemView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ItemView.vue")
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue")
  }
];

const router = new VueRouter({
  routes
});


export default router;
