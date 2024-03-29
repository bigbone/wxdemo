import { config } from '../config.js'


const baseURL = config.api_base_url // 自己后台API地址
const http = ({ url = '', params = {}, ...other } = {}) => {
  wx.showLoading({
    title: '加载中...'
  });
  let time = Date.now()
  console.log(`开始:${time}`)
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url),
      data: params,
      header: getHeader(),
      ...other,
      complete: (res) => {
        wx.hideLoading()
        console.log(`耗时:${Date.now() - time}`)
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data)
        } else {
          reject(res)
        }
      }
    })
  })
}
const getUrl = url => {
  if (url.indexOf('://') == -1) {
    url = baseURL + url
  }
  return url
}
const getHeader = () => {
  try {
    var token = wx.getStorageSync('token')
    if (token) {
      return { 'token': token }
    }
    return {}
  } catch (e) {
    return {}
  }
}
module.exports = {
  baseURL,
  get(url, params = {}) {
    return http({
      url,
      params
    })
  },
  post(url, params = {}) {
    return http({
      url,
      params,
      method: 'post'
    })
  },
  put(url, params = {}) {
    return http({
      url,
      params,
      method: 'put'
    })
  },
  // 这里不能使用 delete, delete为关键字段
  myDelete(url, params = {}) {
    return http({
      url,
      params,
      method: 'delete'
    })
  },
  gettokenbycode(params = {}, ...other){
    return new Promise((resolve, reject) => {
      wx.request({
        url: getUrl(config.tokenurl),
        data: params,
        header: {'Test':'tttt'},
        ...other,
        complete: (res) => {
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(res.data)
          } else {
            reject(res)
          }
        }
      })
    })
  }
}