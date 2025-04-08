import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import { VueFire } from "vuefire";
import { db } from "./firebase/init";
import { store } from "../store";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App)
  .use(router)
  .use(store)
  .use(pinia)
  .use(VueFire, { db })
  .mount("#app");
