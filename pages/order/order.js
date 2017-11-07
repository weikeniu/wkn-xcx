// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toggle: true,
    roomNum: 1,
    orderToggle: true,

    isDeposit: false, //押金
    isInvoice: false, //发票

    //最晚到店参数
    index__time: 0,
    data__time: "17:00",

    //优惠券参数
    index__coupon: 0,
    data__tempCoupon: "10", //临时值
    data__coupon: "10",

    //特殊要求参数
    index__require: 0,
    data__tempRequire: "尽量安排无烟房", //临时值
    data__require: "尽量安排无烟房"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  //展开收缩客房信息
  bindToggleRoomInfo: function(e){
    this.setData({
      toggle: this.data.toggle = !this.data.toggle
    });
  },

  //减少/增加房间数
  bindRoomNum: function(e){
    var id = e.target.id;

    if(id == 0){
      if (this.data.roomNum < 2) {
        wx.showModal({
          content: '选择的房间数不能小于1',
          showCancel: false
        })
      } else {
        this.data.roomNum--;
      }
    }else if(id == 1){
      this.data.roomNum++;
    }

    this.setData({
      roomNum: this.data.roomNum
    });
  },

  //押金
  bindSwitchDeposit: function (e) {
    console.log('switch1 发生 change 事件，携带值为', e.detail.value);

    this.setData({
      isDeposit: e.detail.value
    });
  },

  //发票
  bindSwitchInvoice: function(e){
    console.log('switch1 发生 change 事件，携带值为', e.detail.value);

    this.setData({
      isInvoice: e.detail.value
    });
  },

  //最晚到店时间选择
  bindLatestArrive: function(e){
    var idx = e.currentTarget.dataset.index;
    var time = e.currentTarget.dataset.time;
    console.log(time);

    this.setData({
      index__time: idx,
      data__time: time
    });

    //关闭弹窗
    this.hideBottomModal();
  },

  //选择优惠券
  bindChooseCoupon: function(e){
    var idx = e.currentTarget.dataset.index;
    var coupon = e.currentTarget.dataset.coupon;
    console.log(coupon);

    this.setData({
      index__coupon: idx,
      data__tempCoupon: coupon
    });
  },
  bindCompleteCoupon: function(e){
    this.setData({
      data__coupon: this.data.data__tempCoupon
    });

    //关闭弹窗
    this.hideBottomModal();
  },

  //选择特殊要求
  bindChooseRequire: function(e){
    var idx = e.currentTarget.dataset.index;
    var require = e.currentTarget.dataset.require;
    console.log(require);

    this.setData({
      index__require: idx,
      data__tempRequire: require
    });
  },
  bindCompleteRequire: function (e) {
    this.setData({
      data__require: this.data.data__tempRequire
    });

    //关闭弹窗
    this.hideBottomModal();
  },


  //底部自定义弹窗.Start
  showBottomModal: function (e) {
    var index = e.currentTarget.dataset.modalIndex;
    console.log(index);
    console.log(this.data.orderToggle);

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
      modalIndex: index,
      orderToggle: !this.data.orderToggle
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
        showModalStatus: false,
        orderToggle: !this.data.orderToggle
      })
    }.bind(this), 100)
  }
  //底部自定义弹窗.End

})