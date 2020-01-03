const BASE_URL = 'https://api.zbztb.cn'

function request (options) {
  return new Promise((resolve, reject) => {
    if (options.noLoading) {
      wx.showLoading({
        title: '加载中',
        mask: true
      })
    }
    wx.request({
      url: BASE_URL + options.url,
      success: res => {
        console.log(res)
        let {meta, message} = res.data
        if (meta.status === 200) {
          resolve(message)
        }
      },
      complete () {
        if (options.noLoading) {
          wx.hideLoading()
        }
      }
    })
  })
}
export default request
