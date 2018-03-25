$(document).ready(function () {

    var blackWrapper = $(".blackWrapper"),
        navMenu = $(".left-group-menu"),
        basketLink = $(".binfo"),
        btnCatalog = $(".buttonStartMenu"),
        active = "active",
        body = $("body");


//  hideShowEffect
    function hideShowEffect(button, element) {
        button.click(function () {
            element.toggleClass("hidden");
        });
    }


    ///  sliderEffect
    function sliderEffectForButtons(button, element, duration) {
        button.click(function () {
            element.slideToggle(duration);
        });
    }


    // function buttonNavigation (){
    //
    //     if ($(window).width() <= 991) {
    //
    //         return false
    //     }else {
    //         sliderEffectForButtons(btnCatalog, navMenu, 300);
    //
    // }


            var $window = $(window);

        btnCatalog.each(function(){
            $(this).on({
                    click: function (){
                        if ($window.width() <= 991) {
                            navMenu.slideToggle(300);
                        }
                    }
                });
            });










    var buttonLanguage = $(".bl_language__active"),
        fieldWithOtherLanguage = $(".bl_language__variables"),
        buttonChooseRigthLanguage = $(".bl_language__variables_item");

    hideShowEffect(buttonLanguage, fieldWithOtherLanguage);
    hideShowEffect(buttonChooseRigthLanguage, fieldWithOtherLanguage);


    $(".menu_categories__item").hover(
        function () {
            blackWrapper.removeClass("hidden");
        }, function () {
            blackWrapper.addClass("hidden");
        }
    );


    $(".blok_main_1.category_menu .left-group-menu").hover(
        function () {
            blackWrapper.removeClass("hidden");
        }, function () {
            blackWrapper.addClass("hidden");
        }
    );


    var buttonSubmenu = $(".btn_menu");

    buttonSubmenu.on("click", function () {

        $(this).toggleClass(active);
        $(this).siblings(".subCategory").toggleClass(active);
    });

//
////////////////// POPUPS LOGIC

    function popupWindowShow(btn, field) {
        btn.on("click", function () {

            field.removeClass("hidden");
            blackWrapper.removeClass("hidden");
            blackWrapper.animate({opacity: 0.6}, 300);
        });
    }

    function closePopupWindow(btn, field) {
        btn.on("click", function () {
            field.addClass("hidden");
            blackWrapper.addClass("hidden");
            blackWrapper.animate({opacity: 0}, 400);
        })
    }


/// POPUP BIFORE ADD TO SHOPBAG

    function popupWindowBiforeAddToShopBag() {

        var TESTBUTTON = $(".TEST_BUTTON");

        var popupWindow = $(".popup_likeShopbag"),
            buttonClose = $(".popup_likeShopbag__close"),
            buttonContinueBuying = $(".popup_likeShopbag__continueBuying");

        popupWindowShow(TESTBUTTON, popupWindow);

        closePopupWindow(buttonClose, popupWindow);
        closePopupWindow(buttonContinueBuying, popupWindow);
        closePopupWindow(blackWrapper, popupWindow);

    }

    popupWindowBiforeAddToShopBag();


///ButtonForSlideEffect

    var buttonSearch = $(".button_search-mobile"),
        fildSearch = $(".block_ssearch"),


        buttonFilters = $(".button_filtr"),
        fieldFilters = $(".left-group-vlast");


    sliderEffectForButtons(buttonSearch, fildSearch, 400);
    sliderEffectForButtons(buttonFilters, fieldFilters, 400);


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

    var buttonAddToBasket = $(".addbutton"),
        fildQuantityOgGoods = $(".addnum"),
        activeButtonAddToBasket = "addbutton_active";

    fildQuantityOgGoods.on('keyup', function (e) {
        var val = $(this).val();
        var new_str = val.replace(/[^0-9]/gim, '');
        $(this).val(new_str);
    });

    fildQuantityOgGoods.on('blur', function (e) {
        var val = $(this).val();
        var new_str = val.replace(/[^0-9]/gim, '');
        $(this).val(new_str);
    });

    buttonAddToBasket.on("click", function () {

        var inputFild = $(this).prev().find(".addnum"),
            priceAfterAdd = $(this).prev().find(".price_afterAdd"),
            textInputField = inputFild.val();


        if (textInputField !== "") {

            $(this).text("в кошику");
            $(this).addClass(activeButtonAddToBasket);

            priceAfterAdd.text(textInputField);
            inputFild.addClass("hidden");

            $(this).prev(".price_box").addClass("active");
        }
        basketLink.addClass("active");

    });

    // var productSlides = $(".product_slider__item"),
    //     quantitySlides = productSlides.length,
    //     HowManySlides = 4;
    // var currentLoop = true;
    //
    // if (quantitySlides < HowManySlides) {
    //     currentLoop = false;
    // }


    $(".product_slider").owlCarousel({
        items: 4,
        loop: false,
        nav: true,
        navText: true,
        dots: false,
        autoplay: false,
        stopOnHover: true,
        smartSpeed: 1000, //Время движения слайда
        autoplayTimeout: 4000, //Время смены слайда
        pagination: false,
        responsiveClass: true,
        responsive: {
            1200: {
                items: 4
            },
            991: {
                items: 4
            },
            550: {
                items: 2
            },

            320: {
                items: 2
            }

        }
    });

    function showBigSliderPhoto() {

        var fullSlides = $(".product_slider__item"),
            activeSlide = "product_slider__item_active";

        fullSlides.on("click", function () {

            fullSlides.removeClass(activeSlide);
            $(this).addClass(activeSlide);

            var thisSrc = $(this).find(".product_slider__img").attr('src');

            $(".bl_mainProduct__mainImg").attr('src', thisSrc);

        });

    }

    showBigSliderPhoto();


    $(".block_quantity__plus").on("click", function () {

        var quantityProduct = $(this).siblings(".block_quantity__input");

        quantityProduct.val(Number(quantityProduct.val()) + 1);
    });

    $(".block_quantity__minus").on("click", function () {

        var quantityProduct = $(this).siblings(".block_quantity__input");

        if (quantityProduct.val() > 1) {
            quantityProduct.val(Number(quantityProduct.val()) - 1);
        }
        else {
            quantityProduct.val(1);
        }
    });


// FILTER for telephone number

    var telephonseInput = $("input[type='tel']");
    telephonseInput.mask("+38 (0" + "99) 999-99-99", {placeholder: "+38 (0__) ___+__+__"});


});




