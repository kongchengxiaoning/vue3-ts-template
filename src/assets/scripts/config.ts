// 开发环境为true 生产环境为false
const DEBUG = true

export default {
  /**
   * @description debug
   */
  DEBUG,
  /**
   * @description 配置显示在浏览器标签的title
   */
  TITLE: 'VUE3-TS',
  /** ·
   * @description 图片缺省
   */
  IMG_ERROR: '',
  /**
   * @description 请求Token的key
   */
  TOKEN_KEY: 'vue3-token',
  /**
   * @description token在Cookie中存储的天数
   */
  COOKIE_EXPIRES: 1,
  /**
   * @description 请求基础路径
   */
  BASE_URL: {
    DEV: '/api',
    PRO: location.origin
  },
  /**
   * @description 节流间隔时间 毫秒
   */
  THROTTLE_TIME: 1000 * 3,
  /**
   * @description 接口超时时间 毫秒
   */
  TIMEOUT: 1000 * 60 * 10,
  /**
   * @description 分页
   */
  PAGE: 1,
  PAGE_SIZE: 20,
  PAGER_COUNT: 7
}
