var myTime=null;
Page({
  data:{
    tcList:0,
    mask:false,
    cpNum:1,
    watchNum:0,
    //基本变量
    d:new Date(),
    y:[new Date().getFullYear()],
    m:[new Date().getMonth()+1],
    day:[],
    //点击改变的变量
    dCur:new Date().getDate(),
    yCur:new Date().getFullYear(),
    mCur:new Date().getMonth()+1,
    //真实不变的日期
    dTure:new Date().getDate(),
    yTure:new Date().getFullYear(),
    mTure:new Date().getMonth()+1,
    calNum:3,
  },
  //依次下月的变量
  nextCal:function(n){
     let setY=new Date().getFullYear(),
         setM=new Date().getMonth()+1+n,
         tempM=this.data.m,
         tempY=this.data.y;
     if(setM>12){
          setY+=parseInt((setM-1)/12);
          setM%12==0?setM=12:setM=setM%12;
        }
        tempM.push(setM);
        tempY.push(setY);
        this.setData({
          m:tempM,
          y:tempY
        })
  },
  //渲染日历
  calendar:function(year,month){
      if(year%4==0){
          this.setData({
            daycount:[31,29,31,30,31,30,31,31,30,31,30,31]
          })
        }else{
          this.setData({
            daycount:[31,28,31,30,31,30,31,31,30,31,30,31]
          })
        }
        //第一天周几
        let tempDay=this.data.day;
        tempDay.push(new Date(year,month-1).getDay())
        this.setData({
          day:tempDay
        })
},
  onLoad:function(options){
     // 页面初始化 options为页面跳转所带来的参数   
    //  this.setData({
    //    dCur:new Date(options.id1).getDate(),
    //    mCur:new Date(options.id1).getMonth()+1,
    //    yCur:new Date(options.id1).getFullYear(),
    //  })

   this.calendar(this.data.y[0],this.data.m[0]);
    for(let i=1;i<=this.data.calNum;i++){
        this.nextCal(i) 
        this.calendar(this.data.y[i],this.data.m[i]);
      }
    myTime = setInterval(this.GetRTime, 1000);
},
  // 查看更多图片
  watchMore:function(){
    if(this.data.watchNum==0){
      this.setData({
        watchNum:1
      })
    }else{
       this.setData({
        watchNum:0
      })
    }
  },
  //点击日历
  dateTap:function(e){
        //兼容苹果
      var dArr=e.currentTarget.dataset.d.split("-");
          dArr[1]<10?dArr[1]=0+dArr[1]:dArr[1]=dArr[1];
          dArr[2]<10?dArr[2]=0+dArr[2]:dArr[2]=dArr[2];
          e.currentTarget.dataset.d=dArr.join("-");
      //兼容end
      this.data.id1=e.currentTarget.dataset.d;
      if(Date.parse(new Date(this.data.id1))>=Date.parse(new Date(this.data.yTure+"-"+this.data.mTure+"-"+this.data.dTure))){
          
          this.setData({
            dCur:new Date(this.data.id1).getDate(),
            yCur:new Date(this.data.id1).getFullYear(),
            mCur:new Date(this.data.id1).getMonth()+1,
          })
      }
      console.log( this.data.id1)
    },
    //购买数量
  add:function(){
    let temp=this.data.cpNum;
    temp++;
    this.setData({
      cpNum:temp
    })
  },
  reduce:function(){
     let temp=this.data.cpNum;
     if(temp>1){
       temp--;
       this.setData({
        cpNum:temp
      })
     };
     
  },
  //显示关闭弹窗
  showMask:function(){
    clearInterval(myTime);
    this.setData({
      mask:true
    })
  },
  closeMask:function(){
    myTime = setInterval(this.GetRTime, 1000);
    this.setData({
      mask:false
    })
  },
  //产品选择
  tcSelect:function(e){
    let id=e.currentTarget.dataset.id;
    this.setData({
       tcList:id
    })
  },
  //确认
  submit:function(){
    if(this.data.tcList!=0){
      myTime = setInterval(this.GetRTime, 1000);      
      this.setData({
        mask:false
      })
    }
  },
  //倒计时
   GetRTime:function(){
          var EndTime= new Date('2017/10/10 00:00:00');
			    var NowTime = new Date();
			    var t =EndTime.getTime() - NowTime.getTime();
			    var d=0;
			    var h=0;
			    var m=0;
			    var s=0;
			    if(t>=0){
			      d=Math.floor(t/1000/60/60/24);
			      h=Math.floor(t/1000/60/60%24);
			      m=Math.floor(t/1000/60%60);
			      s=Math.floor(t/1000%60);
			    }
          this.setData({
            dl:d,
            hl:h,
            ml:m,
            sl:s
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