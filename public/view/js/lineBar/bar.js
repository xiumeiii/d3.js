$(function(){
    // barChartIIb();
    wappingLongLabels();
    $('.bar').addClass("active");
    $('.bar li a').click(function(){
        $("svg").remove();
        $(".bar-operate").hide();
        switch($(this).attr("id")){
            case "href-canvasBarChart":
                canvasBarChart();
                break;
            case "href-wappingLongLabels":
                wappingLongLabels();
                break;
            case "href-barChartIIIa":
                barChartIIIa();
                break;
            case "href-barChartIIIb":
                barChartIIIb();
                break;
            case "href-barChartIIIc":
                barChartIIIc();
                break;
            case "href-barChartIIb":
                barChartIIb();
                break;
            case "href-barChartIIc":
                barChartIIc();
            case "href-updateOverAnimate":
                updateOverAnimate();

                break;
        }
    });
})


//d3-v4 canvasBarChart
var canvasBarChart = function(){
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;
    var x = d3.scaleBand()
        .range([0,width])
        .padding(.1);
    // .paddingInner(.1)
    // .paddingOuter(.3);
    var y = d3.scaleLinear()
        .range([height,0]);
    // var xAxis = d3.svg.axis().scale(x).orient("bottom");
    var xAxis = d3.axisBottom().scale(x);
    var yAxis = d3.axisLeft().scale(y)
        .ticks(12, "%");

    var svg = d3.select("#canvasBarChart").append("svg")
        .attr("width",width + margin.left + margin.right)
        .attr("height",height + margin.top + margin.bottom)
        .append("g")
        .attr("class","graph")
        .attr("transform","translate(" + margin.left + "," + margin.top + ")")

    d3.tsv("./../data/lineBar/canvasBarChart.tsv",type,function(data){
        x.domain(data.map(function(d) {
            return d.letter;
        }));
        y.domain([0,d3.max(data,function(d){
            return d.frequency;
        })]);
        svg.append("g")
            .attr("class","x axis")
            .attr("transform","translate(0,"+ height+")")
            .call(xAxis);

        svg.append("g")
        // .attr("transform","translate(0,0)")
            .attr("class","y axis")
            .call(yAxis);
        svg.selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class","bar")
            .attr("x",function(d){
                return x(d.letter);
            })
            // .attr("width",x.rangeRound()/2)
            .attr("width",x.bandwidth())
            .attr("y",function(d){
                return y(d.frequency);
            })
            .attr("height",function(d){
                return height - y(d.frequency);
            })
            .attr("fill","rgb(0,0,200)");
    });
    function type(d){
        d.frequency = +d.frequency;
        return d;
    }
}

//d3-3  d3-4 wapping Long Labels
var wappingLongLabels = function(){
    var margin = {top: 80, right: 180, bottom: 80, left: 180},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
       .rangeRoundBands([0, width], .1, .3);
    var y = d3.scale.linear()
       .range([height, 0]);
    var xAxis = d3.svg.axis()
       .scale(x)
       .orient("bottom");
    var yAxis = d3.svg.axis()
       .scale(y)
       .orient("left")
       .ticks(8, "%");

     //var x = d3.scaleBand()
     //    .range([0, width]).padding(.2);
     //var y = d3.scaleLinear()
     //    .range([height, 0]);
     //var xAxis = d3.axisBottom().scale(x) ;
     //var yAxis = d3.axisLeft().scale(y)
     //    .ticks(8, "%");

    var svg = d3.select("#wappingLongLabels").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("./../data/lineBar/wappingLongLabels.tsv", type, function(error, data) {
        x.domain(data.map(function(d) { return d.name; }));
        y.domain([0, d3.max(data, function(d) { return d.value; })]);

        svg.append("text")
            .attr("class", "title")
            .attr("x", x(data[0].name))
            .attr("y", -26)
            .text("Why Are We Leaving Facebook?");

        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll(".tick text")
            .call(wrap, x.rangeBand());
             //.call(wrap, x.bandwidth());

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.name); })
            .attr("width", x.rangeBand())
             //.attr("width",  x.bandwidth())
            .attr("y", function(d) { return y(d.value); })
            .attr("height", function(d) { return height - y(d.value); });
    });

    function wrap(text, width) {
        text.each(function() {
            var text = d3.select(this),
                words = text.text().split(/\s+/).reverse(),
                word,
                line = [],
                lineNumber = 0,
                lineHeight = 1.1,
                y = text.attr("y"),
                dy = parseFloat(text.attr("dy")),
                tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan")
                        .attr("x", 0)
                        .attr("y", y)
                        .attr("dy", ++lineNumber * lineHeight + dy + "em")
                        .text(word);
                }
            }
        });
    }

    function type(d) {
        d.value = +d.value;
        return d;
    }
}

//d3-v3 d3-v4 BarChartIIIa
var barChartIIIa = function(){
    var width = 960,height = 500;
     var y = d3.scale.linear()
    //var y = d3.scaleLinear()
        .range([height,0]);
    var chart = d3.select("#barChartIIIa").append("svg")
        .attr("class","chart")
        .attr("width",width)
        .attr("height",height);
    d3.tsv("./../data/lineBar/barChartIIIa.tsv",type,function(error,data){
        y.domain([0,d3.max(data,function(d){
            return d.value;
        })]);
        var barWidth = width / data.length;
        var bar = chart.selectAll("g")
            .data(data)
            .enter().append("g")
            .attr("transform",function(d,i){
                return "translate(" + i * barWidth +",0)";
            });
        bar.append("rect")
            .attr("y",function(d){
                return y(d.value);
            })
            .attr("rx",4)//矩形圆角
            .attr("ry",4)
            .attr("height",function(d){
                return height - y(d.value);
            })
            .attr("width",barWidth - 1);
        bar.append("text")
            .attr("x",barWidth / 2)
            .attr("y",function(d){
                return y(d.value) + 3;
            })
            .attr("dy",".75em")
            .text(function(d){
                return d.value;
            })
    });
    function type(d){
        d.value = +d.value;
        return d;
    }
}

//d3-v3 d3-v4 BarChartIIIb
var barChartIIIb = function(){
    var width = 960,
        height = 500;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);


    //var x = d3.scaleBand()
    //    .range([0, width]).padding(.1);

     var y = d3.scale.linear()
    //var y = d3.scaleLinear()
        .range([height, 0]);

    var chart = d3.select("#barChartIIIb").append("svg")
        .attr("class","chart")
        .attr("width", width)
        .attr("height", height);

    d3.tsv("./../data/lineBar/barChartIIIa.tsv", type, function(error, data) {
        x.domain(data.map(function(d) { return d.name; }));
        y.domain([0, d3.max(data, function(d) { return d.value; })]);

        var bar = chart.selectAll("g")
            .data(data)
            .enter().append("g")
            .attr("transform", function(d) {
                return "translate(" + x(d.name) + ",0)";
            });

        bar.append("rect")
            .attr("y", function(d) { return y(d.value); })
            .attr("height", function(d) { return height - y(d.value); })
             .attr("width", x.rangeBand());
            //.attr("width", x.bandwidth());

        bar.append("text")
         .attr("x", x.rangeBand() / 2)
            //.attr("x", x.bandwidth() / 2)
            .attr("y", function(d) { return y(d.value) + 3; })
            .attr("dy", ".75em")
            .text(function(d) { return d.value; });
    });

    function type(d) {
        d.value = +d.value; // coerce to number
        return d;
    }
}

//d3-v3 d3-v4 barChartIIIc
var barChartIIIc = function(){
    var margin = {top: 20, right: 30, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

     var x = d3.scale.ordinal()
         .rangeRoundBands([0,width],.1);
     var y = d3.scale.linear()
         .range([height,0]);

    //var x = d3.scaleBand()
    //    .range([0,width]).padding(.1);
    //var y = d3.scaleLinear()
    //    .range([height,0]);

     var xAxis = d3.svg.axis()
         .scale(x)
         .orient("bottom");
     var yAxis = d3.svg.axis()
         .scale(y)
         .orient("left");

    //var xAxis = d3.axisBottom()
    //    .scale(x);
    //var yAxis = d3.axisLeft()
    //    .scale(y);

    var chart = d3.select("#barChartIIIc").append("svg").attr("class","chart")
        .attr("width",width + margin.left + margin.right)
        .attr("height",height + margin.top + margin.bottom)
        .append("g")
        .attr("transform","translate(" + margin.left + "," + margin.top + ")");
    d3.tsv("./../data/lineBar/barChartIIIa.tsv",type,function(error,data){
        x.domain(data.map(function(d){
            return d.name;
        }));
        y.domain([0,d3.max(data,function(d){
            return d.value;
        })]);
        chart.append("g")
            .attr("class","x axis")
            .attr("transform","translate(0," + height + ")")
            .call(xAxis);
        chart.append("g")
            .attr("class","y axis")
            .call(yAxis);
        chart.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class","bar")
            .attr("x",function(d){
                return x(d.name);
            })
            .attr("y",function(d){
                return y(d.value);
            })
            .attr("height",function(d){
                return height - y(d.value);
            })
             .attr("width", x.rangeBand());
            //.attr("width", x.bandwidth());
    });
    function type(d){
        d.value = +d.value;
        return d;
    }
}

//d3-v3  d3-v4 barChartIIb
var barChartIIb = function(){
    var data = [4,8,15,16,23,42];
    var width = 420,barHeight = 20;

    var x = d3.scale.linear()
        .domain([0,d3.max(data)])
        .range([0,width]);

    //var x = d3.scaleLinear()
    //    .domain([0,d3.max(data)])
    //    .range([0,width]);

    var chart = d3.select("#barChartIIb").append("svg").attr("class","chart")
        .attr("width",width)
        .attr("height",barHeight * data.length);
    var bar = chart.selectAll("g")
        .data(data)
        .enter().append("g")
        .attr("transform",function(d,i){
            return "translate(0," + i * barHeight + ")"
        });
    bar.append("rect")
        .attr("width",x)
        .attr("height",barHeight - 1);
    bar.append("text")
        .attr("x",function(d){
            return x(d) - 3;
        })
        .attr("dy","1.2em")
        .text(function(d){
            return d;
        });
}

// d3-v3  d3-v4 barChartIIc
var barChartIIc = function(){
    var width = 420,
        barHeight = 20;

    var x = d3.scale.linear()
        .range([0, width]);

    //var x = d3.scaleLinear()
    //    .range([0, width]);

    var chart = d3.select("#barChartIIc").append("svg").attr("class","chart")
        .attr("width", width);

    d3.tsv("./../data/lineBar/barChartIIc.tsv", type, function(error, data) {
        x.domain([0, d3.max(data, function(d) { return d.value; })]);

        chart.attr("height", barHeight * data.length);

        var bar = chart.selectAll("g")
            .data(data)
            .enter().append("g")
            .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

        bar.append("rect")
            .attr("width", function(d) { return x(d.value); })
            .attr("height", barHeight - 1);

        bar.append("text")
            .attr("x", function(d) { return x(d.value) - 3; })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function(d) { return d.value; });
    });

    function type(d) {
        d.value = +d.value; // coerce to number
        return d;
    }
}

var updateOverAnimate = function(){
    $(".bar-operate").show();
    //(1) 准备数据集
    var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

    //(2) 设置SVG的高宽
    var w=600;
    var h=250;
    var barPadding = 1;

    //(3) 定义比例尺
    var xScale=d3.scale.ordinal()// x是序数比例尺
        .domain(d3.range(dataset.length))
        .rangeRoundBands([0,w],0.05);
    var yScale=d3.scale.linear()// y仍然是线性比例尺
        .domain([0,d3.max(dataset)])
        .range([0,h]);

    //(4) 创建SVG元素
    var svg = d3.select("#updateOverAnimate")// 选中DOM中的目标元素
        .append("svg")// 为目标元素附加上一个svg子元素
        .attr("width", w)// 设置这个svg的宽
        .attr("height", h);// 设置这个svg的高

    //(5) 为SVG添加条形
    svg.selectAll("rect")// 选中空元素，表示即将创建这样的元素
        .data(dataset)// 对此后的方法都执行dataset.length次迭代
        .enter()// 数据元素值比前面选中的DOM元素多就创建一个新的DOM元素
        .append("rect")// 取得enter的占位元素，并把rect追加到对应的DOM中
        .attr("x", function(d, i) {// 设置横坐标
            //return i * (w / dataset.length); // 从0开始每次右移元素宽那么长(w / dataset.length)
            return xScale(i);// 这里使用序数比例尺，自己去找刚才划分好的档位
        })
        .attr("y", function(d) {// 设置纵坐标，纵坐标正方向是从上往下的，所以条有多长就要设置起点是相对于h再向上移动条长
            return h - yScale(d);
        })
        //.attr("width", w / dataset.length - barPadding)// 设置元素宽，留出间隙宽barPadding。
        .attr("width", xScale.rangeBand())// 这里xScale比例尺已经设置间距了所以直接用
        .attr("height", function(d) {
            return yScale(d);
        })
        .attr("rx",2)//矩形圆角
        .attr("ry",2)
        .attr("fill", function(d) {//设置RGB颜色与数值的关系
            return "rgb(0, 0, " + (d * 10) + ")";
        });

    //(6) 为条加上数值
    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {
            return d;
        })
        .attr("text-anchor", "middle")
        .attr("x", function(d, i) {
            return xScale(i)+xScale.rangeBand()/2;
        })
        .attr("y", function(d) {
            return h - yScale(d) + 14;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size",function(d) {
            return xScale.rangeBand()/2;
        })
        .attr("fill", "white");

    //(15) 删除一条
    d3.select("#bar-delete")
        .on("click",function(){
            //选择所有条
            dataset.shift();
            //更新X轴比例尺
            xScale.domain(d3.range(dataset.length));

            var bars=svg.selectAll("rect")
                .data(dataset);

            bars.exit()
                .transition()
                .duration(500)
                .attr("x", w)
                .remove();
        });

    //(14) 添加一条
    d3.select("#bar-add")
        .on("click",function(){
            //数据集最后添加数值
            var maxValue=75;
            var newNumber =Math.floor(Math.random()*maxValue);//0-24的整数
            dataset.push(newNumber);

            //更新X轴比例尺
            xScale.domain(d3.range(dataset.length));

            //选择所有条
            var bars=svg.selectAll("rect")
                .data(dataset); //绑定数据到元素集，返回更新的元素集

            var texts=svg.selectAll("text")
                .data(dataset);

            //添加条形元素到最右边
            bars.enter()
                .append("rect")
                .attr("x",w);//在SVG最右边，不可见
            //
            texts.enter()
                .append("text");

            //更新新矩形到可见范围内
            //并在这个时候根据数据集为每个条设置对应的属性
            bars.transition()
                .duration(500)
                .attr("x", function(d, i) {
                    return xScale(i) ;
                })//每个X对应到它相应的档位上
                .attr("y", function(d) {
                    return h - yScale(d) ;
                })
                .attr("width", xScale.rangeBand())//这里xScale比例尺已经设置间距了所以直接用
                .attr("height", function(d) {
                    return yScale(d);
                })
                .attr("rx",2)//矩形圆角
                .attr("ry",2)
                .attr("fill", function(d) {//设置RGB颜色与数值的关系
                    return "rgb(0, 0, " + (d * 10) + ")";
                });

            texts.transition()
                .duration(500)
                .text(function(d) {
                    return d;
                })
                .attr("text-anchor", "middle")
                .attr("x", function(d, i) {
                    return xScale(i)+xScale.rangeBand()/2;
                })
                .attr("y", function(d) {
                    return h - yScale(d) + 14;
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "12px")
                .attr("fill", "red");
        });

    //(7) 更新条形数长短的代码,需要一个button标签配合
    //特别注意：这里选中的元素必须在d3选择器之前，或许要先加载完了元素才能被选中
    d3.select("#bar-update")
        .on("click",function(){
            // (12)新数据集,随机数组
            var numValues=dataset.length;
            dataset=[];
            var maxValue=75;
            var newNumber;
            for(var i=0;i<numValues;i++){
                newNumber=Math.floor(Math.random()*maxValue);//0-24的整数
                dataset.push(newNumber);
            }

            //(13)更新比例尺，免使纵坐标超出范围
            yScale.domain([0,d3.max(dataset)]);//只要更新定义域就行了，映射到的值域不变
            //更新所有的矩形
            svg.selectAll("rect")
                .data(dataset)
                .transition()//(9)加上过渡动画
                .delay(function(d,i){
                    return  i/dataset.length*1000;
                })//指定过度什么时间开始，可以用函数控制每一条的动画时间，这样就可得到钢琴版的效果
                .duration(2000)//(10)加上动画的持续时间，以毫秒计算
                .ease("linear")//(11)缓动函数：有circle（加速）elastic（伸缩），linear（匀速），bounce（弹跳）
                .attr("y",function(d){
                    return h-yScale(d);
                })
                .attr("height",function(d){
                    return yScale(d);
                })
                .attr("rx",2)//矩形圆角
                .attr("ry",2);

            //(8)更新条上的数值
            svg.selectAll("text")
                .data(dataset)
                .text(function(d) {
                    return d;
                })
                .attr("text-anchor", "middle")
                .attr("x", function(d, i) {
                    return xScale(i)+xScale.rangeBand()/2;
                })
                .attr("y", function(d) {
                    return h - yScale(d) + 14;
                })
                .attr("font-family", "sans-serif")
                .attr("font-size", "12px")
                .attr("fill", "red");
        });
}