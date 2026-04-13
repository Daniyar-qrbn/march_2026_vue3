// create a router and expose it

import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";
const router = createRouter({
  history: createWebHistory(), //work mode of router
  routes: [
    {
      name: "bashbet",
      path: "/home",
      component: Home,
    },
    {
      name: "xewer",
      path: "/news",
      component: News,
      children: [{ path: "detail/:id/:title/:content", component: Detail }],
    },
    {
      name: "heqqide",
      path: "/about",
      component: About,
    },
  ],
});
export default router;
