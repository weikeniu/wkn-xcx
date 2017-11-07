// pages/order-note/order-note.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteMaxLen: 50, //备注最多字数
    orderNote: [
      { index: 0, text: '不要香菜', selected: true },
      { index: 1, text: '不要洋葱', selected: false },
      { index: 2, text: '给多放点肉末', selected: true },
      { index: 3, text: '不要葱蒜', selected: false },
      { index: 4, text: '不要姜', selected: false }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  //选择订单备注
  bindOrderNote: function (e) {
    var index = e.currentTarget.dataset.index, list = this.data.orderNote;
    for (var i = 0, len = list.length; i < len; i++) {
      if(index == list[i].index){
        list[i].selected = !list[i].selected;
      }
    }
    this.setData({
      orderNote: list
    });
  },

  //字数限制
  bindWordLimit: function(e){
    var value = e.detail.value, len = parseInt(value.length);
    if (len > this.data.noteMaxLen) return;

    this.setData({
      currentNoteLen: len //当前字数
      //limitNoteLen: this.data.noteMaxLen - len //剩余字数
    });
  }
})