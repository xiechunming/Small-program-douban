var API_URL = "https://api.douban.com/v2/movie/subject/"
Page({
  data:{ 
    movie:[]
    },
  onLoad:function(options){
   var that = this;
    wx.request({
     url: API_URL+options.id,
     data: {},
     method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
     header: {"Content-Type":"Json"}, 
     success: function(res){
       that.setData({movie:res.data})
     },
     fail: function() {
      // fail
     },
     complete: function() {
      // complete
     }
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