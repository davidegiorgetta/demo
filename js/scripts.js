Marquee3k.init();

jQuery(function(){
    jQuery('.cover-images').slick({
        speed: 10000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true
    });
});

jQuery(".archive-button").click(function() {
    jQuery("body").addClass("section-archive-active");
});

jQuery(".about-button").click(function() {
    jQuery("body").addClass("section-about-active");
});

jQuery(".back-button").click(function() {
    jQuery("body").removeClass("section-archive-active");
    jQuery("body").removeClass("section-about-active");
});