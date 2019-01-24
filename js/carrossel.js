$(document).ready(function () {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        speed: 750,
        slidesToShow: 1,
        slidesToScroll: 1,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2500,
        adaptiveHeight: true,
        appendArrows: '',
    });
});