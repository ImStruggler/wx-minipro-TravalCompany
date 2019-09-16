// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //region: ['湖南省', '长沙市', '岳麓区'],
    array: ['中国', '美国', '巴西', '日本'],
    area:0,
    score:100,
    is_dev:0
  },
  bindRegionChange:function(event){
    this.setData({
      area:event.detail.value
    })
  },
  bindTimeChange:function(event){
    this.setData({
      time: event.detail.value
    })
  },
  bindSliderChange:function(e){
    this.setData({
      score: e.detail.value
    })
  },

  formSubmit: function (e) {
    //console.log('form发生了submit事件，携带数据为：', e.detail.value)
    
    let that = this
    wx.request({
      url: 'http://localhost/weicms/index.php?s=/addon/Feedback/Feedback/addFeedback',
      data: e.detail.value,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res)
      },
      complete: function () {       
      }
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})