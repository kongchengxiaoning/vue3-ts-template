import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import svgIcon from '@/assets/icons/index'
import directives from './directives'
import './permission'
import '@/assets/styles/index.scss'

const app = createApp(App)

// Register global directive
directives(app)

// Register icon sprite
svgIcon(app)

// Configure routing
app.use(router)

// Configure store
app.use(store)

app.mount('#app')
