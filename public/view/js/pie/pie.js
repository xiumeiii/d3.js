$(function(){
    extendingArcs();
    $('.pie').addClass("active");
    $('.pie li a').click(function(){
        $("svg").remove();
        switch($(this).attr("id")){
            case "href-extendingArcs":
                extendingArcs();
                break;
            case "href-pieCircle":
                pieCircle();
                break;
        }
    });
})

//extendingArcs d3.v3
var extendingArcs = function(){
    var data = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

    var width = 960,
        height = 500;

    var outerRadius = height / 2 - 20,
        innerRadius = outerRadius / 3,
        cornerRadius = 10;

    var pie = d3.layout.pie()
        .padAngle(.02); //padAngle:取得或设置饼布局填充角度。

    var arc = d3.svg.arc()
        .padRadius(outerRadius)
        .innerRadius(innerRadius);

    var svg = d3.select("#extendingArcs").append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    svg.selectAll("path")
        .data(pie(data))
        .enter().append("path")
        .each(function(d) {
            d.outerRadius = outerRadius - 20;
        })
        .attr("d", arc)
        .on("mouseover", arcTween(outerRadius, 0))
        .on("mouseout", arcTween(outerRadius - 20, 150));

    function arcTween(outerRadius, delay) {
        return function() {
            d3.select(this).transition().delay(delay).attrTween("d", function(d) {
                var i = d3.interpolate(d.outerRadius, outerRadius);
                return function(t) {
                    d.outerRadius = i(t); return arc(d);
                };
            });
        };
    }
}

var pieCircle = function(){
    var dataset=[5,10,20,40,6,25];

    //(1)转化数据为适合生成饼图的对象数组
    var pie=d3.layout.pie(dataset);

    var h=300;
    var w=300;

    var outerRadius=w/2;//外半径

    //(7)圆环内半径
    var innerRadius=w/3;

    //(2)用svg的path绘制弧形的内置方法
    var arc=d3.svg.arc()//设置弧度的内外径，等待传入的数据生成弧度
        .outerRadius(outerRadius)
        .innerRadius(innerRadius);

    var svg=d3.select("#pieCircle")
        .append("svg")
        .attr("width",w)
        .attr("height",h);

    //(3)颜色函数
    var color=d3.scale.category10();//创建序数比例尺和包括10中颜色的输出范围

    //(4)准备分组,把每个分组移到图表中心
    var arcs=svg.selectAll("g.arc")
        .data(pie(dataset))
        .enter()
        .append("g")
        .attr("class","arc")
        //移到图表中心
        .attr("transform","translate("+outerRadius+","+outerRadius+")");//translate(a,b)a表示横坐标起点，b表示纵坐标起点

    //(5)为组中每个元素绘制弧形路路径
    arcs.append("path")//每个g元素都追加一个path元素用绑定到这个g的数据d生成路径信息
        .attr("fill",function(d,i){//填充颜色
            return color(i);
        })
        .attr("d",arc);//将角度转为弧度（d3使用弧度绘制）

    //(6)为组中每个元素添加文本
    arcs.append("text")//每个g元素都追加一个path元素用绑定到这个g的数据d生成路径信息
        .attr("transform",function(d){
            return "translate("+arc.centroid(d)+")";//计算每个弧形的中心点（几何中心）
        })
        .attr("text-anchor","middle")
        .text(function(d){
            return d.value;//这里已经转为对象了
        });
}