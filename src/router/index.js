import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/cover',
    name: 'cover',
    hidden: true,
    component: () => import('@/views/Cover.vue')
  },
  {
    path: '/',
    name: 'vue',
    redirect: '/vue',
    component: Layout,
    hidden: false,
    children: [
      {
        path: 'vue',
        name: 'vue',
        component: () => import('@/components/MdTemplate.vue'),
        meta: { title: 'vue', type: 'success' }// type 设置标签颜色 success,info,danger,warning,''
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
