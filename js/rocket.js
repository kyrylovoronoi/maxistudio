(function () {
    var documentHeight = $(".wrapper").height();
    var sec1Height = $(".wrap_wide__section1").height();

    var r = $(".rocket");
    r.css({ "bottom": -(documentHeight - sec1Height) + "px", "right": 0 });


    $(window).on("load", function () {
        var time = parseInt(r.css('bottom'));
        r.animate({ "bottom": -time + "px" }, -time*10, 'linear');
    });
   

})();