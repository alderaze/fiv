$(function () {

    'use strict';

    $(".bar i:first-of-type").on('click', function () {

        $(this).fadeOut();
        $(".bar i:last-of-type").fadeIn()
        $(".navbar ul").addClass("active");
        $(".navbar hr").fadeIn();
        $(".over").fadeIn();
        $(".navbar h1 i").css({

            backgroundColor:"#fff",
            color:"hsl(229, 31%, 21%)"
        });
        $(".navbar h1").css("color","#fff")

    })
    $(".bar i:last-of-type").on('click', function () {

        $(this).fadeOut();
        $(".navbar hr").fadeOut();
        $(".navbar ul").addClass("active");
        $(".bar i:first-of-type").fadeIn();
        $(".navbar ul").removeClass("active");
        $(this).fadeOut();
        $(".over").fadeOut();
        $(".navbar h1 i").css({

            backgroundColor:"hsl(231, 69%, 60%)",
            color:"#fff"
        });
       

    });

    $(".over").height($(window).height());


    // start down slider

    $(".collap .item .down2 i").on("click",function () {

        if ($(this).hasClass("fa-angle-right")){

            $(this).removeClass("fa-angle-right");
            $(this).addClass("fa-angle-down");

        }
        else{
            $(this).removeClass("fa-angle-down");
            $(this).addClass("fa-angle-right");
           
        }
        $($(this).data("toggel")).slideToggle();

    });

    $(".collap .item .down2 button").on("click",function () {
    $($(this).data("toggel")).slideToggle();

    });

    // end down slider

    // navbar 
    $(".navbar .item li").on("click", function () {

        $("html ,body").animate({
            scrollTop:$($(this).data("scroll")).offset().top
        },1000)

        console.log()
    })

 

});