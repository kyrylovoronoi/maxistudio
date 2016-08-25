(function () {
    //$(document).ready(function () {
    //$(window).width();   // returns width of browser viewport
    //$(document).width(); // returns width of HTML document

    //РАЗМЕР ПЕРВОГО СЕКТОРА
    $(window).on('load resize', windowSize);
    function windowSize() {
        var winHeight = $(window).height();
        if (winHeight <= 700)
        {
            $(".section1").css({ "height": "" });
        }
        else
        {
            $(".section1").css({ "height": "100vh" });
        }
    }

    //SLIDERS
    $('.sec5__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        dots: true
    });

    $('.sec9__carousel').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    //BUTTON UP
    $('.sec12__up').click(function () {
        $("body").animate({ scrollTop: 0 }, 2000);
        return false;
    });

    $("a[href^='#']").on("click", function () {
        var elementClick = $(this).attr("href");
        var elementDestination = $(elementClick).offset().top;
        $("body").animate({ scrollTop: elementDestination }, 1000);
        return false;
    });


    //VALIDATION FORM
    var name = $(".input_text"),
        email = $(".input_email"),
        phone = $(".input_phone");

    name.on("blur", function () { checkInput(); });
    email.on("blur", function () { checkInput(); });
    phone.on("blur", function () { checkInput(); });
    phone.on("input", function () { checkPhone(); });

    function checkInput(event) {
        event = event || window.event;

        if (event.currentTarget.type == "email" && isValidEmail(event.currentTarget.value))
        {
            $(event.currentTarget).css({ "border-color": "rgb(0,241,73)" });
        }
        else if ((event.currentTarget.type == "text" || event.currentTarget.type == "tel") && event.currentTarget.value != "")
        {
            $(event.currentTarget).css({ "border-color": "rgb(0,241,73)" });
        }
        else
        {
            $(event.currentTarget).css({ "border-color": "rgb(243,66,53)" });
        }
    };

    function checkPhone(event) {
        event = event || window.event;

        if (event.currentTarget.type == "tel" && !isValidPhone(event.currentTarget.value))
        {
            $(event.currentTarget).val($(event.currentTarget).val().slice(0, -1));
        }
    };

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^.+@.+$/i);
        return pattern.test(emailAddress);
    };

    function isValidPhone(phoneNumber) {
        var pattern = new RegExp(/^\d+$/);
        return pattern.test(phoneNumber);
    };

    //PARALLAX
    var winPosition = 0;
    var sec11Position = $('.section11').offset().top;

    $(window).scroll(function () {
        winPosition = $(this).scrollTop();
        $(".sec1__parallax").css({ "transform": "translate(0%, -" + winPosition / 10 + "%)" });
        //$(".section11").css({ "background-position": "50% " + (90 - (sec11Position - winPosition) / 20) + "%" });
        $(".section11").css({ "background-position": "50% " + ((sec11Position - winPosition) / 15) + "%" });
    });

    //LIGHTBOX
    $("a.blog_pic").fancybox({
        'overlayShow': true,
        'transitionIn': 'elastic',
        'transitionOut': 'elastic',
        'hideOnContentClick': true,
        'centerOnScroll': true
    });

    //ACCORDION

    for (var i = 0; i < $(".accordion").find(".accordion__text_wrap").length; i++)
    {
        var text = $(".accordion").find(".accordion__text_wrap").eq(i);
        var h = $(text).height();
        $(text).attr("data-height", h);
        $(text).height(0);
    }

    $(".accordion__input").on("click", function () {
        var h = $(this).parent().find(".accordion__text_wrap").attr("data-height");
        if ($(this).is(':checked'))
        {
            $(this).parent().find(".accordion__text_wrap").css({ "height": h, "transition": "height 1s ease-out" });
        }
        else
        {
            $(this).parent().find(".accordion__text_wrap").css({ "height": 0, "transition": "height 1s ease-out" });
        }
    });

})();
