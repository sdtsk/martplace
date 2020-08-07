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

    $(".statistics-rating").rateYo({
        starWidth: "16px",
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

    $('.tabs-wrapper .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.tabs-wrapper').find('.tab-item').removeClass('active-tab').hide();
            $('.tabs-wrapper .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
        });

    $('.favorites-filter').on('click', function(){
        $('.favorites-filter__drop-down').slideToggle();
    });


    $('.favorites-list').on('click', function(){
        $('.new-products__item').addClass('list'),
        $('.favorites-list').addClass('current'),
        $('.favorites-grid').removeClass('current');
    });

    $('.favorites-grid').on('click', function(){
        $('.new-products__item').removeClass('list'),
        $('.favorites-list').removeClass('current'),
        $('.favorites-grid').addClass('current');
    });

    $('.lnr-question-circle.one').on('click', function(){
        $('.plan__item-cloud.cloud-one').toggle(),
        $('.lnr-question-circle::after').toggle();
    });

    $('.lnr-question-circle.two').on('click', function(){
        $('.plan__item-cloud.cloud-two').toggle();
    });

    $('.lnr-question-circle.three').on('click', function(){
        $('.plan__item-cloud.cloud-three').toggle();
    });

});

if ($('.favorites__item-box').length) {
    var mixer = mixitup('.favorites__item-box');
};

if ($('.new-products__box').length) {
    var mixer = mixitup('.new-products__box');
};
