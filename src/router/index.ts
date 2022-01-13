import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { getAppEnvConfig } from '@/utils/env'

const { VITE_PUBLIC_PATH } = getAppEnvConfig()

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
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' }
      }
    ]
  },
  ...ERROR_ROUTES
]

const router = createRouter({
  strict: true,
  history: createWebHistory(`${VITE_PUBLIC_PATH}`),
  scrollBehavior: () => ({ top: 0, left: 0 }),
  routes: routes as unknown as RouteRecordRaw[]
})

/* resetRouter */
export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export { router }
