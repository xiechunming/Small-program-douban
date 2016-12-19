// systemInfo.js
Page({
	data:{

	},
	getSys(){
		var _self = this;
		wx.getSystemInfo({
			success(res){
				_self.setData({
					sys:res
				})
			}
		})
	},
	getNetwork(){
		var _self = this;
		wx.getNetworkType({
			success(res){
				console.log(res);
				_self.setData({
					network:res.networkType 
				})
			}
		})
	}
})