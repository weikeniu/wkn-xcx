//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    navRow: [
      [
        ["icon-dingfang1", "订房", "type1", "pages/list/list", 'switchTab'],
        ["icon-dingdan1", "订单", "type2"],
        ["icon-ditu1", "地图", "type3"],
        ["icon-huiyuan", "会员", "type4"],
        ["icon-hongbao1", "红包", "type5"]
      ],
      [
        ["icon-jianjie1", "简介", "type1"],
        ["icon-sheshi1", "设施", "type2"],
        ["icon-tupian1", "图片", "type3"],
        ["icon-quanjing1", "全景", "type4"],
        ["icon-huiyuanka1", "会员卡", "type5"]
      ],
      [
        ["icon-chongzhi1", "充值", "type1"],
        ["icon-chaoshi1", "商城", "type2", "pages/mall/index/index"],
        ["icon-qianggou2", "抢购", "type3"],
        ["icon-huodong", "活动", "type4"],
        ["icon-choujiang1", "抽奖", "type5"]
      ],
      [
        ["icon-dingcan1", "订餐", "type1"],
        ["icon-huiyiting", "会议厅", "type2"],
        ["icon-menpiao", "门票", "type3","pages/mall/ticket/ticket"],
        
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

    app.editTabBar();
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
