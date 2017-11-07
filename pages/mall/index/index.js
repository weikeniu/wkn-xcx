// pages/mall/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [
      { imgUrl: '../../../images/swiper__mall-img01.jpg', imgTitle: '马尔代夫亲子套票', title: '景点名称', desc: '描述内容描述内容描述' },
      { imgUrl: 'http://admin.weikeniu.com/img/28291/20170728170817_6347.jpg', imgTitle: '暑假狂欢海岛六日游', title: '自助餐', desc: '自助餐，亦称顿饭，有时亦称冷餐会，它是目前国际上所通行的一种非正式的西式宴会，在大型的商务活动中尤为多见。' }
    ],
    index__swiper: 0, //轮播图默认索引
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 200
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  bindSwiperChange: function (e) {
    this.setData({
      index__swiper: e.detail.current
    });
  },

  //搜索跳转
  bindSearTo: function(){
    //console.log('---');
    wx.navigateTo({
      url: '../mall-search/mall-search',
    })
  },

  //立即抢购
  bindBuyingNow: function(e){
    console.log('--------');
  },

  //景点详细页面
  bindViewProDetail: function(e){
    //console.log('========');
    wx.navigateTo({
      url: '../pro-details/pro-details',
    })
  }
  
})