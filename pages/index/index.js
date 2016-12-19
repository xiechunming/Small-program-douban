var API_URL = 'https://api.douban.com/v2/movie/top250'
var app = getApp()
Page({
  data: {
   movies:[],
   title:"加载中..."
  },

  onLoad: function () {
    this.set
    var that = this;
    wx.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 10000
   },
   
    wx.request({
      url: 'https://api.douban.com/v2/movie/top250',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {"Content-Type":"json"}, 
      success: function(res){
       wx.hideToast()
      console.log(res);
      that.setData({title:res.data.title,movies:res.data.subjects});
      console.log(that.data.movies[0].title+"title");
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
   
   
   )

  }
})
