(function () {

    //Плавный скролл по якорям
    $("a[href^='#']").on("click", function (e) {
        var elementClick = $(this).attr("href");
        var elementDestination = (elementClick === "#" ? 0 : $(elementClick).offset().top);
        $("body").stop().animate({ scrollTop: elementDestination }, 1000);
        e.preventDefault();
        return false;
    });

    // Cache selectors
    var lastId,
      //menuHeight = $(".header_menu").outerHeight(),
      // все ссылки меню, у которых есть атрибут href
        menuItems = $(".header_menu").find("a")
          .map(function () {
              var item = $($(this).attr("href"));
              if (item.length)
                    { return item; }
          });
    // Bind to scroll
    $(window).scroll(function () {

        // получаем текущую позицию на документе при скроле
        var scrollPositionNow = $(this).scrollTop(); //+ menuHeight + 1;

        // получаем элемент меню при текущем положении скроллинга
        var cur = menuItems.map(function () {
            if (scrollPositionNow >= $(this).offset().top)
                console.log(cur);
                return this;
        });

        // получаем id текущего элемента
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;

            // set/remove active class
            menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });

})();