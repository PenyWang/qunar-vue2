import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../pages/home/Home.vue'
// import Cities from '@/pages/cities/Cities.vue'
// import TestScroll from '@/pages/test-scroll/Scroll.vue'
// import TestRecursion from '@/pages/test-recursion/index.vue'
// import ScrollBehavior1 from '@/pages/test-behavior/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../pages/home/Home.vue') // 按需加载页面
  },
  {
    path: '/cities',
    name: 'Cities',
    component: () => import ('@/pages/cities/Cities.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import ('@/pages/detail/Detail.vue')
  },
  {
    path: '/test-scroll',
    name: 'test-scroll',
    component: () => import ('@/pages/test-scroll/Scroll.vue')
  },
  {
    path: '/test-recursion',
    name: 'test-recursion',
    component: () => import ('@/pages/test-recursion/index.vue')
  },
  {
    path: '/test-behavior',
    name: 'scroll-behavior',
    component: () => import ('@/pages/test-behavior/index.vue')
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
