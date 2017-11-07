var testnum=getApp().globalData.test;
var myTime=null;

Page({
  data:{
    //基本变量
    d:new Date(),
    y:[new Date().getFullYear()],
    m:[new Date().getMonth()+1],
    day:[],
    inDays:1,
    //点击改变的变量（默认选中当前天和后一天）
    dCur:new Date().getDate(),
    dNext:new Date().getDate()+1,
    yCur:new Date().getFullYear(),
    yCur2:new Date().getFullYear(),
    mCur:new Date().getMonth()+1,
    mCur2:new Date().getMonth()+1,
    
    //真实不变的日期
    dTure:new Date().getDate(),
    yTure:new Date().getFullYear(),
    mTure:new Date().getMonth()+1,

    tapNum:0,//点击日期的信号量
    calNum:6,//显示日历的数量

    //提示
    showView:0,
  },
  //判断离店日期
  leaveD:function(){
    if(this.data.dCur==new Date(this.data.y,this.data.m,0).getDate()&&this.data.mCur!=12){
      this.setData({
         dNext:1,
         mCur2:new Date().getMonth()+2,
      })
    } else if (this.data.dCur == new Date(this.data.y, this.data.m, 0).getDate() && this.data.mCur == 12){
      this.setData({
        dNext: 1,
        mCur2: 1,
        yCur2:this.data.yCur+1
      })
    }

  },
  //依次下月的变量
  nextCal:function(n){
     let setY=new Date().getFullYear(),
         setM=new Date().getMonth()+1+n,
         //中转变量
         tempM=this.data.m,
         tempY=this.data.y;
     if(setM>12){//判断月份以判断年份
          setY+=parseInt((setM-1)/12);
          setM%12==0?setM=12:setM=setM%12;
        }
        //添加到数组
        tempM.push(setM);
        tempY.push(setY);
        this.setData({
          m:tempM,
          y:tempY
        })
  },
  //渲染日历
  calendar:function(year,month){
    //判断是否闰年和每月天数
      if(year%4==0){
          this.setData({
            daycount:[31,29,31,30,31,30,31,31,30,31,30,31]
          })
        }else{
          this.setData({
            daycount:[31,28,31,30,31,30,31,31,30,31,30,31]
          })
        }
        //第一天周几 渲染空格
        let tempDay=this.data.day;
        tempDay.push(new Date(year,month-1).getDay())
        this.setData({
          day:tempDay
        })
},
//弹出提示后消失
settime:function(n){
        
        clearTimeout(myTime);
        this.setData({
            showView:n
          })
        myTime=setTimeout(
          function(){
            this.setData({
              showView:0
            });
        }.bind(this),1000)
},
  onLoad:function(options){
      this.leaveD()
     // 页面初始化 options为页面跳转所带来的参数   
     //默认第一个月份为当前月
      this.calendar(this.data.y[0],this.data.m[0]);
      //循环渲染每个月份
      for(let i=1;i<=this.data.calNum;i++){
        this.nextCal(i) 
        this.calendar(this.data.y[i],this.data.m[i]);
      }
    
        if(options.id1!=undefined){
          this.setData({
              dCur:new Date(options.id1).getDate(),
              mCur:new Date(options.id1).getMonth()+1,
              yCur:new Date(options.id1).getFullYear(),
              dNext:new Date(options.id2).getDate(),
              mCur2:new Date(options.id2).getMonth()+1,
              yCur2:new Date(options.id2).getFullYear(),
          })
        }
},
  //点击日历
  dateTap:function(e){
    if(this.data.tapNum==0){//当未点击过时 标记id1
     this.data.id1=e.currentTarget.dataset.d;
      if(Date.parse(new Date(this.data.id1))>=Date.parse(new Date(this.data.yTure+"/"+this.data.mTure+"/"+this.data.dTure))){//id1大于或等于当前日期才往下执行
          this.setData({
            dCur:new Date(this.data.id1).getDate(),
            yCur:new Date(this.data.id1).getFullYear(),
            mCur:new Date(this.data.id1).getMonth()+1,
            mCur2:'',//设置为空，删除离店日期样式  
          })
      }
    this.data.tapNum=1;//点击过信号量改变
   
    //弹出提示
    this.settime(1);
    //弹出提示end

    }else{
      this.data.id2=e.currentTarget.dataset.d;//已经点击过一次  标记id2
       if(Date.parse(new Date(this.data.id2))>Date.parse(new Date(this.data.id1))){//当id2大于id1才往下执行
          let mTemp=this.data.mCur;
          this.setData({
            dNext:new Date(this.data.id2).getDate(),
            yCur2:new Date(this.data.id2).getFullYear(),
            mCur2:new Date(this.data.id2).getMonth()+1,//添加一个新变量储存第二次点击的月份
            mCur:mTemp
          })
      this.data.tapNum=0;//完成入住离店选择 信号量还原   
       //弹出提示
       this.settime(2);
      //弹出提示end
    
      
      //在此处传值
      console.log(this.data.id1,this.data.id2)
      //计算天数并延时跳转
      var days=parseInt((new Date(this.data.id2).getTime()-new Date(this.data.id1).getTime())/(24 * 60 * 60 * 1000))
      this.setData({
        inDays:days,
      })
      setTimeout(
          function(){
            wx.switchTab({ 
              // url: '../../pages/list/list'
              // url: '../../pages/list/list?id='+this.data.id1+'&&id2='+this.data.id2
              // url: '../../pages/order-food/order-food?id='+this.data.id1+'&&id2='+this.data.id2
              })
          },1000);

      }else if(Date.parse(new Date(this.data.id2))<Date.parse(new Date(this.data.id1))&&
      Date.parse(new Date(this.data.id2))>=Date.parse(new Date(this.data.yTure+"/"+this.data.mTure+"/"+this.data.dTure))){//如果第二次点击小于入住日期并且大于当前日期 则向下执行
          this.data.id1=this.data.id2;//入住日期改变
          this.setData({
            dCur:new Date(this.data.id1).getDate(),
            yCur:new Date(this.data.id1).getFullYear(),
            mCur:new Date(this.data.id1).getMonth()+1,
          })
        this.data.tapNum=1; //信号量还是1
         //弹出提示
          this.settime(1);
        //弹出提示end
      }
    }
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