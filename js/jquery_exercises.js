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

$('li').css('font-size', '20px');

$('h1').css('background-color', 'blue');
$('p').css('background-color', 'green');
$('li').css('background-color', 'yellow');

var header = $('h1').html();
alert(header);


//Example for 'Multiple Selectors' 1 test
$('h1, p, li').css('background-color', 'orange');