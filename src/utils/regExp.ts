/**
 * @returns {Boolean} 验证手机号码
 */
export const isMobile = (v = ''): boolean => {
  const r = /^1[3456789]\d{9}$/
  return !v ? false : r.test(v)
}

/**
 * @returns {Boolean} 验证身份证的有效性
 */
export const isCardID = (v = ''): boolean => {
  const r = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return !v ? false : r.test(v)
}

/**
 * @returns {Boolean} 验证邮箱格式
 */
export const isEmail = (v = ''): boolean => {
  const r =
    /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  return !v ? false : r.test(v)
}

/**
 * @returns {Boolean} 验证是否为汉字
 */
export const idChinese = (v = ''): boolean => {
  const r = /^\s*$/g
  return !v ? false : r.test(v)
}

/**
 * @returns {Boolean} 验证是否为车牌号
 */
export const isPlateNumber = (v = ''): boolean => {
  const r =
    /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
  return !v ? false : r.test(v)
}
