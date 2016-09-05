// $(function(){
//     var canvas = document.querySelector("canvas"),
//         context = canvas.getContext("2d");
//
//     var margin = {top: 20, right: 20, bottom: 30, left: 40},
//         width = canvas.width - margin.left - margin.right,
//         height = canvas.height - margin.top - margin.bottom;
//
//     var x = d3.scaleBand()
//         .rangeRound([0, width])
//         .padding(0.1);
//
//     var y = d3.scaleLinear()
//         .rangeRound([height, 0]);
//
//     context.translate(margin.left, margin.top);
//
//     d3.tsv("./../data/canvasBar.tsv", function(d) {
//         d.frequency = +d.frequency;
//         return d;
//     }, function(error, data) {
//         if (error) throw error;
//
//         x.domain(data.map(function(d) { return d.letter; }));
//         y.domain([0, d3.max(data, function(d) { return d.frequency; })]);
//
//         var yTickCount = 10,
//             yTicks = y.ticks(yTickCount),
//             yTickFormat = y.tickFormat(yTickCount, "%");
//
//         context.beginPath();
//         x.domain().forEach(function(d) {
//             context.moveTo(x(d) + x.bandwidth() / 2, height);
//             context.lineTo(x(d) + x.bandwidth() / 2, height + 6);
//         });
//         context.strokeStyle = "black";
//         context.stroke();
//
//         context.textAlign = "center";
//         context.textBaseline = "top";
//         x.domain().forEach(function(d) {
//             context.fillText(d, x(d) + x.bandwidth() / 2, height + 6);
//         });
//
//         context.beginPath();
//         yTicks.forEach(function(d) {
//             context.moveTo(0, y(d) + 0.5);
//             context.lineTo(-6, y(d) + 0.5);
//         });
//         context.strokeStyle = "black";
//         context.stroke();
//
//         context.textAlign = "right";
//         context.textBaseline = "middle";
//         yTicks.forEach(function(d) {
//             context.fillText(yTickFormat(d), -9, y(d));
//         });
//
//         context.beginPath();
//         context.moveTo(-6.5, 0 + 0.5);
//         context.lineTo(0.5, 0 + 0.5);
//         context.lineTo(0.5, height + 0.5);
//         context.lineTo(-6.5, height + 0.5);
//         context.strokeStyle = "black";
//         context.stroke();
//
//         context.save();
//         context.rotate(-Math.PI / 2);
//         context.textAlign = "right";
//         context.textBaseline = "top";
//         context.font = "bold 10px sans-serif";
//         context.fillText("Frequency", -10, 10);
//         context.restore();
//
//         context.fillStyle = "steelblue";
//         data.forEach(function(d) {
//             context.fillRect(x(d.letter), y(d.frequency), x.bandwidth(), height - y(d.frequency));
//         });
//     });
// })

// $(function(){
//     var margin = {top:80,right:80,bottom:80,left:80},
//         width = 600- margin.left - margin.right,
//         height = 400 - margin.top - margin.bottom;
//     var x = d3.scaleBand()
//         .rangeRound([0,width])
//         .padding(0.1);
//     var y = d3.scaleLinear()
//         .rangeRound([height,0]);
//     // var xAxis = d3.svg.axis().scale(x).orient("bottom");
//     var xAxis = d3.axisBottom().scale(x);
//     var yAxis = d3.axisLeft().scale(y);
//
//     var svg = d3.select("#LineDemo")
//         .attr("width",width + margin.left + margin.right)
//         .attr("height",height + margin.top + margin.bottom)
//         .append("g")
//         .attr("class","graph")
//         .attr("tranform","translate(" + margin.left + "," + margin.top + ")")
//
//     d3.tsv("./../data/canvasBar.tsv",function(data){
//         x.domain(data.map(function(d) {
//             return d.letter;
//         }));
//         y.domain([0,d3.max(data,type,function(d){
//             return d.frequency;
//         })]);
//         svg.append("g")
//         .attr("class","x axis")
//         .attr("transform","translate(0,"+ height+")")
//         .call(xAxis);
//
//         svg.append("g").attr("transform","translate(0,0)")
//         .call(yAxis);
//         svg = svg.selectAll(".bar").data(data).enter();
//         svg.append("rect")
//         .attr("x",function(d){
//             return x(d.letter);
//         })
//         .attr("width",x.rangeRound()/2)
//         .attr("y",function(d){
//             return y0(d.frequency);
//         })
//         .attr("height",function(d,i,j){
//             return height - y(d.frequency);
//         });
//         function type(d){
//         d.frequency = +d.frequency;
//         return d;
//     }
//     })
// })


//d3-3  wapping Long Labels
$(function(){
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

    var svg = d3.select("#wappingLongLabels").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.tsv("./../data/wappingLongLabels.tsv", type, function(error, data) {
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

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        svg.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d) { return x(d.name); })
            .attr("width", x.rangeBand())
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
                lineHeight = 1.1, // ems
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
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
    }

    function type(d) {
        d.value = +d.value;
        return d;
    }

})