import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

/* Router Modules */
import ERROR_ROUTES from '@/router/modules/error' // 错误页面路由

/* ConstantRoutes */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: 'home',
    component: Layout,
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
        meta: { title: '首页' }
      }
    ]
  },
  ...ERROR_ROUTES
]

const router = createRouter({
  strict: true,
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0, left: 0 }),
  routes
})

// 重置路由
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export default router
