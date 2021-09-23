import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'

/**
 * @description Svg图标
 */
import svgIcon from '@/assets/icons/index'

/**
 * @description 自定义指令
 */
import directives from "./directives"

/**
 * @description 初始化样式
 */
import '@/assets/styles/index.scss'

const app = createApp(App)

// 载入自定义指令
directives(app)

// 载入字体图标
svgIcon(app)

app.use(router)
app.use(store)
app.mount('#app')
