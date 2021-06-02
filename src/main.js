import Vue from "vue";
import App from "./App.vue";

import "jquery";
import "popper.js";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { router } from "./routes";

import VueForm from "vue-form";
Vue.use(VueForm);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
