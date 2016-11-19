d3-v3(3.5.17)API:

[D3.js 3.0 API中文手册](https://github.com/d3/d3/wiki/API--%E4%B8%AD%E6%96%87%E6%89%8B%E5%86%8C)

d3-v3(4.2.2)API:

[D3.js 4.0 API中文手册](https://github.com/tianxuzhang/d3.v4-API-Translation/blob/master/README.md)

遇坑总结：
### svg
    1. svg的样式属性：stroker、stroke-width、stroke-opacity、fill、fill-opacity、opacity、rx、ry、scale、rotate、skew
### github
    1. github进入项目时，文件搜索的快捷键：直接在当前页面按T键，输入文件名称，会自动筛选文件出来

### 问题遗留
    1. d3.interpolate的v3版本能实现插值，v4插值实现？？？
    2. svg的css设置圆角矩形？？（js可以设置attr("rx",2)和attr("ry",2)）
    3. ease有哪些属性？？ease("linear")//(11)缓动函数：有circle（加速）elastic（伸缩），linear（匀速），bounce（弹跳）：
    4. svg.selectAll("rect").data(dataset, key);这个为什么要用key或value的函数加载？？？？（keyBindToData-键联结数据实例）
    5. keyBindToData-键联结数据的sortBars排序不对，xScale(i)值是对的，但是rect的x值不对了???
    6. 力向导图的图片设置成圆形？？？
    7. 力向导图的颜色自己定义本地的颜色调用???
    8. call(force.drag)什么意思
    9. append("svg:image")  此种冒号形式什么意思
链接：
    1. [moment.js](http://momentjs.cn/)