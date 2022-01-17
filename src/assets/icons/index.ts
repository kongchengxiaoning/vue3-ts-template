import 'virtual:svg-icons-register'
import SvgIcon from '@/components/SvgIcon/index.vue'

export const globSvgIcon = (app) => {
  // 注册全局组件
  app.component('SvgIcon', SvgIcon)
}
