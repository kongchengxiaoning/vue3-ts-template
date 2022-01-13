import '@/assets/styles/index.scss'
import './permission'
import App from './App.vue'
import { createApp } from 'vue'
import { router } from './router'
import { store } from './store'
import { globSvgIcon } from '@/assets/icons/index'
import { globDirectives } from './directives'

const app = createApp(App)

// Configure routing
app.use(router)

// Configure store
app.use(store)

// Register icon sprite
globSvgIcon(app)

// Register global directive
globDirectives(app)

app.mount('#app')
