//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    contentList: {},  //资讯内容

    //滑动控件数据数据
    imgUrls: app.globalData.imgUrls,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000

  },

  onLoad: function () {

    var self = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      self.setData({
        userInfo: userInfo.funcdata
      })
    })

    //获取全局资讯标题
    //app.getColunmList(function(colunmList){
    //self.setData({
    // colunmList:colunmList
    //})
    //})

    //获取农业资讯内容
    var columnid = 2363;
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

  onReady: function () {
    //动态添加页面标题
    wx.setNavigationBarTitle({
      title: "云洋数据农业资讯"
    })
  },

  //获取详细咨询事件
  getdetailed: function (event) {
    app.globalData.content = event.currentTarget.dataset.content
    wx.navigateTo({
      url: '../detailed/detailed'
    })
  },

//监听下拉刷新
  onPullDownRefresh: function(){
    //todo
  },

})
