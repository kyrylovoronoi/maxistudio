//$(document).ready(function () {
    $(window).scroll(function () {
        if (!$('.top_bar').hasClass("fixed") && ($(window).scrollTop() > $('.top_bar').offset().top)) {
            $('.top_bar').addClass("fixed").data("top", $('.top_bar').offset().top);
        } else if ($('.top_bar').hasClass("fixed") && ($(window).scrollTop() < $('.top_bar').data("top"))) {
            $('.top_bar').removeClass("fixed");
        }
    });
//});