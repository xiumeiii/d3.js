##### 让IE6/IE7/IE8浏览器支持CSS3属性

### 一、下载

您可以狠狠地点击这里：[ie-css3.htc](http://www.zhangxinxu.com/study/down/ie-css3.htc)，这个玩意儿是让IE浏览器支持CSS3表现的关键东东。

### 二、上面的是什么东西

首先说说.htc文件，.htc文件是个脚本文件，我个人以为与js文件属于同一货色，只是呢，貌似htc是Internet Explorer(IE)的私生子，只有IE才认它。htc文件可以用来描述web行为，web行为允许程序员把自定义的功能“连接”到现有的元素和控件，而不是必须让用户下载二进制文件（例如ActiveX 控件）来完成这个功能。Stop! 别叉远了，点到为止，如果您对htc文件感兴趣，可以参见[这里](http://www.blueidea.com/tech/web/2004/1671.asp)。

本文的这个ie-css3.htc文件看看名字，看看长相就知道是干嘛的了，让IE浏览器支持CSS3的一些属性。没错，就是通过脚本为IE浏览器增加一些CSS3标准下的一些行为（比较流行的几种）。此htc第一段主要脚本如下：

```javascript
function supportsVml() {
	if (typeof supportsVml.supported == "undefined") {
		var a = document.body.appendChild(document.createElement('div'));
		a.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
		var b = a.firstChild;
		b.style.behavior = "url(#default#VML)";
		supportsVml.supported = b ? typeof b.adj == "object": true;
		a.parentNode.removeChild(a);
	}
	return supportsVml.supported
}
```



明白人基本上都知道，这不跟js脚本一个模子里出来的嘛。也就是说，htc只是js脚本去韩国整了个容，换了副马甲而已。

### 三、如何工作的

要说工作原理，得有一个新角色粉墨登场，那就是“VML”。VML是The Vector Markup Language(矢量可标记语言)的缩写。VML用于将图形数据矢量化的标记语言。这是一种基于 XML 语法的语言，由 AutoDesk 、 Macromedia 和 Microsoft 和 HP 公司向 W3C 提出的方案。VML相当于IE里面的画笔，能实现你所想要的图形，而且结合脚本，可以让图形产生动态的效果。VML是微软1999年9月附带IE5.0发布的……关于VML详细知识，您可以点击这里：[VML百科](http://baike.baidu.com/view/160629.htm)

### 四、如何使用

使用是很容易的，看下面的示例代码：

```css
.box {
  -moz-border-radius: 15px; /* Firefox */
  -webkit-border-radius: 15px; /* Safari 和 Chrome */
  border-radius: 15px; /* Opera 10.5+, 以及使用了IE-CSS3的IE浏览器 */

  -moz-box-shadow: 10px 10px 20px #000; /* Firefox */
  -webkit-box-shadow: 10px 10px 20px #000; /* Safari 和 Chrome */
  box-shadow: 10px 10px 20px #000; /* Opera 10.5+, 以及使用了IE-CSS3的IE浏览器 */

  behavior: url(ie-css3.htc); /* 通知IE浏览器调用脚本作用于'box'类 */
}
```



可以看到，除了最后添加了behavior这么一句，CSS3属性还是那个CSS3属性，不需要化妆、修饰或是化身为变形金刚，这也是此方法的优点所在。

### 五、问题和必要的说明

毕竟不是浏览器自带的属性，使用时遇到问题在所难免，这里说一下一些注意事项，也可以说是方法的局限性吧：

1. 当前元素一定要有定位属性，像是position:relative或是position:absolute属性。
2. z-index值一定要比周围元素的要高，否则……只能说抱歉了~~

### 六、支持的样式及状态说明



|      样式       |        生效        |                    无效                    |
| :-----------: | :--------------: | :--------------------------------------: |
| border-radius | 为元素四个角设置圆角属性元素边框 |               只设置一个角落的圆角属性               |
|  box-shadow   |    模糊大小参数偏移值     |           不支持除了黑色(#000)以外的其他颜色           |
|  text-shadow  |  模糊大小参数偏移值、颜色值   | IE下的表现与Firefox/Safari/Chrome有一点点的差异，原因不详 |



原创文章，转载请注明来自[张鑫旭-鑫空间-鑫生活](http://www.zhangxinxu.com/)[[http://www.zhangxinxu.com](http://www.zhangxinxu.com/)]

[原文]([http://www.zhangxinxu.com/wordpress/?p=783](http://www.zhangxinxu.com/wordpress/?p=783))

