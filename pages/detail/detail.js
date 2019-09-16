// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: { 
      // id: 1, 
      // title: "香港机场约170个航班取消，往来内地航班受影响", 
      // img: "../../images/lists/1.jpg", 
      // cTime: "2019-08-09 13:56",
      // content: "香港特区政府在4日晚发布严正声明：香港经济正受到外围不利因素及本地社会事件困扰，处于十年来最差的情况，任何大规模罢工和暴力冲突都会影响香港各区市民的正常生活和经济活动。综合港媒报道，截至8月5日上午6时，香港机场管理局网站显示，8月5日有约170班离港及抵港航班取消。机管局表示，今日可能出现一些或影响机场运作的情况，呼吁旅客联络航空公司，确认航班后，才出发前往机场。停航的主要为国泰及国泰港龙航班，该公司今日凌晨表示，实时起豁免乘客重新订位及更改航点费用，提醒所有乘客请在前往机场前先检查航班状况。香港航空因应机场运作受影响，取消最少24班机，位于港铁香港站及九龙站的市区预办登机服务暂停。"
      },
      backHidden:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var commom = require('../../utils/common.js')
    commom.loadInfo(options.id,this)
  },
  goBack:function(){
    wx.navigateBack()
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