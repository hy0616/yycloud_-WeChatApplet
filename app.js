//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  getColunmList: function (cb) {

    var self = this
    var parameter = "func=getColumnList&appid=" + self.globalData.appid + "&appsecret=" + self.globalData.appsecret

    if (self.globalData.colunmList) {
      typeof cb == "function" && cb(self.globalData.colunmList)
    } else {
      wx.request({
        url: self.globalData.url + parameter,
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        success: function (res) {
          self.globalData.colunmList = res.data;
          typeof cb == "function" && cb(self.globalData.colunmList)
          console.log("coulunm", res.data);
        },
        fail: function () {
          alert("加载失败!")
        }
      })
    }

  },

  globalData: {
    imgUrls: [
      '../../img/slideImage1.png',
      '../../img/slideImage2.jpg',
      '../../img/slideImage3.jpg'
    ],
    userInfo: null,
    colunmList: null,
    url: "http://newsapi.yunyangdata.com:8080/common/api/app/interface.jsp?", //获取资讯通用url
    appid: "1234567890", //获取资讯通用appid
    appsecret: "abc123",  //获取资讯通用appsecret
    content: ""   //动态详情咨询
  }
})