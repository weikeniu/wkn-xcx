// pages/mall/ticket/ticket.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //推荐排序
    tjSortList: [
      { index: 0, text: "推荐排序", selected: true },
      { index: 1, text: "距离优先", selected: false },
      { index: 2, text: "低价优先", selected: false },
      { index: 3, text: "高价优先", selected: false },
      { index: 4, text: "星级优先", selected: false }
    ],

    //筛选(价格单选)
    singleFilterList: [
      { index: 0, text: "不限", selected: true },
      { index: 1, text: "0-150", selected: false },
      { index: 2, text: "150-300", selected: false },
      { index: 3, text: "300-600", selected: false },
      { index: 4, text: "600-1000", selected: false },
      { index: 5, text: "1000+", selected: false }
    ],
    //筛选(类别多选)
    multiFilterList: [
      { index: 0, text: "不限", selected: true },
      { index: 1, text: "地址公园", selected: false },
      { index: 2, text: "博物馆", selected: false },
      { index: 3, text: "海洋公园", selected: false },
      { index: 4, text: "亲子", selected: false },
      { index: 5, text: "湿地公园", selected: false },
      { index: 6, text: "水乡古镇", selected: false },
      { index: 7, text: "老友记", selected: false },
      { index: 8, text: "动植物园", selected: false }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //清除文本框
  clearIptData: function(e){
    console.log('---');
  },
  
  //附近
  bindUrlToNear: function(e){
    wx.navigateTo({
      url: 'ticket-near/ticket-near',
    })
  },

  //景点详细页面
  bindViewProDetail: function (e) {
    //console.log('========');
    wx.navigateTo({
      url: '../pro-details/pro-details',
    })
  },

  //城市选择
  bindSwitchCity: function(e){
    wx.navigateTo({
      url: '../../switchCity/switchCity'
    })
  },

  //推荐排序
  bindRecommendSort: function (e) {
    var index = e.currentTarget.dataset.index, list = this.data.tjSortList;
    for(var i = 0, len = list.length; i < len; i++){
      list[i].selected = false;
      list[index].selected = true;
    }
    this.setData({
      tjSortList: list
    });

    //关闭弹窗
    this.hideBottomModal();
  },

  //筛选(价格-单选)
  bindSingleFilter: function(e){
    var index = e.currentTarget.dataset.index, list = this.data.singleFilterList;
    for(var i = 0, len = list.length; i < len; i++){
      list[i].selected = false;
      list[index].selected = true;
    }
    this.setData({
      singleFilterList: list
    });
  },

  //筛选(类别-多选)
  bindMultiFilter: function(e){
    var index = e.currentTarget.dataset.index, list = this.data.multiFilterList;
    for(var i = 0, len = list.length; i < len; i++){
      // if(index == list[i].index){
      //   list[i].selected = !list[i].selected;
      // }

      if(index == 0){
        list[i].selected = false;
        list[0].selected = true;
      }else{
        if(index == list[i].index){
          list[0].selected = false;
          list[i].selected = !list[i].selected;
        }
      }
    }
    this.setData({
      multiFilterList: list
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