//sankeyInterpolation
// $(function(){
//     var margin = {top:20,right:30,bottom:30,left:40},
//         width = 960 - margin.left - margin.right,
//         height = 500 - margin.top - margin.bottom;
//     var x = d3.scale.linear()
//         .range([0,width]);
//     var y = d3.scale.linear()
//         .range([height,0]);
//     var xAxis = d3.svg.axis()
//         .scale(x)
//         .orient("bottom");
//     var yAxis = d3.svg.axis()
//         .scale(y)
//         .orient("left");
//     var line = d3.svg.line()
//         .interpolate(interpolateSankey)
//         .x(function(d){
//             return x(d.x);
//         })
//         .y(function(d){
//             return y(d.y);
//         });
//     var svg = d3.select("#sankeyInterpolation").append("svg")
//         .attr("width",width + margin.left + margin.right)
//         .attr("height",height + margin.top + margin.bottom)
//         .append('g')
//         .attr("transform","translate(" + margin.left + "," + margin.top + ")");
//     d3.csv("./../data/lineBar/sankeyInterpolation.csv",function(error,data){
//         if(error) throw error;
//         data.forEach(function(d){
//             d.x = + d.x;
//             d.y = + d.y;
//         });
//         x.domain(d3.extent(data, function(d) { return d.x; }));
//         y.domain(d3.extent(data, function(d) { return d.y; }));
//         svg.append("g")
//             .attr("class","x axis")
//             .attr("transform","translate(0," + height +")")
//             .call(xAxis);
//         svg.append("g")
//             .attr("class","y axis")
//             .call(yAxis);
//         svg.append("path")
//             .datum(data)
//             .attr("class","line")
//             .attr("d",line);
//     })
//     function interpolateSankey(points){
//         var x0 = points[0][0],y0 = points[0][1],x1,y1,x2,
//             path = [x0,",",y0],
//             i = 0,
//             n = points.length;
//         while(++i < n){
//             x1 = points[i][0],y1 = points[i][1],x2 = (x0 + x1)/2;
//             path.push("C",x2,",",y0," ",x2,",",y1," ",x1,",",y1);
//             x0 = x1, y0 = y1;
//         }
//         return path.join("");
//     }
// })

//naturalLogScale
//$(function(){
//    var superscript = "⁰¹²³⁴⁵⁶⁷⁸⁹";
//    var formatPower = function(d) {
//            return (d + "").split("").map(function(c) {
//                return superscript[c];
//            }).join("");
//        };
//
//    var margin = {top: 40.5, right: 40.5, bottom: 50.5, left: 60.5},
//        width = 960 - margin.left - margin.right,
//        height = 500 - margin.top - margin.bottom;
//
//    var x = d3.scale.linear()
//        .domain([0, 100])
//        .range([0, width]);
//
//    var y = d3.scale.log()
//        .base(Math.E)
//        .domain([Math.exp(0), Math.exp(9)])
//        .range([height, 0]);
//
//    var xAxis = d3.svg.axis()
//        .scale(x)
//        .orient("bottom");
//
//    var yAxis = d3.svg.axis()
//        .scale(y)
//        .orient("left")
//        .tickFormat(function(d) {
//            return "e" + formatPower(Math.round(Math.log(d)));
//        });
//
//    var line = d3.svg.line()
//        .x(function(d) { return x(d[0]); })
//        .y(function(d) { return y(d[1]); });
//
//    var svg = d3.select("#naturalLogScale").append("svg")
//        .attr("width", width + margin.left + margin.right)
//        .attr("height", height + margin.top + margin.bottom)
//        .append("g")
//        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//    svg.append("g")
//        .attr("class", "axis axis--y")
//        .attr("transform", "translate(0,0)")
//        .call(yAxis);
//
//    svg.append("g")
//        .attr("class", "axis axis--x")
//        .attr("transform", "translate(0," + (height) + ")")
//        .call(xAxis);
//
//    svg.append("path")
//        .datum(d3.range(100).map(function(x) {
//            return [x, x * x + x + 1];
//        }))
//        .attr("class", "line")
//        .attr("d", line);
//})

// inlineLabels https://d3js.org/d3.v4.0.0-alpha.9.min.js
//$(function(){
//    var parseTime = d3.timeParse("%Y");
//
//    var svg = d3.select("#inlineLabels").append("svg")
//        .attr("width",960)
//        .attr("height",500);
//
//    var margin = {top: 30, right: 50, bottom: 30, left: 30},
//        width = +svg.attr("width") - margin.left - margin.right,
//        height = +svg.attr("height") - margin.top - margin.bottom,
//        labelPadding = 3;
//
//    var g = svg.append("g")
//        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//    d3.requestTsv("./../data/lineBar/inlineLabels.tsv", function(d) {
//        d.date = parseTime(d.date);//"2009" 转换成 Thu Jan 01 2009 00:00:00 GMT+0800 (中国标准时间)
//        for (var k in d) //转换成数字的形式
//            if (k !== "date")
//                d[k] = +d[k];
//        return d;
//    }, function(error, data) {
//        if (error) throw error;
//
//        var series = data.columns.slice(1).map(function(key) { //拆分成2组曲线数据
//            return data.map(function(d) {
//                return {
//                    key: key,
//                    date: d.date,
//                    value: d[key]
//                };
//            });
//        });
//
//        var x = d3.scaleTime()// 创建时间线性比例尺。
//            .domain([data[0].date, data[data.length - 1].date])
//            .range([0, width]);
//
//        var y = d3.scaleLinear()
//            .domain([0, d3.max(series, function(s) {
//                return d3.max(s, function(d) {
//                    return d.value;
//                });
//            })])
//            .range([height, 0]);
//
//        var z = d3.scaleCategory10();//10种分类颜色
//
//        g.append("g")
//            .attr("class", "axis axis--x")
//            .attr("transform", "translate(0," + height + ")")
//            .call(d3.axisBottom(x));
//
//        var serie = g.selectAll(".serie")
//            .data(series)
//            .enter().append("g")
//            .attr("class", "serie");
//
//        serie.append("path")
//            .attr("class", "line")
//            .style("stroke", function(d) {
//                return z(d[0].key);
//            })
//            .attr("d", d3.line()
//                .x(function(d) {
//                    return x(d.date);
//                })
//                .y(function(d) {
//                    return y(d.value);
//                })
//            );
//
//        var label = serie.selectAll(".label")
//            .data(function(d) { return d; })
//            .enter().append("g")
//            .attr("class", "label")
//            .attr("transform", function(d, i) {
//                return "translate(" + x(d.date) + "," + y(d.value) + ")";
//            });
//
//        label.append("text")
//            .attr("dy", ".35em")
//            .text(function(d) {
//                return d.value;
//            })
//            .filter(function(d, i) {
//                return i === data.length - 1;
//            })
//            .append("tspan")
//            .attr("class", "label-key")
//            .text(function(d) {
//                return " " + d.key;
//            });
//
//        label.append("rect", "text")
//            .datum(function() {
//                return this.nextSibling.getBBox();
//            })
//            .attr("x", function(d) {
//                return d.x - labelPadding;
//            })
//            .attr("y", function(d) {
//                return d.y - labelPadding;
//            })
//            .attr("width", function(d) {
//                return d.width + 2 * labelPadding;
//            })
//            .attr("height", function(d) {
//                return d.height + 2 * labelPadding;
//            });
//    });
//})

//lineWithMissingData d3-4.0
//$(function(){
//    var data = d3.range(40).map(function(i) {
//        //return i % 5 ? {x: i / 39, y: (Math.sin(i / 3) + 2) / 4} : null;
//        return {x: i / 39, y: (Math.sin(i / 3) + 2) / 4};
//    });
//
//    var margin = {top: 40, right: 40, bottom: 40, left: 40},
//        width = 960 - margin.left - margin.right,
//        height = 500 - margin.top - margin.bottom;
//
//    var x = d3.scaleLinear()
//        .range([0, width]);
//
//    var y = d3.scaleLinear()
//        .range([height, 0]);
//
//    var line = d3.line()
//        .defined(function(d) {
//            return d;
//        })
//        .x(function(d) {
//            return x(d.x);
//        })
//        .y(function(d) {
//            return y(d.y);
//        });
//
//    var svg = d3.select("#lineWithMissingData").append("svg")
//        .datum(data)
//        .attr("width", width + margin.left + margin.right)
//        .attr("height", height + margin.top + margin.bottom)
//        .append("g")
//        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//    svg.append("g")
//        .attr("class", "axis axis--x")
//        .attr("transform", "translate(0," + height + ")")
//        .call(d3.axisBottom().scale(x));
//
//    svg.append("g")
//        .attr("class", "axis axis--y")
//        .call(d3.axisLeft().scale(y));
//
//    svg.append("path")
//        .attr("class", "line")
//        .attr("d", line);
//
//    svg.selectAll(".dot")
//        .data(data.filter(function(d) {
//            return d;
//        }))
//        .enter().append("circle")
//        .attr("class", "dot")
//        .attr("cx", line.x())
//        .attr("cy", line.y())
//        .attr("r", 3.5);
//})

//rainbowPerceptualDistance
//$(function(){
//    var data = [
//        {name: "HSL Rainbow", labelOffset: 60, value: function(t) {
//            return d3.hsl(t, 1, 0.5);
//        }},
//        {name: "HCL Rainbow", labelOffset: 20, value: function(t) {
//            return d3.hcl(t, 1, 0.5);
//        }},
//        {name: "Cubehelix Rainbow", labelOffset: 40, value: d3.scaleRainbow().domain([0, 360])}
//    ].map(function(color) {
//        return color.deltas = d3.range(0, 360, 3).map(function(x) {
//            return {
//                input: x,
//                delta: delta(color.value(x - 10), color.value(x + 10))
//            };
//        }), color;
//    });
//
//    var margin = {top: 20, right: 20, bottom: 30, left: 30},
//        width = 960 - margin.left - margin.right,
//        height = 500 - margin.top - margin.bottom;
//
//    var x = d3.scaleLinear()
//        .domain([0, 360])
//        .range([0, width]);
//
//    var y = d3.scaleLinear()
//        .domain([0, 80])
//        .range([height, 0]);
//
//    var z = d3.scaleCategory10();
//
//    var line = d3.line()
//        .curve(d3.curveBasis)
//        .x(function(d) {
//            return x(d.input);
//        })
//        .y(function(d) {
//            return y(d.delta);
//        });
//
//    var svg = d3.select("#rainbowPerceptualDistance").append("svg")
//        .attr("width", width + margin.left + margin.right)
//        .attr("height", height + margin.top + margin.bottom)
//        .append("g")
//        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
//
//    svg.append("g")
//        .attr("class", "axis axis--x")
//        .attr("transform", "translate(0," + y(0) + ")")
//        .call(d3.axisBottom(x));
//
//    svg.append("g")
//        .attr("class", "axis axis--y")
//        .call(d3.axisLeft(y))
//        .selectAll(".tick:last-of-type")
//        .append("text")
//        .attr("class", "axis-title")
//        .attr("x", 3)
//        .attr("dy", ".32em")
//        .text("Color Difference at ±10° (CIE76)");
//
//    var g = svg.selectAll(".line")
//        .data(data)
//        .enter().append("g")
//        .attr("class", "line");
//
//    g.append("path")
//        .attr("d", function(d) {
//            return line(d.deltas);
//        })
//        .attr("id", function(d, i) {
//            return "path-" + i;
//        })
//        .style("stroke", function(d, i) {
//            return z(i);
//        });
//
//    g.append("text")
//        .attr("x", function(d) {
//            return d.labelOffset;
//        })
//        .attr("dy", -5)
//        .style("fill", function(d, i) {
//            return d3.lab(z(i)).darker();
//        })
//        .append("textPath")
//        .attr("class", "textpath")
//        .attr("xlink:href", function(d, i) {
//            return "#path-" + i;
//        })
//        .text(function(d) {
//            return d.name;
//        });
//
//    // CIE76 per https://en.wikipedia.org/wiki/Color_difference#CIE76
//    // Not as good as CIEDE2000 but a lot easier to implement.
//    function delta(a, b) {
//        var dl = (a = d3.lab(a)).l - (b = d3.lab(b)).l, da = a.a - b.a, db = a.b - b.b;
//        return Math.sqrt(dl * dl + da * da + db * db);
//    }
//})

//monotoneInterpolation
$(function(){
    var data = [
        [new Date(2001, 0, 1), 1],
        [new Date(2002, 0, 1), 2],
        [new Date(2003, 0, 1), 2],
        [new Date(2004, 0, 1), 3],
        [new Date(2005, 0, 1), 4],
        [new Date(2006, 0, 1), 5]
    ];

    var margin = {top: 20, right: 30, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.time.scale()
        .domain([new Date(2001, 0, 1), new Date(2006, 0, 1)])
        .range([0, width]);

    var y = d3.scale.linear()
        .domain([0, 6])
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var line = d3.svg.line()
        .interpolate("monotone")
        .x(function(d) {
            return x(d[0]);
        })
        .y(function(d) {
            return y(d[1]);
        });

    var svg = d3.select("#monotoneInterpolation").append("svg")
        .datum(data)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis);

    svg.append("path")
        .attr("class", "line")
        .attr("d", line);

    svg.selectAll(".dot")
        .data(data)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("cx", line.x())
        .attr("cy", line.y())
        .attr("r", 3.5);
})

