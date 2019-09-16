function loadInfo(id,obj){
  var key = 'info_' + id
  var info = wx.getStorageSync(key)
  if(info){
    obj.setData({
      info:info,
      backHidden: false
      })
    console.log('data from cache')
    return true
  }

  wx.request({
    url: 'http://localhost/weicms/index.php?s=/addon/ArticleManager/ArticleManager/getDetail',
    data: { id: id },
    header: {
      'content-type': 'application/json' // 默认值
    },
    success(res) {
      //console.log(res.data)
      obj.setData({
        info: res.data,
        backHidden: false
      })
      wx.setStorageSync(key, res.data)
      console.log('data from server')
    },
    fail:function(res){
      obj.setData({ backHidden:true})
      wx.showModal({
        title: '温馨提示',
        content: '服务器或者网络出现问题，请稍后重试。',
        showCancel: false,
        confirmText: '知道啦',
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateBack()
          }
        }
      })
      
    }
  })
}
module.exports = {
  loadInfo:loadInfo
}