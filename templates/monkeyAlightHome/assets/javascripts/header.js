function popOverShow() {
    $('.popover-wrapper', this).css({visibility: 'visible'}).transition({opacity: 1});
}

function popOverHide() {
    $('.popover-wrapper', this).transition({opacity: 0}).transition({visibility: 'hidden'});
}

$.fn.clicktoggle = function (a, b) {
    return this.each(function () {
        var clicked = false;
        $(this).bind("click", function () {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};

$(function () {
    if (!Modernizr.touch && $(window).width() > 939) {
        $('header .powered-by-alight').hoverIntent(popOverShow, popOverHide);
    }

    var topbar = $('.top-bar');
    $('#log-in').on('click', function (event) {
        event.preventDefault();

        if($(this).hasClass('active')){
            $('#log-in-area').slideUp();
            $(this).toggleClass('active');
        } else {
            $(this).toggleClass('active');
            window.scrollTo(0, 0);
            $('body').addClass('show-login');
            $('#log-in-area').slideDown();            
            $(topbar).removeClass('expanded');            
            // $('#header-spacer').animate({height: 215});

            $( ".toggle-topbar a" ).on( "click", function( event ) {
              $('body').removeClass('show-login');
              $('#log-in-area').slideUp();
              $('#log-in').removeClass('active');
              $( this ).off( event );
            });
        }
    });


    // $('#log-in').clicktoggle(function (event) {
    //     event.preventDefault();
    //     $('#log-in-area').slideDown();
    //     $(this).toggleClass('active');
    //     $(topbar).removeClass('expanded');
    //     $('body').addClass('show-login');
    //     // $('#header-spacer').animate({height: 215});

    //     $( ".toggle-topbar a" ).on( "click", function( event ) {
    //       $('body').removeClass('show-login');
    //       $('#log-in-area').slideUp();
    //       $( this ).off( event );
    //     });

    // }, function (event) {
    //     event.preventDefault();
    //     $('#log-in-area').slideUp();
    //     $(this).toggleClass('active');
    //     // $('#header-spacer').animate({height: 70});
    // });

    $('header .has-dropdown, header #track').hover(function () {
        $(this).toggleClass('hovered');
    });


    // Make sure the services nav is never offscreen
    var servicesOffset = $('#services-dropdown').offset();//.left;
    if(servicesOffset) servicesOffset = servicesOffset.left;
    if(servicesOffset && servicesOffset < 0){
        $('#services-dropdown').css('right', servicesOffset);
    }

});