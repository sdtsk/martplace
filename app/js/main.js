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

    $(".category__page-products__item-box-rating").rateYo({
        starWidth: "12px",
        ratedFill: "#ffc000",
        rating: 4.5,
        readOnly: true,
        spacing: '3px'
    });

    $(".category__page-products__item-info-rating").rateYo({
        starWidth: "14px",
        ratedFill: "#ffc000",
        rating: 4.5,
        readOnly: true,
        spacing: '5px'
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
    
    $('.reviews__slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false
    });
  
    $('.title-categories').on('click', function(){
        $('.list-categories').slideToggle();
    });

    $('.title-filter').on('click', function(){
        $('.list-filter').slideToggle();
    });

    $('.title-rangeslider').on('click', function(){
        $('.form-rangeslider').slideToggle();
    });

    $('.new-products__title-filter').on('click', function(){
        $('.new-products__title-drop-down').slideToggle();
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 320,
        from: 30,
        to: 300,
        prefix: "$",
        hide_min_max: true
    });

    $('.icon-th-list').on('click', function(){
        $('.category__page-products__item').addClass('list'),
        $('.icon-th-list').addClass('current'),
        $('.icon-th').removeClass('current');
    });

    $('.icon-th').on('click', function(){
        $('.category__page-products__item').removeClass('list'),
        $('.icon-th-list').removeClass('current'),
        $('.icon-th').addClass('current');
    });



    var mixer = mixitup('.new-products__box');

});