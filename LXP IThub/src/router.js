import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./page/HomePage.vue";
import RegPage from "./page/RegPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/home", component: HomePage, alias: "/" },
    { path: "/reg", component: RegPage },
  ],
});
