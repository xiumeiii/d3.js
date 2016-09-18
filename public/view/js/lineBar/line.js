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

$(function(){
    var superscript = "⁰¹²³⁴⁵⁶⁷⁸⁹",
        formatPower = function(d) { return (d + "").split("").map(function(c) { return superscript[c]; }).join(""); };

    var margin = {top: 40.5, right: 40.5, bottom: 50.5, left: 60.5},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.linear()
        .domain([0, 100])
        .range([0, width]);

    var y = d3.scale.log()
        .base(Math.E)
        .domain([Math.exp(0), Math.exp(9)])
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickFormat(function(d) { return "e" + formatPower(Math.round(Math.log(d))); });

    var line = d3.svg.line()
        .x(function(d) { return x(d[0]); })
        .y(function(d) { return y(d[1]); });

    var svg = d3.select("#naturalLogScale").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
        .attr("class", "axis axis--y")
        .attr("transform", "translate(0,0)")
        .call(yAxis);

    svg.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + (height) + ")")
        .call(xAxis);

    svg.append("path")
        .datum(d3.range(100).map(function(x) { return [x, x * x + x + 1]; }))
        .attr("class", "line")
        .attr("d", line);
})