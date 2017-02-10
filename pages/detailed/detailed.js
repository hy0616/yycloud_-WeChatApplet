// pages/index/detailed/detailed.js
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp()
Page({
  data:{
    content: null
  },
  onLoad:function(options){
    // options为页面跳转所带来的参数
    self = this;
    WxParse.wxParse("content",'html',app.globalData.content,self)
    
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})