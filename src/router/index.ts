import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../pages/home/Home.vue'
import List from '../pages/list/List.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/list',
  //   name: 'List',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../pages/list/List.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
