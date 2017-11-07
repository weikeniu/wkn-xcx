// pages/member/member-privilege/member-privilege.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toggle01: false,
    toggle02: false,
    toggle03: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //展开、收缩
  bindCollapse: function(e){
    var idx = e.currentTarget.dataset.index;
    if(idx == 0){
      this.setData({
        toggle01: this.data.toggle01 = !this.data.toggle01
      });
    }else if(idx == 1){
      this.setData({
        toggle02: this.data.toggle02 = !this.data.toggle02
      });
    }else if(idx == 2){
      this.setData({
        toggle03: this.data.toggle03 = !this.data.toggle03
      });
    }
  }

})