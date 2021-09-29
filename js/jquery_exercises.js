"use strict";

//Examples for warmup and getting used to JQuery
// $(document).ready(function() {
//     alert( 'The DOM has finished loading!' );
// });
// $(document).ready(function(){
//     alert( 'The DOM is ready to go!');
// });
//
// window.onload = function(){
//     alert('The window onload is ready to go!');
// }


//Example 'id selectors' 1-6 tests

// var heading = $('#main-header').html();
// alert(heading);
//
// heading = $('#not-important').html();
// alert(heading);
//


//Example for 'class selectors' 1-5 tests

// $('.codeup').css('border', '1px solid red');


//Example for 'Element Selectors' 1-4 tests

// $('li').css('font-size', '20px');
//
// $('h1').css('background-color', 'blue');
// $('p').css('background-color', 'green');
// $('li').css('background-color', 'yellow');
//
// var header = $('h1').html();
// alert(header);


//Example for 'Multiple Selectors' 1 test
// $('h1, p, li').css('background-color', 'orange');

//-------------------------Next Lesson Below-----------------------------------------\\

//Mouse events exercises 1-4 tests


//click event for h1 tag.... Figure out how to make responsive based off user input. Commented out for now for passing results through course.
$('h1').click(function (input) {

    // with no parameter in function use var userInput = confirm() for the ifs pass the var

    input = confirm('By clicking this title, the background color will now change. Do you want to continue?');
    if (input === true) {
        $(this).css('background-color', 'red').css('font-family', 'helvetica');
    }
    if (input === false) {
        alert('You chose not to change the background at this time.');
        $(this).css('background-color', 'white').css('font-family', 'inherit');
    }
});


//dblclick event for p tag
$('p').dblclick(function () {
    $(this).css('font-size', '18px').css('font-family', 'cursive').css('background-color', 'yellow');
});

// click to change the p tags to original
$('p').click(function () {
    $(this).css('background-color', 'white').css('font-family', 'inherit').css('font-size', 'inherit');
});


//hover event for li tags
$('li').hover(
    function () {
        $(this).css('background-color', 'green').css('font-size', '22px');
    },
    function () {
        $(this).css('background-color', 'inherit').css('font-size', 'inherit');
    }
);

//h3 tag event
$('h3').hover(
    function () {
        $(this).text('This text is above the list of items and below the h1 tag.').css('background-color', 'orange');
    },
    function () {
        $(this).text('NOTICE: Hover over this text.').css('background-color', 'inherit');
    }
);