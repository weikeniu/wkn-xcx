//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    navRow: [
      [
        ["icon-dingfang", "订房", "", "pages/list/list", 'switchTab'],
        ["icon-dingdan", "订单", ""],
        ["icon-ditu", "地图", ""],
        ["icon-wuiyuan", "会员", ""],
        ["icon-hongbao", "红包", ""]
      ],
      [
        ["icon-jianjie", "简介", ""],
        ["icon-sheshi", "设施", ""],
        ["icon-tupian", "图片", ""],
        ["icon-quanjing", "全景", ""],
        ["icon-huiyuanka", "会员卡", ""]
      ],
      [
        ["icon-chongzhi", "充值", ""],
        ["icon-chaoshi", "商城", "", "pages/mall/index/index"],
        ["icon-choujiang", "抢购", ""],
        ["icon-houdong", "活动", ""],
        ["icon-choujiang", "抽奖", ""]
      ],
      [
        ["icon-dingcan", "订餐", ""],
        ["icon-huyiting", "会议厅", ""],
        ["icon-menpiao", "门票", "","pages/mall/ticket/ticket"],
        
      ],
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
    duration: 300
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  //导航跳转
  bindNavUrl: function (e) {
    var url = e.currentTarget.dataset.url, type = e.currentTarget.dataset.type;
    if (!url) return;
    if (type == 'switchTab'){
      wx.switchTab({
        url: '../../' + url,
      })
    }else{
      wx.navigateTo({
        url: '../../' + url
      })
    }
  }
})
