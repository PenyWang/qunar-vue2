import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../pages/home/Home.vue'
import Cities from '@/pages/cities/Cities.vue'
import TestScroll from '@/pages/test-scroll/Scroll.vue'
import TestRecursion from '@/pages/test-recursion/index.vue'
import ScrollBehavior1 from '@/pages/test-behavior/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cities',
    name: 'Cities',
    component: Cities
  },
  {
    path: '/test-scroll',
    name: 'test-scroll',
    component: TestScroll
  },
  {
    path: '/test-recursion',
    name: 'test-recursion',
    component: TestRecursion
  },
  {
    path: '/test-behavior',
    name: 'scroll-behavior',
    component: ScrollBehavior1
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
  scrollBehavior() {
      return { x: 0,y: 0};
  },
  routes,
})

export default router
