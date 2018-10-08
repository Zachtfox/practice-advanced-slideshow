$(document).ready(function(){

    "use strict";
    var nextSlide = $("#slides img:first-child");
    var nextCaption; 
    var nextSlideSource;

    var runSlideShow = function(){
        $("#caption").fadeOut(1500);
        $("#slide").fadeOut(1500, function(){
            if(nextSlide.next().length === 0){
                 nextSlide = $("#slides img:first-child");
            }else{
                nextSlide = nextSlide.next();
            }
            
            // nextSlideSource ="../" + nextSlide.attr("src");
            nextSlideSource = nextSlide.attr("src");
            nextCaption = nextSlide.attr("alt");

            $("#slide").attr("src", nextSlideSource).fadeIn(1500);
            $("#caption").text(nextCaption).fadeIn(1500);


        });

    };

    var timer1 =setInterval(runSlideShow, 4000);

    $("#slide").click(function(){
        if(timer1 !== null){
            clearInterval(timer1);
            timer1 = null;
        } else{
            timer1 = setInterval(runSlideShow, 4000);
        }

    });

});