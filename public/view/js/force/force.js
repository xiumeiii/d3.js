$(function(){
    force();
    $('.force').addClass("active");
    $('.force li a').click(function(){
        $("svg").remove();
        switch($(this).attr("id")){
            case "href-force":
                force();
                break;
            case "href-forceWithText":
                forceWithText();
                break;
            case "href-curvedArrowForce":
                curvedArrowForce();
                break;
            case "href-molecularFormula":
                molecularFormula();
                break;

        }
    });
})

var force = function(){
    var h=600;
    var w=600;
    // 颜色函数
    var colors=d3.scale.category20()//创建序数比例尺和包括20中颜色的输出范围
    const colorMap = d3.interpolateRgb(//插补两个RGB颜色值
        d3.rgb('#d6e685'),
        d3.rgb('#1e6823')
    )
    //(1)定义节点和联系对象数组
    var dataset={
        nodes:[//节点
            { name:"Adam"},
            { name:"Bob"},
            { name:"Carride"},
            { name:"Donovan"},
            { name:"Edward"},
            { name:"Felicity"},
            { name:"George"},
            { name:"Hannah"},
            { name:"Iris"},
            { name:"Jerry"}
        ],
        edges:[//边
            { source:0,target:1,weight:1,color:1},
            { source:0,target:2,weight:3,color:4},
            { source:0,target:3,weight:4,color:6},
            { source:0,target:4,weight:6,color:65},
            { source:1,target:5,weight:3,color:76},
            { source:2,target:5,weight:8,color:879},
            { source:2,target:5,weight:7,color:989},
            { source:3,target:4,weight:9,color:643},
            { source:5,target:8,weight:1,color:54},
            { source:5,target:9,weight:3,color:54},
            { source:6,target:7,weight:4,color:45},
            { source:7,target:8,weight:0,color:43},
            { source:2,target:8,weight:8,color:243},
            { source:3,target:8,weight:1,color:43},
            { source:5,target:8,weight:5,color:13},
            { source:6,target:8,weight:3,color:351},
            { source:8,target:9,weight:4,color:1}
        ]
    };

    //(2)转化数据为适合生成力导向图的对象数组
    // .nodes(dataset.nodes),.links(dataset.edges)加载边数据 加载数据的时候，D3就为我们生成了节点的坐标值。所以d.source.x d.source.y 和 d.target.x d.target.y就是一条边的端点坐标
    var force=d3.layout.force()
        .nodes(dataset.nodes)//加载节点数据
        .links(dataset.edges)//加载边数据
        .size([w,h])//设置有效空间的大小
        .linkDistance(100)//连线的长度
        .charge(-200)//负电荷量，相互排斥设置的负值越大越排斥
        .start();//设置生效,当节点变化时启动或者重启模拟。

    var svg=d3.select("#force")
        .append("svg")
        .attr("width",w)
        .attr("height",h);

    //(3)创建作为连线的svg直线
    var edges=svg.selectAll("line")
        .data(dataset.edges)
        .enter()
        .append("line")
        .style("stroke",function(d){//  设置线的颜色
            return colors(d.color);
            //return colorMap(d.color/100);
        })
        .style("stroke-width",function(d,i){//设置线的宽度
            //return d.weight;
            return 5;
        });

    //(4) 创建作为连线的svg圆形
    var nodes=svg.selectAll("circle")
        .data(dataset.nodes)
        .enter()
        .append("circle")
        .attr("r",function(d){//设置圆点的半径，圆点的度越大weight属性值越大，可以对其做一点数学变换
            return Math.log(d.weight)*10;
            //return Math.log(2)*10;
        })
        .style("fill",function(d){
            return colors(d.weight*d.weight*d.weight);
        })
        .call(force.drag)
        .on("mouseover",function(d){
            d3.select(this).style('fill','rgb(255,0,0)');
        })
        .on("mouseout",function(d){
            d3.select(this).style('fill',colors(d.weight*d.weight*d.weight));
        });//可以拖动
    //dy表示Y轴对圆心的偏移量
    //nodes.append("text")
    //    .attr("x", 12)
    //    .attr("dy", ".35em")
    //    .text(function(d) {
    //        return d.name;
    //    });

    //(5)打点更新，没有的话就显示不出来了
    //tick:运行布局模拟的一步。
    force.on("tick",function(){
        //边
        edges.attr("x1",function(d){
                return  d.source.x;
            })
            .attr("y1",function(d){
                return  d.source.y;
            })
            .attr("x2",function(d){
                return  d.target.x;
            })
            .attr("y2",function(d){
                return  d.target.y;
            });

        //节点,cx、cy圆心x和y坐标
        nodes.attr("cx",function(d){
                return d.x;
            })
            .attr("cy",function(d){
                return d.y;
            });
    })
}

var forceWithText = function(){
    //(1)链接数组
    var links = [
        {source: "Microsoft", target: "Amazon", type: "licensing"    ,weight:1,color:1},
        {source: "Microsoft", target: "HTC", type: "licensing"       ,weight:3,color:4},
        {source: "Samsung", target: "Apple", type: "suit"            ,weight:4,color:6},
        {source: "Motorola", target: "Apple", type: "suit"           ,weight:6,color:65},
        {source: "Nokia", target: "Apple", type: "resolved"          ,weight:3,color:76},
        {source: "HTC", target: "Apple", type: "suit"                ,weight:8,color:879},
        {source: "Kodak", target: "Apple", type: "suit"              ,weight:7,color:989},
        {source: "Microsoft", target: "Barnes & Noble", type: "suit" ,weight:9,color:643},
        {source: "Microsoft", target: "Foxconn", type: "suit"        ,weight:1,color:54},
        {source: "Oracle", target: "Google", type: "suit"            ,weight:3,color:54},
        {source: "Apple", target: "HTC", type: "suit"                ,weight:4,color:45},
        {source: "Microsoft", target: "Inventec", type: "suit"       ,weight:0,color:43},
        {source: "Samsung", target: "Kodak", type: "resolved"        ,weight:8,color:243},
        {source: "LG", target: "Kodak", type: "resolved"             ,weight:1,color:43},
        {source: "RIM", target: "Kodak", type: "suit"                ,weight:5,color:13},
        {source: "Sony", target: "LG", type: "suit"                  ,weight:3,color:351},
        {source: "Kodak", target: "LG", type: "resolved"             ,weight:4,color:1},
        {source: "Apple", target: "Nokia", type: "resolved"          ,weight:1,color:1},
        {source: "Qualcomm", target: "Nokia", type: "resolved"       ,weight:3,color:4},
        {source: "Apple", target: "Motorola", type: "suit"           ,weight:4,color:6},
        {source: "Microsoft", target: "Motorola", type: "suit"       ,weight:6,color:65},
        {source: "Motorola", target: "Microsoft", type: "suit"       ,weight:3,color:76},
        {source: "Huawei", target: "ZTE", type: "suit"               ,weight:8,color:879},
        {source: "Ericsson", target: "ZTE", type: "suit"             ,weight:7,color:989},
        {source: "Kodak", target: "Samsung", type: "resolved"        ,weight:9,color:643},
        {source: "Apple", target: "Samsung", type: "suit"            ,weight:1,color:54},
        {source: "Kodak", target: "RIM", type: "suit"                ,weight:3,color:54},
        {source: "Nokia", target: "Qualcomm", type: "suit"           ,weight:4,color:45}
    ];

    var nodes = {};

    //(2)从链接中分离出不同的节点
    //一个小问题：节点的weight属性怎么产生的？
    links.forEach(function(link) {  //思路就是：在连接中遍历链接，节点数组有了这个链接的源节点就把链接指向这个节点。没有的话把链接上的节点加到链接数组指定名称name属性，并把链接指向这个节点
        link.source = nodes[link.source] //link.sourc就是节点值比如Apple
            || (nodes[link.source] = {name: link.source});//(填加节点数据)

        link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
    });

    var width = 960,
        height = 500;

    var force = d3.layout.force()
        .nodes(d3.values(nodes))//d3.values(object):返回一个包含指定对象(关联数组) 属性值的数组。返回数组的顺序未定义。{object}转化成[array]
        .links(links)
        .size([width, height])
        .linkDistance(100)
        .charge(-300)
        .on("tick", tick)
        .start();

    var svg = d3.select("#forceWithText").append("svg")
        .attr("width", width)
        .attr("height", height);

    //(3)为链接添加线
    var link = svg.selectAll(".link")
        //.data(force.links())
        .data(links)
        .enter().append("line")
        .attr("class", "link");

    var colors=d3.scale.category20();

    link.style("stroke",function(d){//  设置线的颜色
            return colors(d.color);
        })
        .style("stroke-width",function(d,i){//设置线的宽度
            return d.weight;
        });
    //(4)为链接添加节点
    var node = svg.selectAll(".node")
        .data(force.nodes())
        .enter().append("g")
        .attr("class", "node")
        .on("mouseover", mouseover)
        .on("mouseout", mouseout)
        .call(force.drag);


    //设置圆点的半径，圆点的度越大weight属性值越大，可以对其做一点数学变换
    function  radius (d){
        if(!d.weight){//节点weight属性没有值初始化为1（一般就是叶子了）
            d.weight=2;
        }
        return Math.log(d.weight)*10 ? Math.log(d.weight)*10 : 5;
    }
    node.append("circle")
        .attr("r",function(d){  //设置圆点半径
            //console.log(d)
            return radius (d);
        })
        .style("fill",function(d){ //设置圆点的颜色
            return colors(d.weight*d.weight*d.weight);
        }) ;

    node.append("text")
        .attr("x", 12)
        .attr("dy", ".35em")
        .text(function(d) { return d.name; });

    //设置图片
    node.append("svg:image")
        .attr("class", "circle")
        .attr("xlink:href", ".././data/images/ooo.png")//xlink:href图片的来源链接， SVG 2以后直接用href
        .attr("x", "-8px")
        .attr("y", "-8px")
        .attr("r",function(d){  //设置圆点半径
            return 5;
        })
        .attr("width", "16px")
        .attr("height", "16px");
    //设置提示
    node.append("svg:title")
        .text(function(d) { return d.name; });

    function tick() {//打点更新坐标
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
    }

    function mouseover() {
        d3.select(this).select("circle").transition()
            .duration(750)
            .attr("r", function(d){  //设置圆点半径
                return radius (d)+10;
            }) ;
    }

    function mouseout() {
        d3.select(this).select("circle").transition()
            .duration(750)
            .attr("r", function(d){  //恢复圆点半径
                return radius (d);
            }) ;
    }
}


var curvedArrowForce = function(){
    var links = [
        {source: "Microsoft", target: "Amazon", type: "licensing"},
        {source: "Microsoft", target: "HTC", type: "licensing"},
        {source: "Samsung", target: "Apple", type: "suit"},
        {source: "Motorola", target: "Apple", type: "suit"},
        {source: "Nokia", target: "Apple", type: "resolved"},
        {source: "HTC", target: "Apple", type: "suit"},
        {source: "Kodak", target: "Apple", type: "suit"},
        {source: "Microsoft", target: "Barnes & Noble", type: "suit"},
        {source: "Microsoft", target: "Foxconn", type: "suit"},
        {source: "Oracle", target: "Google", type: "suit"},
        {source: "Apple", target: "HTC", type: "suit"},
        {source: "Microsoft", target: "Inventec", type: "suit"},
        {source: "Samsung", target: "Kodak", type: "resolved"},
        {source: "LG", target: "Kodak", type: "resolved"},
        {source: "RIM", target: "Kodak", type: "suit"},
        {source: "Sony", target: "LG", type: "suit"},
        {source: "Kodak", target: "LG", type: "resolved"},
        {source: "Apple", target: "Nokia", type: "resolved"},
        {source: "Qualcomm", target: "Nokia", type: "resolved"},
        {source: "Apple", target: "Motorola", type: "suit"},
        {source: "Microsoft", target: "Motorola", type: "suit"},
        {source: "Motorola", target: "Microsoft", type: "suit"},
        {source: "Huawei", target: "ZTE", type: "suit"},
        {source: "Ericsson", target: "ZTE", type: "suit"},
        {source: "Kodak", target: "Samsung", type: "resolved"},
        {source: "Apple", target: "Samsung", type: "suit"},
        {source: "Kodak", target: "RIM", type: "suit"},
        {source: "Nokia", target: "Qualcomm", type: "suit"}
    ];

    var nodes = {};

    links.forEach(function(link) {
        link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
        link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
    });

    var w = 960,
        h = 500;

    var force = d3.layout.force()
        .nodes(d3.values(nodes))
        .links(links)
        .size([w, h])
        .linkDistance(60)
        .charge(-300)
        .on("tick", tick)
        .start();

    var svg = d3.select("#curvedArrowForce").append("svg:svg")
        .attr("width", w)
        .attr("height", h);

    //(1)创建箭头
    svg.append("svg:defs").selectAll("marker")
        .data(["suit", "licensing", "resolved"])
        .enter().append("svg:marker")
        .attr("id", String)
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 15)
        .attr("refY", -1.5)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("svg:path")
        .attr("d", "M0,-5L10,0L0,5");
    //(2)根据连线类型引用上面创建的标记
    var path = svg.append("svg:g").selectAll("path")
        .data(force.links())
        .enter().append("svg:path")
        .attr("class", function(d) { return "link " + d.type; })
        .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

    var circle = svg.append("svg:g").selectAll("circle")
        .data(force.nodes())
        .enter().append("svg:circle")
        .attr("r", 6)
        .call(force.drag);

    var text = svg.append("svg:g").selectAll("g")
        .data(force.nodes())
        .enter().append("svg:g");

    // A copy of the text with a thick white stroke for legibility.
    text.append("svg:text")
        .attr("x", 8)
        .attr("y", ".31em")
        .attr("class", "shadow")
        .text(function(d) { return d.name; });

    text.append("svg:text")
        .attr("x", 8)
        .attr("y", ".31em")
        .text(function(d) { return d.name; });

    // 使用椭圆弧路径段双向编码。
    function tick() {
    //(3)打点path格式是：Msource.x,source.yArr00,1target.x,target.y
        path.attr("d", function(d) {
            var dx = d.target.x - d.source.x,//增量
                dy = d.target.y - d.source.y,
                dr = Math.sqrt(dx * dx + dy * dy);
            return "M" + d.source.x + ","
                + d.source.y + "A" + dr + ","
                + dr + " 0 0,1 " + d.target.x + ","
                + d.target.y;
        });

        circle.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

        text.attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });
    }
}

var molecularFormula = function(){
    var width = 960,
        height = 500;

    var color = d3.scale.category20();
    //(1)平方根比例尺
    var radius = d3.scale.sqrt()
        .range([0, 6]);//值域

    var svg = d3.select("#molecularFormula").append("svg")
        .attr("width", width)
        .attr("height", height);

    var force = d3.layout.force()
        .size([width, height])
        .charge(-400)
        .linkDistance(function(d) {//(2)连线是两个圆半径之和+20那么长
            return radius(d.source.size) //数据源里的size就是半径
                + radius(d.target.size) + 20;
        });

    d3.json(".././data/force/molecularFormula.json", function(graph) {
    //d3.json("http://localhost:3000/data/force/molecularFormula.json", function(graph) {
        force
            .nodes(graph.nodes)
            .links(graph.links)
            .on("tick", tick)
            .start();

        var link = svg.selectAll(".link")
            .data(graph.links)
            .enter().append("g")
            .attr("class", "link");

        link.append("line")
            .style("stroke-width", function(d) { return (d.bond * 2 - 1) * 2 + "px"; });
        //(3)只要连线大于2就加一条分隔线
        //怎么添加多条分隔线呢？
        link.filter(function(d) {//基于数据过滤的选择。
            return d.bond > 1;
        }).append("line")
            .attr("class", "separator");//添加一条分隔线
        //常规的添加节点
        var node = svg.selectAll(".node")
            .data(graph.nodes)
            .enter().append("g")
            .attr("class", "node")
            .call(force.drag);
        //常规的添加圆点
        node.append("circle")
            .attr("r", function(d) {
                return radius(d.size); //(4)根据圆圈的种类的大小设置大小
            })
            .style("fill", function(d) {
                return color(d.atom); //根据圆圈的种类设置颜色
            });

        node.append("text")
            .attr("dy", ".35em")
            .attr("text-anchor", "middle")//在圆圈中加上数据
            .text(function(d) { return d.atom; });
    //常规的打点
        function tick() {
            link.selectAll("line")
                .attr("x1", function(d) { return d.source.x; })
                .attr("y1", function(d) { return d.source.y; })
                .attr("x2", function(d) { return d.target.x; })
                .attr("y2", function(d) { return d.target.y; });

            node.attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
        }
    });
}