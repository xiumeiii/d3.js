$(function(){
    force();
    $('.force').addClass("active");
    $('.force li a').click(function(){
        $("svg").remove();
        switch($(this).attr("id")){
            case "href-force":
                force();
                break;
        }
    });
})

var force = function(){
    var h=600;
    var w=600;
    // 颜色函数
    var colors=d3.scale.category20()//创建序数比例尺和包括20中颜色的输出范围

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
        .start();//设置生效

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
    nodes.append("text")
        .attr("x", function(d, i, nodes) { return d.x;})
        .attr("y", function(d, i, nodes) { return d.y;})
        .text(function(d) { return d; });
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

        //节点
        nodes.attr("cx",function(d){
                return d.x;
            })
            .attr("cy",function(d){
                return d.y;
            });

    })
}