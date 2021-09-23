import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'

// 模块
import user from './modules/user'

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user
  },
  getters,
  plugins: [createPersistedState({
    key: `vue3-tempalte`, // 状态保存到本地的 key
    paths: [], // 要持久化的状态，在state里面取
    storage: { // 存储方式定义
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
      removeItem: (key) => localStorage.removeItem(key)
    }
  })]
})
