import Vue from "vue";
import VueRouter from "vue-router";

import FormularioGastos from "./components/FormularioGastos/index.vue";
import RespuestasQuiz from "./components/RespuestasQuiz.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/gastos" },
    { path: "/gastos", component: FormularioGastos },
    { path: "/respuestas", component: RespuestasQuiz },
  ],
});
