import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import RegPage from "./components/RegPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/home", component: HomePage, alias: "/" },
    { path: "/reg", component: RegPage },
  ],
});
