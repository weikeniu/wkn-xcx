Page({
  data:{
    arrTapNum:0,
    mapBtnNum:0,
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  //点击箭头
  arrTap:function(){
    if(this.data.arrTapNum==0){
      this.setData({
        arrTapNum:1
      })
    }else{
      this.setData({
        arrTapNum:0
      })
    }

    
  },
  //点击下方按钮
  mapBtnTap:function(e){
     let id=e.currentTarget.dataset.id;
     this.setData({
       arrTapNum:1,
       mapBtnNum:id
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