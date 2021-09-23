import router from '@/router'
import store from '@/store'
import config from '@/assets/scripts/config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'

// NProgress Configuration
NProgress.configure({ 
  showSpinner: false
})

const { TITLE } = config

router.beforeEach(async(to, from, next: Function) => {
  // 开始进度条
  NProgress.start()
  // 获取Token
  const hasToken = getToken()
  // 登录未过期或打开页面不需要登录
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      // 判断有无用户信息
      if (store.getters.userInfo) {
        next()
      } else {
        try {
          // 获取用户信息
          // const { roles } = await store.dispatch('user/getInfo')

          // // 基于角色生成路由
          // const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

          // 动态添加可访问路由
          // router.addRoute(...accessRoutes)

          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          console.log(error || 'Has Error')
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
    window.document.title = `${TITLE}-${metaTitle}`
  }
})
