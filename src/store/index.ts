import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'

/* Modules */
import user from './modules/user'

export default createStore({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user
  },
  getters,
  plugins: [createPersistedState({
    key: `vue3-tempalte`,
    paths: [],
    storage: {
      getItem: (key) => localStorage.getItem(key),
      setItem: (key, value) => localStorage.setItem(key, value),
      removeItem: (key) => localStorage.removeItem(key)
    }
  })]
})
