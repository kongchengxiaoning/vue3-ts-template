/**
 * @returns {String} 判断设备类型
 */
export const device = () => {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (isAndroid) {
    return 'android'
  }
  if (isiOS) {
    return 'ios'
  }
}

/**
 * @returns {String} 当前浏览器名称
 */
export const getExplorer = () => {
  const ua = window.navigator.userAgent
  const isExplorer = (exp) => {
    return ua.indexOf(exp) > -1
  }
  if (isExplorer('MSIE')) return 'IE'
  else if (isExplorer('Firefox')) return 'Firefox'
  else if (isExplorer('Chrome')) return 'Chrome'
  else if (isExplorer('Opera')) return 'Opera'
  else if (isExplorer('Safari')) return 'Safari'
}

/**
 * @returns {String} 银行卡号处理xxxx xx
 */
export const numberParse = (str) => {
  const parseStr = str.replace(/(.{4})/g, '$1 ')
  return parseStr
}

/**
 * @returns {String} 商品金钱处理
 */
export const cashArr = (cash = '') => {
  if (!cash) {
    return ['-', '--']
  }
  const cashAr = parseFloat(cash).toFixed(2).split('.')
  cashAr[0] = cashAr[0] + '.'
  return cashAr
}

/**
 * @returns {String} 金钱显示为xxx,xxx.xx
 */
export const formatMoney = (money = '0.00', digit = 2) => {
  let tpMoney
  if (undefined !== money) {
    tpMoney = money
  }
  tpMoney = Number(tpMoney)
  if (isNaN(tpMoney)) {
    return '0.00'
  }
  tpMoney = tpMoney.toFixed(digit) + ''
  const re = /^(-?\d+)(\d{3})(\.?\d*)/
  while (re.test(tpMoney)) {
    tpMoney = tpMoney.replace(re, '$1,$2$3')
  }
  return tpMoney
}

/**
 * @returns {String} 卡号加***
 */
export const bindCardNo = (value) => {
  if (value) {
    const arr1 = value.substr(value.length - 4)
    const arr2 = value.substr(0, 4)
    return arr2 + ' **** **** **** ' + arr1
  }
}

/**
 * @returns {String} 数字转换为大写汉字
 */
export const capital = (str = '') => {
  str = str + ''
  const len = str.length - 1
  const idxs = [
    '',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿',
    '十',
    '百',
    '千',
    '万',
    '十',
    '百',
    '千',
    '亿'
  ]
  const num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  return str.replace(/([1-9]|0+)/g, function ($, $1, idx) {
    let pos = 0
    if ($1[0] !== '0') {
      pos = len - idx
      if (idx === 0 && $1[0] === 1 && idxs[len - idx] === '十') {
        return idxs[len - idx]
      }
      return num[$1[0]] + idxs[len - idx]
    } else {
      const left = len - idx
      const right = len - idx + $1.length
      if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
        pos = left - (left % 4)
      }
      if (pos) {
        return idxs[pos] + num[$1[0]]
      } else if (idx + $1.length >= len) {
        return ''
      } else {
        return num[$1[0]]
      }
    }
  })
}

/**
 * @returns {String} 手机号中间四位隐藏
 */
export const handlePhone = (val) => {
  const phone = val.substr(0, 3) + '****' + val.substr(7)
  return phone
}

/**
 * @returns {String} 获取当前时间
 */
export const getDateTime = () => {
  const dt = new Date()
  const year = dt.getFullYear()
  const month = dt.getMonth() + 1
  const day = dt.getDate()
  const h = dt.getHours()
  const m = dt.getMinutes()
  const s = dt.getSeconds()
  const currentdate = year + '/' + month + '/' + day + ' ' + h + '/' + m + '/' + s
  return currentdate
}

/**
 * @returns {Object} 获取链接中包含的参数
 */
export const getParams = (url) => {
  const paramObj = {}
  const params = url.split('?')[1]
  if (!params) return paramObj
  const keyValueArr = params.split('&')
  keyValueArr.forEach((item) => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = decodeURIComponent(keyValue[1])
  })
  return paramObj
}

/**
 * @returns {String} 数量过万截取
 */
export const handleAmount = (value, unit = '万') => {
  if (value === null || value === undefined) {
    return '--'
  } else if (value < 10000) {
    return value
  } else {
    return `${Math.floor(value / 1000) / 10}${unit}`
  }
}
