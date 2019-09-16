//aboutme.js
//获取应用实例
const app = getApp()

Page({
  data: {
    img:'../../images/logo.jpg',
    title:'候鸟旅行有限公司',
    intro:'候鸟旅行有限公司经过30多年的发展，已经发展成为中国主要的旅行社之一。其业务涵盖全方位的出境旅游，入境旅游，国内旅游，台湾旅游，邮轮旅游，签证，机票代理，定制旅游，商务旅行服务和展览业务。它是中国综合性旅游服务运营商之一，也是中国最受欢迎的旅游企业之一。',
    contab:'联系我们',
    address:'湖南省长沙市岳麓区枫林三路998号',
    post:'410000',
    tell:'0731-12348888',
    email:'kefu.list@houniao.cn'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onload')
    var that=this
    //调用应用实例的方法获取全局数据
    wx.getUserInfo(function(userInfo){
        //更新数据
        that.setData({
          userInfo: userInfo            
        })
      }
    )
  }
  
})
