import Vue from 'vue'
import VueRouter from 'vue-router'
// import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'cover',
    component: () => import('@/views/Cover.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/layout/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
