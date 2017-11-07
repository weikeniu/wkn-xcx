// pages/member/red-packets/red-packets.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //红包列表
    packetList: [
      { index: 0, price: "8", type: "订房红包", difftime: "2017-08-11", status: "on", selected: false },
      { index: 1, price: "10", type: "超市红包", difftime: "2017-08-22", status: "on", selected: true },
      { index: 2, price: "10", type: "广州分店红包", difftime: "2017-08-25", status: "on", selected: false },
      { index: 3, price: "10", type: "广州分店红包", difftime: "2017-08-25", status: "on", selected: false },
      { index: 4, price: "20", type: "周边餐饮红包", difftime: "2017-08-30", status: "off", selected: false },
      { index: 5, price: "50", type: "通用红包", difftime: "2017-09-10", status: "on", selected: false }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //领取红包
  bindPacketChoose: function(e){
    var idx = e.currentTarget.dataset.index, list = this.data.packetList;
    console.log(list)
    for(var i = 0, len = list.length; i < len; i++){
      if(idx == list[i].index){
        if(list[idx].status == "on"){
          if (list[idx].selected) {
            //领取
            wx.showToast({
              title: '已领取，使用中',
            })
          } else {
            list[idx].selected = true;
          }
        }else{
          //删除
          list.splice(idx, 1);
          this.setData({
            packetList: list
          });
        }
      }
    }
    this.setData({
      packetList: list
    });
  }

})