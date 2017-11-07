// pages/order-edit-userinfo/order-edit-userinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputVal: '山鬼遥',
    userList: [
      { index: 0, name: '山鬼遥', selected: true },
      { index: 1, name: '李清秋', selected: false },
      { index: 2, name: '王小明', selected: false }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //清除文本框内容
  clearIptData: function(e){
    this.setData({
      inputVal: ''
    });
  },

  //选择联系人
  bindSelUser: function (e) {
    var index = e.currentTarget.dataset.index, list = this.data.userList;
    for (var i = 0, len = list.length; i < len; i++) {
      list[i].selected = false;
      list[index].selected = true;
    }
    this.setData({
      inputVal: list[index].name,
      userList: list
    });
  }
})