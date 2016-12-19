// mine.js
var app = getApp()
Page({
	data:{

	},
	login(){
		var _self = this;
		app.getUserInfo(function(){
			_self.setData({
				userInfo:app.globalData.userInfo
			})
		});
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
	},
	action(){
		wx.showActionSheet({
		  itemList: ['A', 'B', 'C'],
		  success: function(res) {
		    if (!res.cancel) {
		      console.log(res.tapIndex)
		    }
		  }
		})
	},
	getDoc(){
		wx.openDocument({
		  	filePath: "http://ogo5zlrgk.bkt.clouddn.com/excel/%E8%80%83%E5%8B%A4%E8%B0%83%E4%BC%91%E7%B3%BB%E7%BB%9F.xlsx",
		  	success: function (res) {
		  	  console.log('打开文档成功')
		  	}
		})
	}
})