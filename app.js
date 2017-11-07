//app.js
var dialog = require('utils/component/toast/modal.js');

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },

  //第一种状态的底部  
  editTabBar: function () {
    var _curPageArr = getCurrentPages();
    var _curPage = _curPageArr[_curPageArr.length - 1];
    var _pagePath = _curPage.__route__;
    if (_pagePath.indexOf('/') != 0) {
      _pagePath = '/' + _pagePath;
    }
    var tabBar = this.globalData.tabBar;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == _pagePath) {
        tabBar.list[i].active = true;//根据页面地址设置当前页面状态    
      }
    }
    _curPage.setData({
      tabBar: tabBar
    });
  },

  /**
   * 重写wx.showToast弹窗
   * 图标类型：【 系统：loading  自定义：success/error/info/warn/question 】
   * 调用方式：getApp().showToast("提示", "success");
  */
  showToast88: function(title, imgType){
    if(imgType == "loading"){
      wx.showToast({
        title: title,
        icon: imgType
      })
    }else{
      wx.showToast({
        title: title,
        image: "/images/tipIcon/"+imgType+".png"
      })
    }
  },

  //文本提示框
  showText: function (content) {
    dialog.showDialogModal({
      anim: '',
      content: content,
      shade: true,
      time: 3
    });
  },
  /**
  * 重写wx.showToast弹窗
  * 图标类型：【弹窗小图标(success | info | clear)】
  */
  showToast: function (content, imgType) {
    dialog.showToast(content, imgType);
  },

  globalData:{
    userInfo:null,
    test:111,
    tabBar: {
      "color": "#7A7E83",
      "selectedColor": "#12b7f5",
      "borderStyle": "black",
      "backgroundColor": "#f3f3f3",
      "list": [
        {
          "pagePath": "/pages/index/index",
          "iconPath": "/images/navIcon/icon_home.png",
          "selectedIconPath": "/images/navIcon/icon_home_HL.png",
          "text": "首页",
          "selectedColor": "#12b7f5",
          "clas": "menu-item",
          "active": true
        },
        {
          "pagePath": "/pages/list/list",
          "iconPath": "/images/navIcon/icon_dingfang.png",
          "selectedIconPath": "/images/navIcon/icon_dingfang_HL.png",
          "text": "订房",
          "selectedColor": "#12b7f5",
          "clas": "menu-item",
          "active": false
        },
        {
          "pagePath": "/pages/list/list",
          "iconPath": "/images/navIcon/icon_youhui.png",
          "selectedIconPath": "/images/navIcon/icon_youhui_HL.png",
          "text": "优惠",
          "selectedColor": "#12b7f5",
          "clas": "menu-item",
          "active": false
        },
        {
          "pagePath": "/pages/list/list",
          "iconPath": "/images/navIcon/icon_huodong.png",
          "selectedIconPath": "/images/navIcon/icon_huodong_HL.png",
          "text": "活动",
          "selectedColor": "#12b7f5",
          "clas": "menu-item",
          "active": false
        },
        {
          "pagePath": "/pages/member/index/index",
          "iconPath": "/images/navIcon/icon_huiyuan.png",
          "selectedIconPath": "/images/navIcon/icon_huiyuan_HL.png",
          "text": "会员",
          "selectedColor": "#12b7f5",
          "clas": "menu-item",
          "active": false
        }
      ],
      "position": "bottom"
    }
  }
})