export function getUid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function typeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}

/**
 * 手机号脱敏
 * @param {string} mobile
 * @returns {string}
 */
export const hideMobile = (mobile) =>
  mobile.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')

/**
 * 千分位格式化
 * @param {number} num
 * @returns {string}
 */
export function toThousands(num) {
  const str = num.toString()
  return str.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}

/**
 * 返回时间戳（默认当前时间）
 * 2015-03-05 17:59:00
 * @param {date} date
 * @returns {number}
 */
export const getTimeStamp = (date = new Date()) => date.getTime()

/**
 * @description:根据'2022-11-16'格式的字符串 返回时间戳（默认当前时间）
 * @param {date} date 格式必须为 YYYY-MM-DD
 * @returns {number}
 */
export const getTimeStampByString = (date) => {
  if (date && typeOf(date) === 'string') {
    const dateInfo = date.split('-') || []
    if (dateInfo && dateInfo.length >= 3) {
      const [year, month, day] = dateInfo
      return getTimeStamp(new Date(year, month - 1, day))
    }
  }
  return getTimeStamp()
}

/**
 * @description: 根据时间戳格式化为目标字符串（默认当前时间）
 * @param {date} date
 * @param {string} format 格式化目标格式
 * @returns {number}
 */
export const formatDateByTimeStamp = (
  timeStamp = Date.now(),
  format = 'YYYY-MM-DD hh:mm:ss'
) => {
  const date = new Date(Number(timeStamp))
  const formatNumber = (n) => (n < 10 ? `0${n}` : n)
  const str = format
    .replace('YYYY', date.getFullYear())
    .replace('MM', formatNumber(date.getMonth() + 1))
    .replace('DD', formatNumber(date.getDate()))
    .replace('hh', formatNumber(date.getHours()))
    .replace('mm', formatNumber(date.getMinutes()))
    .replace('ss', formatNumber(date.getSeconds()))
  return str
}

/**
 * 根据数据字典value匹配label
 * @param {array} source
 * @param {number} id
 * @returns {string}
 */
export const getTextById = (source, id) => {
  const current = source.filter((item) => item.value === id)
  if (current.length) {
    return current[0].text
  }
  return ''
}

/**
 * @description: 防抖函数
 * @param {Function} func 函数
 * @param {number} delay 延迟执行毫秒数
 * @param {*} immediate 是否立即执行
 * @return {*}
 */
export const debounce = (func, delay = 200, immediate = false) => {
  let timer
  let _immediate = immediate
  return (...args) => {
    if (_immediate) {
      func.apply(this, args)
      _immediate = false
      return
    }
    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/**
 * @description: 节流函数
 * @param {Function} func 函数
 * @param {number} wait 延迟执行毫秒数
 * @return {*}
 */
export const throttle = (func, wait) => {
  let previous = 0
  return (...args) => {
    const now = Date.now()
    if (now - previous > wait) {
      func.apply(this, args)
      previous = now
    }
  }
}

/**
 * @description: 返回时分秒格式
 * @param {number} s 秒
 * @return {string} 00:05:11
 */
export const formatSeconds = (s) =>
  new Date(s * 1000).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0]

/**
 * @description: 获取两数组差异项
 * @return {array} 差异项数组
 */
export const getArrDifference = (arr1, arr2) =>
  arr1.concat(arr2).filter((v, i, arr) => arr.indexOf(v) === arr.lastIndexOf(v))

/**
 * @description: 处理富文本里的图片宽度自适应
 * 1.去掉img标签里的style、width、height属性
 * 2.修改所有style里的width属性为max-width:100%
 * 3.去掉<br/>标签
 * 4.img标签添加style属性：max-width:100%;height:auto
 *
 * 具体需求待产品确认，现在只实现功能2
 * @param html
 * @returns {void|string|*}
 */
export const formatRichText = (html) => {
  // let newContent = html.replace(/<img[^>]*>/gi, (match) => {
  //   match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '')
  //   match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '')
  //   match = match
  //     .replace(/height="[^"]+"/gi, '')
  //     .replace(/height='[^']+'/gi, '')
  //   return match
  // })
  const newContent = html.replace(/style="[^"]+"/gi, (match) => {
    match = match
      .replace(/width:[^;]+;/gi, 'max-width:100%;')
      .replace(/width:[^;]+;/gi, 'max-width:100%;')
    return match
  })
  // newContent = newContent.replace(/<br[^>]*\/>/gi, '')
  // newContent = newContent.replace(
  //   /<img/gi,
  //   '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"'
  // )
  return newContent
}

/**
 * @description: 获取cookie信息
 * @param {string} cookieName cookie名
 * @return {string}
 */
export const getCookie = (cookieName) => {
  if (document.cookie.length > 0) {
    let cookieStart = document.cookie.indexOf(`${cookieName}=`)
    if (cookieStart !== -1) {
      cookieStart = cookieStart + cookieName.length + 1
      let cookieEnd = document.cookie.indexOf(';', cookieStart)
      if (cookieEnd === -1) cookieEnd = document.cookie.length
      return unescape(document.cookie.substring(cookieStart, cookieEnd))
    }
  }
  return ''
}
