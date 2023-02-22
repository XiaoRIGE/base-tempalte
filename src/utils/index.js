export function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0)
}

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
