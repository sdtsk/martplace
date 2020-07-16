$(function(){

    $(".products__rating").rateYo({
        starWidth: "15px",
        ratedFill: "#ffc000",
        rating: 4.5,
        readOnly: true,
        fullStar: false
    });

    $(".new-products__item-bottom-rating").rateYo({
        starWidth: "12px",
        ratedFill: "#ffc000",
        rating: 4.5,
        readOnly: true
    });

    $(".followers__item-bottom-rating").rateYo({
        starWidth: "12px",
        ratedFill: "#ffc000",
        rating: 4.5,
        readOnly: true
    });
    
    $('.products__slider').slick({
        appendArrows: $('.products__title-btn'),
        prevArrow: '<button class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="slick-prev"><span class="lnr lnr-chevron-right"></span></button>'
    });

    $('.followers__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        appendArrows: $('.followers__title-btn'),
        prevArrow: '<button class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
        nextArrow: '<button class="slick-prev"><span class="lnr lnr-chevron-right"></span></button>'
    });

    var mixer = mixitup('.new-products__box');
    
    $('.new-products__title-filter').on('click', function(){
        $('.new-products__title-drop-down').slideToggle();
    });

});