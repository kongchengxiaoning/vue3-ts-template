/**
 * @description 本地图片地址处理
 * @return String
 */
export const handleImg = (img = '', suffix = 'png'): string => {
  return `/${img}.${suffix}`
}
/**
 * @description 服务器图片地址处理
 * @return String
 */
export const handleServeImg = (img = ''): string => {
  return img
}
