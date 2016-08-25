(function () {

    var name = $("#form").children().eq(1);
    name.on("blur", function () {
        checkInput();
    });
    name.on("input", function () {
        checkInput();
    });

    var email = $("#form").children().eq(2);
    email.on("blur", function () {
        checkInput();
    });
    email.on("input", function () {
        checkInput();
    });

    var phone = $("#form").children().eq(3);
    phone.on("input", function () {
        checkInput2();
    });



    function checkInput(event) {
        event = event || window.event;

        if (event.currentTarget.type == "email" && event.currentTarget.value != "" && isValidEmail(event.currentTarget.value))
        {
            $(event.currentTarget).css({ "outline": "1px solid rgb(0,241,73)" });
        }
        else if (event.currentTarget.type == "text" && event.currentTarget.value.length > 1)
        {
            $(event.currentTarget).css({ "outline": "1px solid rgb(0,241,73)" });
        }
        else
        {
            $(event.currentTarget).css({ "outline": "1px solid rgb(238,28,37)" });
        }
    };

    function checkInput2(event) {
        event = event || window.event;

        if (event.currentTarget.type == "tel" && !isValidPhone(event.currentTarget.value))
        {
            $(event.currentTarget).val($(event.currentTarget).val().slice(0, -1));
        }
    };

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^.+@.+$/i);
        //var pattern = new RegExp(/^.+@.+\..{2,3}$/i);
        return pattern.test(emailAddress);
    };

    function isValidPhone(phoneNumber) {
        var pattern = new RegExp(/^[\d-]+$/);
        //var pattern = new RegExp(/^[+]?\d+$/);
        return pattern.test(phoneNumber);
    };

})();