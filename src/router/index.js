import Vue from "vue";
import VueRouter from "vue-router";
import JsonFormat from "@/components/JsonFormat";
import PxRemConverter from "@/components/PxRemConverter";
import HexRgbConverter from "@/components/HexRgbConverter";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/json-format"
  },
  {
    path: "/json-format",
    component: JsonFormat
  },
  {
    path: "/px-rem-converter",
    component: PxRemConverter
  },
  {
    path: "/hex-rgb-converter",
    component: HexRgbConverter
  }
];

const router = new VueRouter({
  routes
});

export default router;
