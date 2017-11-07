// pages/tehuiyouxuan/order-pay/order-pay.js

Page({
  data: {
    totalNum: [],
    tempArr: [],
    buyNum: 1,

    paymentList: [
      { index: 0, imgurl: '/images/icon__pay-wx.png', text: "微信支付", selected: true },
      { index: 1, imgurl: '/images/icon__pay-alipay.png', text: "支付宝支付", selected: false },
    ],

    //领取红包(底部弹窗 type:红包种类 status:领取状态)
    hongbaoList: [
      { index: 0, price: "10", type: "0元起用", period: "2017.01.01-2017.01.15", status: true },
      { index: 1, price: "30", type: "订房红包", period: "2017.01.01-2017.01.15", status: false },
      { index: 2, price: "30", type: "订房红包", period: "2017.01.01-2017.01.15", status: false },
      { index: 3, price: "100", type: "订房红包", period: "2017.01.01-2017.01.15", status: false }
    ]
  },
  //购买数量
  bindBuyNum: function (e) {
    var id = e.target.id;

    if (id == 0) {
      if (this.data.buyNum < 2) {
        // wx.showModal({
        //   content: '选择的房间数不能小于1',
        //   showCancel: false
        // })
        return;
      } else {
        this.data.buyNum--;
      }
    } else if (id == 1) {
      this.data.buyNum++;
    }

    this.setData({
      buyNum: this.data.buyNum
    });
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },

  //支付方式
  bindOrderPayment: function(e){
    var idx = e.currentTarget.dataset.index, list = this.data.paymentList;
    for(var i = 0; i < list.length; i++){
      list[i].selected = false;
      list[idx].selected = true;
    }
    this.setData({
      paymentList: list
    });
  },

  /**--- 红包弹窗 ---*/
  //领取红包
  bindRedPackage: function (e) {
    var index = e.currentTarget.dataset.index, list = this.data.hongbaoList;
    for (var i = 0, len = list.length; i < len; i++) {
      list[i].status = false;
      list[index].status = true;
    }

    this.setData({
      hongbaoList: list
    });
  },



  //底部自定义弹窗.Start
  showBottomModal: function (e) {
    var index = e.currentTarget.dataset.modalIndex;
    console.log(index);

    // 显示遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true,
      modalIndex: index
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 100)
  },
  hideBottomModal: function () {
    // 隐藏遮罩层
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 100)
  }
  //底部自定义弹窗.End
})