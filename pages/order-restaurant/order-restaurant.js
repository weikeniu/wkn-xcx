Page({
  data:{
    userNum:1,
    time: '12:01',
    selectDate:new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
  },
  add:function(){
    let userNumTemp=this.data.userNum;
    userNumTemp++;
    this.setData({
      userNum:userNumTemp
    })
  },
  reduce:function(){
    if(this.data.userNum>1){
      let userNumTemp=this.data.userNum;
      userNumTemp--;
      this.setData({
        userNum:userNumTemp
      })
    }
  },
   bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      selectDate:options.id
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})