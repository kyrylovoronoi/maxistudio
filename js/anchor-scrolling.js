(function () {

    //Плавный скролл по якорям
    $("a[href^='#']").on("click", function () {
        var elementClick = $(this).attr("href");
        var elementDestination = $(elementClick).offset().top;
        $("body").animate({ scrollTop: elementDestination }, 1000);
        return false;
    });

})();