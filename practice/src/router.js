import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./Views/Home";
import About from "./Views/About";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    // { path: "/", component: Home },
    // { path: "/about", component: About },
  ],
});

export default router;
