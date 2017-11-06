$(document).ready(function () {

    var blackWrapper = $(".blackWrapper"),
        navMenu = $(".left-group-menu"),
        body = $("body");


    navMenu.hover(
        function() {
            blackWrapper.css({"display": "block"})
        }, function() {
            blackWrapper.css({"display": "none"});
        }
    );



/// Search button
    $(".button_search-mobile").on("click", function () {
        $(".block_ssearch").slideToggle(400);

    });

//    ANCOR
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 500) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 'slow');
            return false;
        });
    });


///// Button Buy

    var  buttonAddToBasket = $(".addbutton"),
         fildQuantityOgGoods = $(".addnum"),
         activeButtonAddToBasket= "addbutton_active";

    fildQuantityOgGoods.on('keyup', function(e) {
        var val = $(this).val();
        var new_str = val.replace(/[^0-9]/gim,'');
        $(this).val(new_str);
    });

    fildQuantityOgGoods.on('blur', function(e) {
        var val = $(this).val();
        var new_str = val.replace(/[^0-9]/gim,'');
        $(this).val(new_str);
    });

    buttonAddToBasket.on("click", function () {

        var inputFild = $(this).prev().find(".addnum"),
            priceAfterAdd = $(this).prev().find(".price_afterAdd"),
            textInputField = inputFild.val();


        if (textInputField !== ""){

            $(this).text("в кошику");
            $(this).addClass(activeButtonAddToBasket);

            priceAfterAdd.text(textInputField);
            inputFild.addClass("hidden");

            $(this).prev(".price_box").addClass("active");
        }

    });




});




