var stickyFooter = function(){
    var $body = $('body');
    var $footer = $('.footer-2014');
    var $footerHeight = $footer.outerHeight();
    var $wrapper = $('#sky');
    if($wrapper.length == 0){
        $wrapper = $('.main-content');
    }

    $body.addClass('body-with-sticky-footer');
    $wrapper.addClass('sticky-footer-wrapper');
    $footer.addClass('sticky-footer');

    var $style = $("<style type='text/css'></style>");
    var css = ".body-with-sticky-footer { padding-bottom: " + $footerHeight + "px; }.sticky-footer-wrapper { margin-bottom: -" + $footerHeight + "px; }.sticky-footer-wrapper:after { height: " + $footerHeight + "px; }";

    $style.html(css).appendTo('head');


    var watchWindowResize = (function(){
        var resizeTimeout = null;
        var resizeDelay = 150;

        var resizeHandler = function(){
            // We want to make sure the user has finished resizing the window before doing anything.
            // We do this by creating a setTimeout function with a delay every time a resize event is fired.
            // If there is a setTimeout running and another resize event is fired then we restart the setTimeout

            if(resizeTimeout){
                clearInterval(resizeTimeout);
            }

            resizeTimeout = setTimeout(function(){
                var $footerHeight = $footer.outerHeight();
                var css = ".body-with-sticky-footer { padding-bottom: " + $footerHeight + "px; }.sticky-footer-wrapper { margin-bottom: -" + $footerHeight + "px; }.sticky-footer-wrapper:after { height: " + $footerHeight + "px; }";

                $style.html(css);
            }, resizeDelay);
        };

        $(window).resize(resizeHandler);
    })();
}

$(function () {
    $(window).load(function() {
        $('#footer-carousel').flexslider({
            animation: "slide",
            directionNav: false
        });
    });

    stickyFooter();
});