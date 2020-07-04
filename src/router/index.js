import Vue from "vue";
import VueRouter from "vue-router";
import validationform from "../components/validationform"
import Vuex from "../components/Vuex"
import Table from "../components/Table"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "addEmployee",
    component: validationform
  },
  {
    path: "/editemployee",
    name: "About",
    component:Vuex
},
{
  path: "/table",
  name: "table",
  component:Table
}
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
