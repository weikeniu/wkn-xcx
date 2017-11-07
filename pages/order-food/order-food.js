Page({
  data:{
     imgUrls:[
      '../../images/114.png',
      '../../images/wz.jpg',
      '../../images/topbg2.jpg'
    ],
    imgTxts:[
      '海螺大酒店',
      '维也纳酒店',
      '花园酒店',
     ],
     indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 300,
    currentNum:0,
    curNum1: 0,
    curNum2: 0,
    curNum3: 0,
    pepperyNum:0,
    maskState:0,
    totalNum:[],
    tempArr:[],
    detailNum:0,
  },
  switchTab1:function(e){
     let index = parseInt(e.currentTarget.dataset.id);
    this.setData({
      curNum1: index
    })
  },
  switchTab2:function(e){
     let index = parseInt(e.currentTarget.dataset.id);
    this.setData({
      curNum2: index
    })
  },
  switchTab3:function(e){
     let index = parseInt(e.currentTarget.dataset.id);
    this.setData({
      curNum3: index
    })
  },
  pepperySelect:function(e){
     let index = parseInt(e.currentTarget.dataset.id);
         console.log(index)
      this.setData({
        pepperyNum: index
      })
  },
  maskTap:function(e){
    let index = parseInt(e.target.dataset.id);
    if(this.data.maskState==0){
      this.setData({
         maskState: 1
      })
    }else{
      this.setData({
            maskState: index
          })
    }
 },
 //swiper变化时
 txtChange:function(e){
      this.setData({
             currentNum:e.detail.current
        })
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
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(options.id,options.id2)
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