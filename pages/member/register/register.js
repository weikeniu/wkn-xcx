// pages/member/register/register.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindSubmit: function(e){
    //app.showText("信息不能为空！");
    app.showToast("密码不能为空", "info"); //success|info|clear
  }

})