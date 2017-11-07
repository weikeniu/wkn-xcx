// pages/member/card-recharge/card-recharge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIndex: 0,

    //充值列表
    rechargeList: [
      { index: 0, price: "1", salePrice: "01", selected: false },
      { index: 1, price: "100", salePrice: "99",  selected: false },
      { index: 2, price: "500", salePrice: "400",  selected: false },
      { index: 3, price: "800", salePrice: "700",  selected: false },
      { index: 4, price: "1000", salePrice: "800",  selected: false }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //tab切换
  bindTabSwitch: function(e){
    var idx = e.currentTarget.dataset.index;
    this.setData({
      tabIndex: idx
    });
  },

  //储值卡充值(选择)
  bindRecharge: function (e) {
    var idx = e.currentTarget.dataset.index, list = this.data.rechargeList;
    for(var i = 0, len = list.length; i < len; i++){
      list[i].selected = false;
      list[idx].selected = true;
    }

    this.setData({
      rechargeList: list
    });
  }

})