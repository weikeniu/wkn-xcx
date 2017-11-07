// pages/switchCity/switchCity.js

var city = require('../../utils/city.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight: 0, //窗口高度
    scrollToPos: '', //滚动到指定位置

    floatLetter: [],
    showLetter: "K", //显示字母
    isShowLetter: false, //是否字母提示
    currentCity: "广州市", //当前城市

    cityList: [], //城市列表
    //热门城市
    hotCityList: [
      {cityCode: 110000, city: '北京市'}, {cityCode: 310000, city: '上海市'}, {cityCode: 440100, city: '广州市'}, {cityCode: 440300, city: '深圳市'},
      {cityCode: 330100, city: '杭州市'}, {cityCode: 320100, city: '南京市'}, {cityCode: 420100, city: '武汉市'}, {cityCode: 410100, city: '郑州市'},
      {cityCode: 120000, city: '天津市'}, {cityCode: 610100, city: '西安市'}, {cityCode: 510100, city: '成都市'}, {cityCode: 500000, city: '重庆市'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _floatLetter = city.searchLetter;
    var _cityList = city.cityList();
    var sysInfo = wx.getSystemInfoSync();
    var winHeight = sysInfo.windowHeight;
    var itemH = winHeight / _floatLetter.length;
    var tmpObj = [];

    for(var i = 0; i < _floatLetter.length; i++){
      var tmp = {};
      tmp.name = _floatLetter[i];
      tmpObj.push(tmp);
    }
    this.setData({
      winHeight: winHeight,
      itemH: itemH,
      floatLetter: tmpObj,
      cityList: _cityList
    });
  },

  //点击浮动字母
  bindClickLetter: function (e) {
    var that = this;
    
    var _letter = e.currentTarget.dataset.letter;
    console.log(_letter);

    this.setData({
      showLetter: _letter,
      isShowLetter: true,
      scrollToPos: _letter
    });

    setTimeout(function(){
      that.setData({
        isShowLetter: false
      });
    }, 1000);
  },

  //热门城市
  bindHotCity: function(e){
    console.log("---bindHotCity---");
    this.setData({
      currentCity: e.currentTarget.dataset.city
    });
  },

  //列表城市
  bindListCity: function(e){
    console.log("---bindListCity---");
    this.setData({
      currentCity: e.currentTarget.dataset.city
    });
  }

})