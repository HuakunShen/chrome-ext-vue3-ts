import { createApp } from "vue";
import Options from "./Options.vue";
import router from "./router";
import store from "./store";

createApp(Options).use(store).use(router).mount("#app");
