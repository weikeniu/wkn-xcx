// pages/member/card-recharge-pay/card-recharge-pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnDisabled: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  //判断密码输入
  bindKeyInput: function (e) {
    var val = e.detail.value;
    this.setData({
      btnDisabled: val.length ? false : true
    });
  }

})