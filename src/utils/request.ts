import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { getToken, removeToken } from './auth'

import config from '@/assets/scripts/config'
const { BASE_URL } = config

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? BASE_URL.PRO : BASE_URL.DEV, // 测试环境用dev 生产环境用pro
  withCredentials: true, // 跨域请求时发送cookies
  timeout: 12000 // 请求超时
})

// 请求拦截器
service.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    request.headers['Content-Type'] = 'application/json;charset=UTF-8' // 'application/x-www-form-urlencoded'

    request.headers['authtoken'] = getToken()

    return request
  },
  (error: AxiosError) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    // 错误处理
    if (res.code !== '0000') {
      if (res.code === '9999') {
        removeToken()
      }
      console.log(res.msg || 'Error')
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  (error: AxiosError) => {
    if (error && error.request && error.request.status === 200) {
      console.log('数据请求异常，请稍后再试！')
    } else {
      console.log(error.message)
    }
    return Promise.reject(error)
  }
)

export default service
