$(document).ready(function () {


    var blackWrapper = $(".bg_layer"),
        navMenu = $(".left-group-menu");

    navMenu.hover(
        function() {

            blackWrapper.css({"display": "block"})
        }, function() {
           blackWrapper.css({"display": "none"});
        }
    );

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





});


