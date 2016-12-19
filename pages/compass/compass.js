// compass.js
Page({
  data: {
    
  },
  onLoad(){
  	var _self = this;
  	wx.onCompassChange(function (res) {
  		_self.setData({
  			direction:parseInt(res.direction)
  		})
	})
  }
})