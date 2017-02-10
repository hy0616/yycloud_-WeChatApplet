// pages/science/science.js

var app = getApp()
Page({
  data:{
     contentList: {},  //科技内容

    //滑动控件数据数据
    imgUrls: app.globalData.imgUrls,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad:function(options){
    
    var self = this

    //获取农业科技内容
    var columnid = 2436;
    var parameter = "func=getContentList&appid=" + app.globalData.appid + "&appsecret=" + app.globalData.appsecret + "&columnid=" + columnid + "&start=0&limit=10";

    wx.request({
      url: app.globalData.url + parameter,
      method: 'GET',
      success: function (res) {
        self.setData({
          contentList: res.data
        })
      },
      fail: function () {
        wx.showToast({
          title: '加载失败',
          icon: 'loading',
          duration: 2000
        })
      }
    })
  },

  // 页面渲染完成
  onReady:function(){
    //动态添加页面标题
    wx.setNavigationBarTitle({
      title: "云洋数据农业科技"
    })
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

//获取详细咨询事件
  getdetailed: function(event){
    app.globalData.content = event.currentTarget.dataset.content
    wx.navigateTo({
      url: '../detailed/detailed'
    })
  }

})