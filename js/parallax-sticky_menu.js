(function () {
    //var documentHeight = $(".wrapper").height();
    var windowHeight = $(".wrap_wide__section1").height();
    //var windowWidth = $(".wrap_wide__section1").width();
    //var menuPosition = $('.wrap_wide__header').offset().top;
    var footerHeight = $(".wrap_wide__footer").height();
    var sec5Position = $('.wrap_wide__section5').offset().top;
    var winPosition = 0;
    //var sec5Height =
    $(".wrap_wide__section5").css({ "height": windowHeight - footerHeight });

    $(window).resize(function () {
        //menuPosition = $('.wrap_wide__header').offset().top;
        //windowWidth = $(".wrap_wide__section1").width();
    });

    $(window).scroll(function () {

        //параметр прокрутки страницы в px
        winPosition = $(this).scrollTop();

        //STICKY MENU
        if (winPosition === 0)
        {
            $(".wrap_wide__header").removeClass("wrap_wide__header_fixed");
            $(".header_logo").removeClass("header_logo_fixed");
        }
        else
        {
            $(".wrap_wide__header").addClass('wrap_wide__header_fixed');
            $(".header_logo").addClass('header_logo_fixed');
        }

        //PARALLAX
        //$(".section1__banner_text").css({ "opacity" : 4 / (winPosition / 10)});
        $(".wrap_wide__section1").css({ "background-position": "50% " + (100 - winPosition / 8) + "%" });
        $(".section1__banner_text").css({ "transform": "translate(0%, -" + winPosition / 6 + "%)" });

        $(".wrap_wide__section5").css({ "background-position": "50% " + (100 - (sec5Position - winPosition) / 10) + "%" });
        $(".section5").css({ "transform": "translate(0%, " + (sec5Position - winPosition) / 5 + "%)" });
    });
})();


//var a = "" && false;
//alert(a);

//var b = false && undefined && "вап";
////alert(b);

////var с = {};
////c.pr = 5;
////alert(c);

//if (44)
//    alert("11111111111111");