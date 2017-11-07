// pages/order-pay/order-pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toggleCost: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.bindPayPopupTips();
  },

  //支付提示
  bindPayPopupTips: function (e) {
    this.showPopupModal();
  },

  //费用明细
  bindCostDetails: function(e){
    this.setData({
      toggleCost: !this.data.toggleCost
    });
  },



  //中间内容自定义弹窗.Start
  showPopupModal: function (e) {
    //var index = e.currentTarget.dataset.modalIndex;
    //console.log(index);

    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    //animation.opacity(0).translateY(10).step()
    animation.opacity(0).scale(.8).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true,
      //modalIndex: index
    })
    setTimeout(function () {
      //animation.opacity(1).translateY(0).step()
      animation.opacity(1).scale(1).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 100)
  },
  hidePopupModal: function (e) {
    //判断是否点击遮罩层关闭
    var shadeClose = e.currentTarget.dataset.shadeClose;
    if (/^false$/i.test(shadeClose)) return;

    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.opacity(0).translateY(10).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.opacity(1).translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 100)
  }
  //中间内容自定义弹窗.End

})