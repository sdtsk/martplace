$(function(){
    
    $('.products__slider').slick({
        prevArrow: '<button class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="slick-prev"><span class="lnr lnr-chevron-right"></span></button>'
    });

    var mixer = mixitup('.new-products__box');
    
    $('.new-products__title-filter').on('click', function(){
        $('.new-products__title-drop-down').slideToggle();
    });

});