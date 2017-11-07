// pages/member/myorders/myorders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../../images/114.png',
      '../../../images/wz.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 300,

    tabIndex: 0, //选项卡索引
    maskState: 0, //预览图片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //选项卡切换
  bindTabSwitch: function (e) {
    var idx = e.currentTarget.dataset.index;
    this.setData({
      tabIndex: idx
    });
  },

  /**--- 图片预览 ---*/
  bindImgPreview: function (e) {
    let index = parseInt(e.target.dataset.id);
    if (this.data.maskState == 0) {
      this.setData({
        maskState: 1
      })
    } else {
      this.setData({
        maskState: index
      })
    }
  },
  //关闭弹窗
  bindCloseImgPreview: function (e) {
    this.setData({
      maskState: 0
    })
  },

})