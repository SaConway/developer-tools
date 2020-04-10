import Vue from "vue";
import VueRouter from "vue-router";
import JsonFormat from "../components/JsonFormat";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/json-format"
  },
  {
    path: "/json-format",
    component: JsonFormat
  }
];

const router = new VueRouter({
  routes
});

export default router;
