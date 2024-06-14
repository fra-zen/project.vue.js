import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./page/HomePage.vue";
import PortfolioPage from "./page/PortfolioPage.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/home", component: HomePage, alias: "/" },
    { path: "/reg", component: PortfolioPage },
  ],
});
