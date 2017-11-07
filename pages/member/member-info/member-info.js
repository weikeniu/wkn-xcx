// pages/member/member-info/member-info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sexList: [
      { sex: "男", selected: false },
      { sex: "女", selected: false }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //性别选择
  bindSex: function(e){
    var idx = e.currentTarget.dataset.index, list = this.data.sexList;
    for(var i = 0, len = list.length; i < len; i++){
      list[i].selected = false;
      list[idx].selected = true;
    }
    this.setData({
      sexList: list
    });
    
    console.log(list[idx].sex);
  }

})