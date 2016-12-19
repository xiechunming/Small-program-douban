// map.js
Page({
	data:{

	},
	location(){
		wx.getLocation({
		  type: 'gcj02', //返回可以用于wx.openLocation的经纬度
		  success: function(res) {
		    var latitude = res.latitude
		    var longitude = res.longitude
		    wx.openLocation({
		      latitude: latitude,
		      longitude: longitude,
		      scale: 28
		    })
		  }
		})
	},
	choose(){
		var _self = this
		wx.chooseLocation({
			success(res){
				_self.setData({
					choose:res
				})
			}
		})
	}
})