(function () {

    // Cache selectors
    var lastId,
      menu = $(".header_menu"),
      menuHeight = menu.outerHeight() + 1,
      // All list items
      menuItems = menu.find("a"),
      // Anchors corresponding to menu items
      scrollItems = menuItems.map(function () {
          var item = $($(this).attr("href"));
          if (item.length)
          {
              return item;
          }
      });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.on("click", function (e) {
        var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top - menuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1000);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + menuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id)
        {
            lastId = id;
            // Set/remove active class
            menuItems
              .parent().removeClass("active")
              .end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });

})();