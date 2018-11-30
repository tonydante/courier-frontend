function on_resize(c, t) {
    onresize = function () {
        clearTimeout(t);
        t = setTimeout(c, 100)
    };
    return c
}

// Set position of sky gradient to reflect current local time
function setPos() {
    //Get today's date
		
		if(daynight == "night") {
			return;
		}

    var today = new Date();
    //Get current time
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h).toString();
    m = checkTime(m).toString();
    s = checkTime(s).toString();
    //Set time
    var time = h + m + s;
    //Calculate sky gradient position based on time
    var pos = time / 2400 * 2;
    // Set nightfall to 18:00
    var nightfall = padDigits(time - 180000, 6) * 0.00001;
    //Set sunrise to 06:00
    var sunrise = padDigits(60000 - time, 6) * 0.00001;
    //If AM, then set sky gradient position to positive value, else if PM then set to negative value
    if (pos < 100) {
        $('#sky').css({backgroundPosition: '0 ' + pos + '%'});
    } else {
        $('#sky').css({backgroundPosition: '0 ' + -pos + '%'});
    }
    //If between 18:00 and 23:59, then fade stars in, else fade out until 06:00
    if (time >= 180000 && time <= 235959) {
        $('#stars').css('opacity', nightfall);
    } else {
        $('#stars').css('opacity', sunrise);
    }
    //Update position and star opacity each second. Comment out the line below to calculate on page load only
//    p = setTimeout('setPos()', 1000);
}

//Maintain six digit strings for times, so zero values are not stripped out
function padDigits(number, digits) {
    return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

// Add leading zero in front of single digit values
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

//Define number of stars in the sky
var starCount = 100;

var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array();

function setConformingHeight(el, newHeight) {
    // set the height to something new, but remember the original height in case things change
    el.data("originalHeight", (el.data("originalHeight") == undefined) ? (el.height()) : (el.data("originalHeight")));
    el.height(newHeight);
}

function getOriginalHeight(el) {
    // if the height has changed, send the originalHeight
    return (el.data("originalHeight") == undefined) ? (el.height()) : (el.data("originalHeight"));
}

function columnConform() {
    if ($(window).width() >= 768) {
        // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
        $('.equal-heights').each(function () {
            // "caching"
            var $el = $(this);
            var topPosition = $el.position().top;
            if (currentRowStart != topPosition) {
                // we just came to a new row.  Set all the heights on the completed row
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
                // set the variables for the new row
                rowDivs.length = 0; // empty the array
                currentRowStart = topPosition;
                currentTallest = getOriginalHeight($el);
                rowDivs.push($el);
            } else {
                // another div on the current row.  Add it to the list and check if it's taller
                rowDivs.push($el);
                currentTallest = (currentTallest < getOriginalHeight($el)) ? (getOriginalHeight($el)) : (currentTallest);
            }
            // do the last row
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) setConformingHeight(rowDivs[currentDiv], currentTallest);
        });
    } else {
        $('.equal-heights').css('height', 'auto');
    }
}

$(function () {
    setPos();
    columnConform();

    //Add pre-defined number of stars to the sky
    for (var i = 1; i <= starCount; i++) {
        $('#stars').append("<div class='star'></div>");
    }

    //Randomly adjust the opacity of each star between 0.1 and 0.9
    $('#stars .star').each(function () {
        var topPos = Math.ceil(Math.random() * 100);
        var leftPos = Math.ceil(Math.random() * 100);
        var transparency = Math.ceil(Math.random() * 9) + 1;
        $(this).css({top: topPos + '%', left: leftPos + '%', opacity: '0.' + transparency});
    });

    $('.js-click-once').on('click', function(e){
        if(e.target.getAttribute('disabled')){
            e.preventDefault();
            return;
        } else {

            setTimeout( function(){
                e.target.setAttribute('disabled', 'disabled');
            }, 10);

        }
    });
});

on_resize(function () {
    columnConform();
});