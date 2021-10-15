/**
 * @description 本地图片地址处理
 * @return String
 */
export const handleImg = (img = '', suffix = 'png') => {
  return `/${img}.${suffix}`
}
/**
 * @description 服务器图片地址处理
 * @return String
 */
export const handleServeImg = (img = '') => {
  return img
}
