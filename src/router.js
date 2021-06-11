import Vue from "vue";
import VueRouter from "vue-router";

import Notas from "./components/Notas";
import Answers from "./components/Answers";
import Home from "./components/Home";
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/notas", component: Notas },
    { path: "/respuestas", component: Answers },
  ],
});
