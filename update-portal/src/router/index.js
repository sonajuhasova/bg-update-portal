import Vue from "vue";
import VueRouter from "vue-router";
import Events from "../views/Events.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Events",
    component: Events
  },
  {
    path: "/Gallery",
    name: "Gallery",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Gallery.vue")
  },
  {
    path: "/edit",
    name: "Edit",
    component: () => import("../views/Edit.vue"),
    props: true
  },
  {
    path: "/AddEvent",
    name: "AddEvent",
    component: () => import("../views/AddEvent.vue"),
    props: true
  },
  {
    path: "/AddPhoto",
    name: "AddPhoto",
    component: () => import("../views/AddPhoto.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
