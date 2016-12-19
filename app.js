/* app.js
*  https://github.com/xiechunming/Small-program-douban.git
*  欢迎大家相互交流：邮箱：akatsuki091311@gmail.com ; 手机同微信：18516292849
*/
App({
  onLaunch: function () {
 
  },
    getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }

})
