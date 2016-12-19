# Small-program-douban
微信小程序豆瓣电影及其基本API源码结构分析
# 功能样式
主要有八个页面index,movie,search,mine,systemInfo,audio,map,compass，其中index,movie,search实现电影展示和搜索功能，其他页面展示微信几大基本API用法；
- index(首页，调去豆瓣借口获取推荐电影列表)
- movie(电影详情页，点击电影列表进入)
- search(搜索页面，搜索关键词，展现相关电影)
- mine(个人页面，用于展现微信功能API用法)
# 效果图
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/d1.png)
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/d2.png)
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/dn.png)
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/d3.png)
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/d4.png)
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/d5.png)
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/d6.png)
微信小程序组件如此之丰富、你还需要重量级的组件库来冗余代码吗？

所以只需要Wa-UI这个轻量级的库很快捷的做布局就可以了

##使用须知
import引入即可使用，[快速开始](https://github.com/liujians/wa-ui/wiki/get%20started)

Wa-UI说明文档请参考[Wiki](https://github.com/liujians/wa-ui/wiki "wiki")

IDE更新2800版本之后外部字体icon暂时不能用了，可以使用官方icon和图片替代
###展示

栅格（想要几几分？）

![](https://github.com/liujians/Wa-UI/blob/master/image/show/grid.png)
![](https://github.com/liujians/Wa-UI/blob/master/image/show/grid-view.png)

列表

![](https://github.com/liujians/Wa-UI/blob/master/image/show/list.png)

## 目前样式 ##
### 列表
- 列表&列表项
- 带头像的列表项
- 带缩略图的列表项
- 列表间隔空间
- 列表icon（icon暂停使用）

### 表单

- 按钮三种大小
- 按钮六种颜色
- input默认样式
- input横向
- input堆叠
- 带icon的input（icon暂停使用）
- 带icon的button（icon暂停使用）

###布局

- row&col基于flex的网格布局
- grid-view 基于float的九宫格布局

不断更新中

欢迎一起学习交流
<a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=9bcf9f7be59b471456c1feec466dab4d54da7ab35c834b8e821ec17177fb33b3"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="前端群居所" title="前端群居所"></a>

测试使用中，如果你有好的意见或建议请及时联系我

###License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2016 liujians
