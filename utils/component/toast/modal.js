/* 小程序Toast自定义弹窗 v1.0.0 */

//微信自定义弹窗.Start
module.exports = {
  showDialogModal: function (options) {
    var that = getCurrentPages()[getCurrentPages().length - 1]; //获取当前page实例

    var config = {
      type: '',      //弹窗类型
      content: '',    //内容
      style: '',     //自定义层的样式
      icon: '',      //弹窗小图标(success | info | clear)

      shade: true,    //是否显示遮罩层
      anim: 'scaleIn',  //scaleIn：缩放打开(默认)  fadeIn：渐变打开  fadeInUpBig：顶部向下渐变打开  rollIn：左侧翻转打开  shake：震动
      time: 0,      //设置弹窗自动关闭秒数
    };

    that.opts = options;
    for (var i in config) {
      if (!(i in that.opts)) {
        that.opts[i] = config[i];
      }
    }
    var opts = that.opts;

    //自动关闭
    if (opts.time) {
      setTimeout(function () {
        that.setData({
          'dialogCfg.showModalStatus': false
        });
      }, opts.time * 1000)
    }

    that.setData({
      dialogCfg: {
        showModalStatus: true,

        type: opts.type,
        content: opts.content,
        style: opts.style,
        icon: opts.icon,

        anim: opts.anim ? opts.anim : 'scaleIn',
        shade: opts.shade
      }
    });

    return this;
  },

  //扩展方法
  showToast: function (content, imgType) {
    this.showDialogModal({
      type: 'toast',
      content: content,
      icon: imgType, //success|info|clear
      shade: false,
      time: 3
    });
  }
}
//微信自定义弹窗.End
