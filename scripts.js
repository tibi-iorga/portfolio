$('.slider-nav').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 arrows: false,
 fade: true,
 asNavFor: '.slider'
});
$('.slider').slick({

 asNavFor: '.slider-nav',
 dots: true,
 centerMode: true,
 focusOnSelect: true
});
