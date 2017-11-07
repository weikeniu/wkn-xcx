// 格式化日期(自定义：xxxx年xx月xx日)
function formatTime(date){
  if(!!date){
    if(!(date instanceof Date))
    date = new Date(date);
    var month = date.getMonth() + 1
    var day = date.getDate()
    return `${month}月${day}日`
  }
}

// 格式化日期(格式：xxxx-xx-xx | xxxx/xx/xx)
function formatDay(date, type="-"){ //type值"-" 或 "/"
  if (!!date) {
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    return [year, month, day].map(formatNumber).join(type);
  }
}

// 格式化星期
function formatWeek(date){
  if(!!date){
    var day = date.getDay();
    return "周" + "日一二三四五六".charAt(day);
  }
}

// 格式化时间
function formatHour(date){
  if(!!date){
    var hour = new Date(date).getHours();
    var minute = new Date(date).getMinutes();
    return [hour, minute].map(formatNumber).join(":");
  }
}

// 给在0-9的日期加上0
function formatNumber(n){
  n = n.toString()
  return n[1] ? n: '0' + n
}

module.exports = {
  formatTime: formatTime,
  formatDay: formatDay,
  formatWeek: formatWeek,
  formatHour: formatHour
}