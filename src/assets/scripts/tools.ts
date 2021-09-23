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
  if (!cash) { return ['-', '--'] }
  const cashAr = parseFloat(cash).toFixed(2).split('.')
  cashAr[0] = cashAr[0] + '.'
  return cashAr
}

/**
 * @returns {String} 金钱显示为xxx,xxx.xx
 */
export const formatMoney = (money = '0.00', digit = 2) => {
  let tpMoney
  if (undefined !== money) { tpMoney = money }
  tpMoney = Number(tpMoney)
  if (isNaN(tpMoney)) { return '0.00' }
  tpMoney = tpMoney.toFixed(digit) + ''
  var re = /^(-?\d+)(\d{3})(\.?\d*)/
  while (re.test(tpMoney)) {
    tpMoney = tpMoney.replace(re, '$1,$2$3')
  }

  return tpMoney
}

/**
 * @returns {String} 卡号加***
 */
export const bindCardNo = value => {
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
  var len = str.length - 1
  var idxs = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿']
  var num = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  return str.replace(/([1-9]|0+)/g, function($, $1, idx, full) {
    var pos = 0
    if ($1[0] !== '0') {
      pos = len - idx
      if (idx === 0 && $1[0] === 1 && idxs[len - idx] === '十') {
        return idxs[len - idx]
      }
      return num[$1[0]] + idxs[len - idx]
    } else {
      var left = len - idx
      var right = len - idx + $1.length
      if (Math.floor(right / 4) - Math.floor(left / 4) > 0) {
        pos = left - left % 4
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
  var phone = val.substr(0, 3) + '****' + val.substr(7)
  return phone
}

/**
 * @returns {String} 获取当前时间
 */
export const getDateTime = () => {
  var dt = new Date()
  var year = dt.getFullYear()
  var month = dt.getMonth() + 1
  var day = dt.getDate()
  var h = dt.getHours()
  var m = dt.getMinutes()
  var s = dt.getSeconds()
  var currentdate = year + '/' + month + '/' + day + ' ' + h + '/' + m + '/' + s
  return currentdate
}

/**
 * @returns {Object} 获取链接中包含的参数
 */
export const getParams = url => {
  const paramObj = {}
  const params = url.split('?')[1]
  if (!params) return paramObj
  const keyValueArr = params.split('&')
  keyValueArr.forEach(item => {
    const keyValue = item.split('=')
    paramObj[keyValue[0]] = decodeURIComponent(keyValue[1])
  })
  return paramObj
}

/**
 * @returns {Boolean} 验证是否为手机号码
 */
export const isMobile = (v = '') => {
  var r = /^1[3456789]\d{9}$/
  return !v ? false : r.test(v)
}

/**
 * @returns {Boolean} 验证身份证的有效性
 */
export const isCardID = (v = '') => {
  var r = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return !v ? false : r.test(v)
}

/**
 * @returns {Boolean} 验证邮箱格式
 */
export const isEmail = (v = '') => {
  var r = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
  return !v ? false : r.test(v)
}

/**
 * @returns {Boolean} 验证是否为汉字
 */
export const idChinese = (v = '') => {
  var r = /^\s*$/g
  return !v ? false : r.test(v)
}

/**
 * @returns {Boolean} 验证是否为车牌号
 */
export const isPlateNumber = (v = '') => {
  var r = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
  return !v ? false : r.test(v)
}

/**
 * @returns {String} 判断设备类型
 */
export const device = () => {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) { return 'android' }
  if (isiOS) { return 'ios' }
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
