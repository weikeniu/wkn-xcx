var dateFormat = require('../../../utils/dateFormat');
var oneDay = 1 * 24 * 60 * 60 * 1000;

Page({
  data: {
    imgUrls: [
      '../../../images/114.png',
      '../../../images/wz.jpg'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 300,
    clickNum: 0,

    isMask: true,   //弹窗遮罩层
    popupShow: true, //优惠券弹窗展示
    shadeClose: true, //点击遮罩层关闭

    isCollapse: false,
    memLevels: [
      { type: "普通会员", discount: "9.9", score: "1.0", diff: 0 },
      { type: "高级会员", discount: "9.9", score: "1.0", diff: 10 },
      { type: "白银会员", discount: "9.9", score: "1.0", diff: 30 },
      { type: "黄金会员", discount: "9.9", score: "1.0", diff: 59 },
      { type: "钻石会员", discount: "9.9", score: "1.0", diff: 60 }
    ],

    //领取红包(底部弹窗 type:红包种类 status:领取状态)
    hongbaoList: [
      { index: 0, price: "10", type: "0元起用", period: "2017.01.01-2017.01.15", status: true },
      { index: 1, price: "10", type: "订房红包", period: "2017.01.01-2017.01.15", status: false },
      { index: 2, price: "10", type: "订房红包", period: "2017.01.01-2017.01.15", status: false }
    ]

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  //点击下拉
  roomSlide: function (e) {
    let id = e.currentTarget.dataset.id;
    if (this.data.clickNum == id) {
      this.setData({
        clickNum: 0,
      })
    } else {
      this.setData({
        clickNum: id,
      })
    }

    console.log(id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      HSdate: {
        date: dateFormat.formatTime(new Date(Date.now())),
        week: dateFormat.formatWeek(new Date(Date.now())),
        startday: dateFormat.formatDay(new Date(Date.now())),
        currentday: dateFormat.formatDay(new Date(Date.now()))
      },
      HEdate: {
        date: dateFormat.formatTime(new Date(Date.now() + oneDay)),
        week: dateFormat.formatWeek(new Date(Date.now() + oneDay)),
        startday: dateFormat.formatDay(new Date(Date.now() + oneDay)),
        currentday: dateFormat.formatDay(new Date(Date.now() + oneDay))
      }
    });
  },
  // 绑定选择时间的函数
  bingDateChange: function (e) {
    var type = e.currentTarget.dataset.type;
    switch (type) {
      case "3":
        this.setData({
          HSdate: {
            date: dateFormat.formatTime(new Date(e.detail.value)),
            week: dateFormat.formatWeek(new Date(e.detail.value)),
            startday: this.data.HSdate.startday,
            currentday: dateFormat.formatDay(new Date(e.detail.value))
          },
          HEdate: {
            date: this.compareDay(e.detail.value, this.data.HEdate.currentday) === false ? dateFormat.formatTime(new Date(new Date(e.detail.value).getTime() + oneDay)) : dateFormat.formatTime(new Date(this.data.HEdate.currentday)),
            week: this.compareDay(e.detail.value, this.data.HEdate.currentday) === false ? dateFormat.formatWeek(new Date(new Date(e.detail.value).getTime() + oneDay)) : dateFormat.formatWeek(new Date(this.data.HEdate.currentday)),
            startday: dateFormat.formatDay(new Date(new Date(e.detail.value).getTime() + oneDay)),
            currentday: this.compareDay(e.detail.value, this.data.HEdate.currentday) === false ? dateFormat.formatDay(new Date(new Date(e.detail.value).getTime() + oneDay)) : dateFormat.formatDay(new Date(this.data.HEdate.currentday))
          }
        });
        break;
      case "4":
        this.setData({
          HEdate: {
            date: dateFormat.formatTime(new Date(e.detail.value)),
            week: dateFormat.formatWeek(new Date(e.detail.value)),
            startday: this.data.HEdate.startday,
            currentday: dateFormat.formatDay(new Date(e.detail.value))
          }
        });
        break;
    }
  },
  // 日期比较
  compareDay: function (start, end) {
    var _s = new Date(start).getTime();
    var _e = new Date(end).getTime();

    return ((_e - _s) > oneDay) ? true : false;
  },

  /**--- 领券弹窗 ---*/
  //关闭弹窗
  bindPopupClose: function (e) {
    this.setData({
      isMask: this.data.isMask = !this.data.isMask,
      popupShow: this.data.popupShow = !this.data.popupShow
    });
  },
  bindPopupShadeClose: function (e) {
    if (this.data.shadeClose) {
      this.bindPopupClose(e);
    }
  },
  //点击收起
  bindPopupCollapse: function (e) {
    this.setData({
      isCollapse: this.data.isCollapse = !this.data.isCollapse
    });
  },

  /**--- 红包弹窗 ---*/
  //领取红包
  bindRowReceive: function (e) {
    var index = e.currentTarget.dataset.index, list = this.data.hongbaoList;
    for (var i = 0, len = list.length; i < len; i++) {
      if (index == list[i].index) {
        if (!list[i].status) {
          list[i].status = true;
          wx.showToast({
            title: '领取成功'
          });
        }
      }
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