# Small-program-douban
微信小程序豆瓣电影及其基本API源码结构分析
## 联系方式
手机同微信：18516292849，欢迎大家多多交流
## 使用说明
直接新建无APPID工程，将项目导入即可（若是有APPID工程，因为服务器配置问题，豆瓣接口将无法请求数据）
# 功能样式
主要有八个页面index,movie,search,mine,systemInfo,audio,map,compass，其中index,movie,search实现电影展示和搜索功能，其他页面展示微信几大基本API用法；
- index(首页，调去豆瓣借口获取推荐电影列表)
- movie(电影详情页，点击电影列表进入)
- search(搜索页面，搜索关键词，展现相关电影)
- mine(个人页面，用于展现微信功能API用法)

### 逻辑结构 
首页onLoad()方法显示loading,然后调取豆瓣接口获取movies存在data里面，成功获取数据之后取消loading,页面通过scroll-view展示每条movie相关信息；通过<navigator url="../movie/movie?id={{item.id}}" wx:for="{{movies}}">j将所点击的id传到电影详情页面，电影详情更具id获取指定电影对象，然后页面展示；搜索页面通过input获取用户输入关键词，与豆瓣搜素接口拼接，获取电影列表展示。个人页面主要是微信几个基本API用法入口。关于布局，有四个点，纵向和横向使用flex布局，电影列表文字覆盖在图标之上使用相对和绝对布局，个人页面控件使用第三方wa-ui[Wiki](https://github.com/liujians/wa-ui/wiki "wiki")提供的控件

##效果图
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/ps.png)

##效果图
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/d1.png)
  ![](https://github.com/xiechunming/Small-program-douban/blob/master/d2.png)
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/dn.png)
  ![](https://github.com/xiechunming/Small-program-douban/blob/master/d3.png)
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/d4.png)
  ![](https://github.com/xiechunming/Small-program-douban/blob/master/d5.png)
- ![](https://github.com/xiechunming/Small-program-douban/blob/master/d6.png)

