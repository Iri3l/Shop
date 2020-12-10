/** First Slider */

$(".slider-one")
.not(".slick-initialized")
.slick({
    autoplay:true,
    autoplaySpeed:3000,
    dots:true,
    prevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});


/** Second Slider */

$(".slider-two")
.not(".slick-initialized")
.slick({
    prevArrow:".site-slider-two .prev",
    nextArrow:".site-slider-two .next",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed:3000,
});


/* Third slider */

$(".slider-three")
.not(".slick-initialized")
.slick({
    prevArrow:".site-slider-three .prev",
    nextArrow:".site-slider-three .next",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed:3000,
    Infinite: false,
});


/* Fourth slider */

$(".slider-four")
.not(".slick-initialized")
.slick({
    prevArrow:".site-slider-four .prev",
    nextArrow:".site-slider-four .next",
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed:3000,
    Infinite: false,
});

/* Fifth slider */

$(".slider-five")
.not(".slick-initialized")
.slick({
    prevArrow:".slider-brand .prev",
    nextArrow:".slider-brand .next",
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed:3000,
    Infinite: true,
});

/* Sixth slider */

$(".slider-six")
.not(".slick-initialized")
.slick({
    prevArrow:"",
    nextArrow:"",
    autoplaySpeed:3000,
    Infinite: true,
    autoplay:true,
    dots:true,
});