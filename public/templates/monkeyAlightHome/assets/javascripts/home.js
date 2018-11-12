// Box hover animation
function boxFloat() {
    $('.box', this).transition({y: -15}, 400, 'easeOutCubic');
    $('.shadow', this).transition({scale: 0.75, opacity: 0.5}, 400, 'easeOutCubic');
}

// Box drop animation
function boxDrop() {
    $('.box', this).transition({y: 0}, 400, 'easeOutCubic');
    $('.shadow', this).transition({scale: 1, opacity: 1}, 400, 'easeOutCubic');
}

// Position customer award section based on screen widths
function customerAward() {
    if ($(window).width() > 939) {
        $('#customer-award').appendTo('#customer-award-desktop');
    } else {
        $('#customer-award').appendTo('#customer-award-mobile');
    }
}

$.fn.boxPop = function () {
    $('.box', this).transition({y: -15}, 400, 'easeOutCubic');
    $('.shadow', this).transition({scale: 0.75, opacity: 0.5}, 400, 'easeOutCubic');
    $('.box', this).transition({y: 0}, 400, 'easeOutCubic');
    $('.shadow', this).transition({scale: 1, opacity: 1}, 400, 'easeOutCubic');
};

function boxSequence() {
    setTimeout(function () {
        $('#first-box').boxPop();
    }, 1000);
    setTimeout(function () {
        $('#second-box').boxPop();
    }, 1200);
    setTimeout(function () {
        $('#third-box').boxPop();
    }, 1400);
    setTimeout(function () {
        $('#fourth-box').boxPop();
    }, 1600);
    setTimeout(function () {
        $('#fifth-box').boxPop();
    }, 1800);
}

$(function () {
    customerAward();

    $('#send-choices ul li, .send-modal .box-wrapper').hoverIntent(boxFloat, boxDrop);

    $('#left-sign-carousel, #right-sign-carousel').flexslider({
        animation: "fade",
        controlNav: false,
        directionNav: false
    });

    $('.add-another-box').on('click', function (event) {
        var $target = $(this);
        var $row = $target.parents('.box-out').children('.form-row').filter(":last");
        $row.clone().addClass('clone').insertBefore('.form-buttons');
        event.preventDefault();
    });

    $(document).foundation('reveal', {
        opened: function () {
            $(this).find("input[name^='weight']").focus();
        }
    });

});

$(window).load(function () {
    boxSequence();
});

$(window).resize(function () {
    customerAward();
});

