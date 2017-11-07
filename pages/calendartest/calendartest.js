Page({
  data:{
    d:new Date(),
    y:new Date().getFullYear(),
    m:new Date().getMonth()+1,
    dCur:new Date().getDate(),
    dNext:new Date().getDate()+1,
    yCur:new Date().getFullYear(),
    mCur:new Date().getMonth()+1,
    tapNum:0,
  },
  //渲染日历
  calendar:function(){
      if(this.data.y%4==0){
          this.setData({
            daycount:[31,29,31,30,31,30,31,31,30,31,30,31]
          })
        }else{
          this.setData({
            daycount:[31,28,31,30,31,30,31,31,30,31,30,31]
          })
        }
        //第一天周几
        this.setData({
          day:new Date(this.data.y,this.data.m-1).getDay()
        })
},
  onLoad:function(options){
     // 页面初始化 options为页面跳转所带来的参数    
   this.calendar();
},
  //下月按钮
  nextM:function(e){
    let setM=this.data.m,setY=this.data.y;
    if(setM<12){
      setM++;
    }else{
      setM=1;
      setY++;
    }
    this.setData({
      m:setM,
      y:setY
    })
    this.calendar();
    console.log(setY+"/"+setM)

  },
  //上月按钮
    prevM:function(e){
    let setM=this.data.m,setY=this.data.y;
    if(Date.parse(new Date())<Date.parse(setY+"/"+setM)){//判断不能是当前月的之前月
       if(setM>1){
        setM--;
      }else{
        setM=12;
        setY--;
      }
    }
    this.setData({
      m:setM,
      y:setY
    })
    this.calendar();
},
  //点击日历
  dateTap:function(e){
    console.log(e.target.dataset.d)

    // let id=e.target.dataset.d;
    // if(Date.parse(new Date(id))>=Date.parse(this.data.d)){
    //   this.setData({
    //     dCur:new Date(id).getDate(),
    //     dNext:new Date(id).getDate()+1,
    //     yCur:new Date(id).getFullYear(),
    //     mCur:new Date(id).getMonth()+1,
    //   })
    // }
    
console.log(this.data.dCur)
var id1,id2;
    if(this.data.tapNum==0){
     id1=e.currentTarget.dataset.d;
      if(Date.parse(new Date(id1))>=Date.parse(this.data.d)){
          this.setData({
            dCur:new Date(id1).getDate(),
             dNext:'',
            yCur:new Date(id1).getFullYear(),
            mCur:new Date(id1).getMonth()+1,
          })
      }
    console.log(id1,id2)
      
      this.data.tapNum=1;
    }else{
      id2=e.currentTarget.dataset.d;
       if(Date.parse(new Date(id2))>Date.parse(new Date(id1))){
          this.setData({
            dNext:new Date(id2).getDate(),
          })
      }
      this.data.tapNum=0;      
    console.log(id1,id2)
      
    }
    console.log( this.data.tapNum)
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