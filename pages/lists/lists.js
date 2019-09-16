// pages/lists/lists.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsLists:[
      // { id: 1, title: "香港机场约170个航班取消，往来内地航班受影响", img: "../../images/lists/1.jpg", cTime: "2019-08-09 13:56" },
      // { id: 1, title: "bbb", img: "../../images/lists/2.jpg", cTime: "2019-08-09 13:56" },
      // { id: 1, title: "ccc", img: "../../images/lists/3.jpg", cTime: "2019-08-09 13:56" },
      // { id: 1, title: "ddd", img: "../../images/lists/4.jpg", cTime: "2019-08-09 13:56" },
    ],
    lastid:0,
    //toastHidden:true
    firstloadmore:0,
    moreHidden:true,
    msg:'加载更多'
  },

  loadData:function(lastid){
    var limit = 3
    var that = this

    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      //url: 'http://localhost/weicms/index.php?s=/addon/Cms/Cms/getList',
      url: 'http://localhost/weicms/index.php?s=/addon/ArticleManager/ArticleManager/getList',
      data: {lastid:lastid,limit:limit},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {        
        if(!res.data){
          // that.setData({ 
          //   toastHidden:false
          // })
          wx.showToast({
            title: '没有文章啦',
            icon: 'success',
            duration: 3000
          })   

          that.setData({
            moreHidden: true
          })       
          return false
        }
        var len = res.data.length
        //var oldlastid = lastid
        that.setData({ lastid: res.data[len-1].id})

        var dataArr = that.data.newsLists
        var newData = dataArr.concat(res.data)

        //缓存数据,缓存当前所有数据
        wx.setStorageSync('articleList', newData)        
        console.log('data from server')

        that.setData({
          newsLists: newData,
          moreHidden: false
        })
      },
      fail:function(res){
        //
        if(lastid == 0){//刷新页面
          var newData = wx.getStorageSync('articleList')
          if(newData){//有缓存的情况
            var len = newData.length
            that.setData({
              newsLists: newData,
              moreHidden: false,
              lastid:newData[len-1].id
            })
            console.log('data from cache')
          }else{//没有缓存的情况
            that.setData({
              moreHidden: false,
              msg: '重新加载'
            })

            wx.showModal({
              title: '温馨提示',
              content: '服务器或者网络出现问题，请稍后重试。',
              showCancel: false,
              confirmText: '知道啦',
              success(res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
          }
          
        }else{//加载更多之类的情况
          wx.showModal({
            title: '温馨提示',
            content: '服务器或者网络出现问题，请稍后重试。',
            showCancel: false,
            confirmText: '知道啦',
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        }
      },
      complete: function(){
        wx.hideLoading()
      }
    })
  },
  loadMore: function(event){
    let that = this
    that.setData({msg:'加载更多'})
    wx.getNetworkType({
      success(res) {
        const networkType = res.networkType
        
        if (networkType != 'wifi' && that.data.firstloadmore == 0){
          that.setData({ firstloadmore : 1})
          wx.showModal({
            title: '温馨提示',
            content: '请留意您的移动数据使用情况！',
            showCancel:false,
            confirmText:'知道啦',
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })          
        }
      }
    })
    var id = event.currentTarget.dataset.lastid
    this.loadData(id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(onload)
    var that = this

    wx.setNavigationBarTitle({
      title: '文章列表'
    })

    that.loadData(0)
  },
  // toastChange: function(){
  //   this.setData({ toastHidden:true})
  // },

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