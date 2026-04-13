// 引入createApp用于创建应用
import { createApp } from "vue";
// 引入App根组建
import App from "./App.vue";
import router from "./router";

// create an application
const app = createApp(App);

// use router
app.use(router);
// mounting entire application to the "app" container
app.mount("#app");
