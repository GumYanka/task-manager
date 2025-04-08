import AllCardsVue from "@/pages/AllCards.vue";
import NewCardVue from "@/pages/NewCard.vue";
import TaskInfoVue from "@/pages/TaskInfo.vue";
//import NotFound from "@/pages/NotFound.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AllCardsVue,
    },
    {
      path: "/new",
      name: "newCard",
      component: NewCardVue,
    },
    {
      path: "/task/:id",
      name: "taskInfo",
      component: TaskInfoVue,
    },
    // {
    //   path: "/:pathMatch(.*)*",
    //   name: "NotFound",
    //   component: NotFound,
    // },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
