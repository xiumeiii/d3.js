$(function(){
    $('.dropdown li a').click(function(){
        $(this).parents(".dropdown").addClass("active").siblings().removeClass("active");
    });
})