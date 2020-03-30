// function ibg(){
//     let ibg=document.querySelectorAll(".ibg");
//     for (var i = 0; i < ibg.length; i++) {
//         if(ibg[i].querySelector('img')){
//         ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
//         }
//     }
// }
// ibg();


$(document).ready(function(){function ibg(){

    $.each($('.ibg'), function(index, val) {
    if($(this).find('img').length>0){
    $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
    }
    });
    }
    
    ibg();
    $('.icon-menu').click(function(event) {
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
        $(this).toggleClass('fixed');
        $('.header__logo').toggleClass('fixed');
    });

    $('.slider__body').slick({
        // autoplay:true,
        dots:true,
        // arrows:false,
        accessibility: false,
        slidesToShow:1,
        speed:1000,
        autoplaySpeed:3000,
        adaptiveHeight: true,
        nextArrow:'<button type="button" class="slick-next"></button>',
        prevArrow:'<button type="button" class="slick-prev"></button>',
        responsive:[{
            breakpoint: 768,
            settings: {}
        }]
    });
})