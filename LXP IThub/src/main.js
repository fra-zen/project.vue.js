import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Menu from "./components/Menu.vue";
import Schedule from "./components/Schedule.vue";
import Comment from "./components/Comment.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.component("my-component", Menu);
app.component("my-component_two", Schedule);
app.component("my-component_three", Comment);
