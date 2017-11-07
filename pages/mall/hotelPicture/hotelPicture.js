// pages/mall/hotelPicture/hotelInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [
      {
        title: "酒店外观",
        picture: ['http://admin.weikeniu.com/img/28291/20170710150342_6402_b.jpg', 'http://admin.weikeniu.com/img/28291/20170904180634_0933_b.png', 'http://admin.weikeniu.com/img/28291/20170920113453_1245_b.jpg']
      },
      {
        title: "体验标准双床房",
        picture: ['http://admin.weikeniu.com/img/28291/20170329142050_0348_b.png', 'http://admin.weikeniu.com/img/28291/20170329142048_9896_b.png', 'http://admin.weikeniu.com/img/28291/20170705105251_1229_b.jpg', 'http://admin.weikeniu.com/img/28291/20170705105250_9981_b.jpg', 'http://admin.weikeniu.com/img/28291/20170705105228_8149_b.jpg']
      },
      {
        title: "豪华海景房",
        picture: ['http://admin.weikeniu.com/img/28291/20170705114237_2805_b.jpg', 'http://admin.weikeniu.com/img/28291/20170705114237_2181_b.jpg', 'http://admin.weikeniu.com/img/28291/20170705114229_0281_b.jpg', 'http://admin.weikeniu.com/img/28291/20170705114228_7941_b.jpg']
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //预览图片
  previewImage: function(e){
    var current = e.currentTarget.dataset.src, idx = e.currentTarget.dataset.index, imglist = this.data.imgList;
    var imgArr = [];
    for(var i = 0, len = imglist.length; i < len; i++){
      imgArr = imglist[idx].picture;
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imgArr // 需要预览的图片http链接列表  
    });
  }

})