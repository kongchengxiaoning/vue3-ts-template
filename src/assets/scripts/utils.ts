/* 本地图片地址处理 */
export const handleImg = (img = '', suffix = 'png') => {
  return `/${img}.${suffix}`
}
/* 服务器图片地址处理 */
export const handleServeImg = (img = '') => {
  return img
}
