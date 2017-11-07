Page({
  data:{
     totalNum:[],
     tempArr:[],
     detailNum:0,
     redpaperS:0,
     redpaperId:0,
  },
  //加
 add:function(e){
    let index = parseInt(e.target.dataset.id);
    
    if(this.data.totalNum[index]==undefined){
      this.data.tempArr[index]=1;
    }else{
      this.data.totalNum[index]++;
       this.data.tempArr[index]= this.data.totalNum[index];
    };
    this.setData({
      totalNum:this.data.tempArr
    })
 },
 //减
 reduce:function(e){
     let index = parseInt(e.target.dataset.id);
     if(this.data.totalNum[index]>0){
        this.data.totalNum[index]--;
        this.data.tempArr[index]= this.data.totalNum[index];
     };
      this.setData({
        totalNum:this.data.tempArr
      })
 },
 //底栏明细
 detailTap:function(e){
   if(this.data.detailNum==0){
     this.setData({
       detailNum:1
     })
   }else{
      this.setData({
       detailNum:0
     })
   }
 },
 //红包相关
 redpaperSwitch:function(e){
   if(this.data.redpaperS==0){
     this.setData({
       redpaperS:1
     })
   }else{
      this.setData({
       redpaperS:0
     })
   }
 },
redpaperSelect:function(e){
  var id=e.currentTarget.dataset.id;
  this.setData({
    redpaperId:id
  })
},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
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