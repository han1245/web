$(document).ready(function(){
   $(".partner").slick({
       autoplay:true,
       autoplaySpeed: 2000,
       arrows: false,
   });
    /*
    $(".category_menu > ul >li").click(function(){
       $(".category_menu > ul >li").removeClass("on move");
        $(this).addClass("on move");
        var check=$(this).index()-1;
        $(".category >.cont_wrap>.cont_box").removeClass("menu");
        $(".category >.cont_wrap>.cont_box").eq(check).addClass("menu");
        var topheight= document.querySelector("#header").offsetHeight;
        var location = document.querySelector(".menu").offsetTop;
        $(".move").click(function(){
            window.scrollTo({top:location - topheight, behavior: 'smooth'});    
        });
           return false;
        });
    */
    $(".info>span>i").click(function(){
       $(this).css({Color:"red"}); 
        return false;
    });
    
    var swiper = new Swiper('.category', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
}); //end

