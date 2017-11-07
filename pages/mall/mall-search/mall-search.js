// pages/mall/mall-search/mall-search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabIdx: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  
  //清除文本框
  clearIptData: function () {
    console.log('---');
  },

  //搜索左侧切换
  switchTab: function(e){
    var idx = e.currentTarget.dataset.index;
    this.setData({
      tabIdx: idx
    });
  }

})