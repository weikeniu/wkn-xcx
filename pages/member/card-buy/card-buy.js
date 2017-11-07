// pages/member/card-buy/card-buy.js
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

  //购买会员卡(支付)
  bindBuyCard: function(e){
    wx.navigateTo({
      url: '../card-buy-pay/card-buy-pay',
    })
  }

})