import config from './config'
const { IMG_ERROR } = config

/* 本地图片地址处理 */
export const handleImg = (img = IMG_ERROR, suffix = 'png') => {
  return `/${img}.${suffix}`
}
/* 服务器图片地址处理 */
export const handleServeImg = (img = IMG_ERROR) => {
  return img
}
