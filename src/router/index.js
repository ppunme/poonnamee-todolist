import { createRouter, createWebHashHistory } from "vue-router";
import Login from "../views/Login.vue";
import Todolist from "../views/Todolist.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/todolist",
    name: "todolist",
    component: Todolist,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
