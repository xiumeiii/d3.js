$(function(){
    PrimAlgorithmV();
    $('.play').addClass("active");
    $('.play li a').click(function(){
        $("svg").remove();
        switch($(this).attr("id")){
            case "href-href-PrimAlgorithmV":
                PrimAlgorithmV();
                break;

        }
    });
})


