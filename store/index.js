import { createStore } from "vuex";
import todoModule from "./todoModule";

export const store = createStore({
  modules: { todoModule },
});
