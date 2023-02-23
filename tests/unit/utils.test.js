import {
  sum,
  getUid,
  typeOf,
  getTimeStamp,
  getTimeStampByString,
  formatDateByTimeStamp,
} from '@/utils/index'

import { describe, expect, it } from 'vitest'

describe('#sum', () => {
  it('returns 0 with no numbers', () => {
    expect(sum()).toBe(0)
    expect(sum(1, 2, 3, 4)).toBe(10)
  })
})

describe('#getUid', () => {
  it('get random string', () => {
    expect(getUid()).toHaveLength(36)
  })
})

describe('#typeOf', () => {
  const number = 100
  const string = '100'
  it('get number', () => {
    expect(typeOf(number)).toBe('number')
  })
  it('get string', () => {
    expect(typeOf(string)).toBe('string')
  })
  it('get boolean', () => {
    expect(typeOf(true)).toBe('boolean')
  })
  it('get date', () => {
    expect(typeOf(new Date())).toBe('date')
  })
  it('get object', () => {
    expect(typeOf({})).toBe('object')
  })
  it('get array', () => {
    expect(typeOf([])).toBe('array')
  })
  it('get null', () => {
    expect(typeOf(null)).toBe('null')
  })
  it('get undefined', () => {
    expect(typeOf(undefined)).toBe('undefined')
  })
})

describe('#getTimeStamp', () => {
  it('get timestamp', () => {
    expect(getTimeStamp()).toBeTypeOf('number')
  })

  it('get timestamp', () => {
    expect(getTimeStamp(new Date('2023-02-22'))).equal(1677024000000)
  })
})

describe('#getTimeStampByString', () => {
  it('验证获取时间戳为毫秒级', () => {
    expect(String(getTimeStampByString())).toHaveLength(13)
  })

  it('get right timestamp', () => {
    expect(getTimeStampByString('2022-11-16')).equal(1668528000000)
  })

  it('get right timestamp', () => {
    expect(getTimeStampByString('2023-11-16')).equal(1700064000000)
  })
})

// formatDateByTimeStamp
describe('#formatDateByTimeStamp', () => {
  const date = new Date('2023', '1', '22')
  it('格式化精确到秒', () => {
    expect(formatDateByTimeStamp(date)).equal('2023-02-22 00:00:00')
  })

  it('格式化精确到日', () => {
    expect(formatDateByTimeStamp(date, 'YYYY-MM-DD')).equal('2023-02-22')
  })
})
