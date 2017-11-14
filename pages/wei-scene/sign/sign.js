// pages/wei-scene/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['设计推广部', '人事行政部', '运营部', '产品部', '客服部', '结算部', '微可牛运营部', '酒店用品采购部', '酒店合作部', '信用住', '飞猪旅行部', 'OTA客服部'],
    index: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //部门选择
  departmentSelect: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }

})