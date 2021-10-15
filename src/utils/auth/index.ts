import Cookies from 'js-cookie'
const TOKEN_KEY = 'VUE3-TOKEN_KEY'

export function getToken() {
  return Cookies.get(TOKEN_KEY)
}

export function setToken(token: string) {
  return Cookies.set(TOKEN_KEY, token)
}

export function removeToken() {
  return Cookies.remove(TOKEN_KEY)
}
