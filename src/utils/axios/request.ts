import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { getToken, removeToken } from '@/utils/auth'
import { getAppEnvConfig } from '@/utils/env'

const { VITE_GLOB_API_URL } = getAppEnvConfig()

const service: AxiosInstance = axios.create({
  baseURL: VITE_GLOB_API_URL,
  withCredentials: true,
  timeout: 12000
})

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

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    // Error
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
