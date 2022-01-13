import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import { router } from '@/router'
import { getToken } from '@/utils/auth'
import { getAppEnvConfig } from '@/utils/env'
import { useUserStoreWithOut } from '@/store/modules/user'

const { VITE_GLOB_APP_TITLE } = getAppEnvConfig()

// NProgress Configuration
NProgress.configure({
  showSpinner: false
})

router.beforeEach(async(to, from, next) => {
  // 开始进度条
  NProgress.start()

  const hasToken = getToken()
  const userStore = useUserStoreWithOut()

  // 登录未过期或打开页面不需要登录
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 判断有无用户信息
      if (userStore.userInfo) {
        next()
      } else {
        try {
          // 获取用户信息
          const { roles } = await userStore.getInfo()
          console.log(roles)

          // 基于角色生成路由
          // const routes = await generateRoutes(roles)

          // 动态添加可访问路由
          // routes.forEach((route) => {
          //   router.addRoute(route)
          // })

          next({ ...to, replace: true })
        } catch (error) {
          await userStore.logout()
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (to.meta.requireAuth) {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    } else {
      next()
    }
  }
})

router.afterEach(to => {
  // 结束进度条
  NProgress.done()
  // 路由发生变化
  const metaTitle = to.meta.title
  if (metaTitle) {
    window.document.title = `${VITE_GLOB_APP_TITLE}-${metaTitle}`
  }
})
