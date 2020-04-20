import Vue from "vue";
import VueRouter from "vue-router";
import Intro from "@/components/Intro";
import JsonFormat from "@/components/JsonFormat";
import PxRemConverter from "@/components/PxRemConverter";
import HexRgbConverter from "@/components/HexRgbConverter";
import SvgPathLength from "@/components/SvgPathLength";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Intro,
    name: "homepage",
  },
  {
    path: "/json-format",
    component: JsonFormat,
  },
  {
    path: "/px-rem-converter",
    component: PxRemConverter,
  },
  {
    path: "/hex-rgb-converter",
    component: HexRgbConverter,
  },
  {
    path: "/svg-path-length",
    component: SvgPathLength,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
