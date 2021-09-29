"use strict";


// $('html').keyup(function(event){
//     console.log(event.key);
// });

var userKeys = "";

$('body').keyup(function (event) {
    console.log("The key you pressed was: " + event.key);
    //add global var
    userKeys += event.key;
    console.log(userKeys);
    // if my user types '' > do a cool thing
    if (userKeys === "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightbaEnter") {
        // display alert after correct code has been entered
        alert('You figured out the secret code congrats!! Enjoy a little tune and a shocked Goku image');
        //#4 option A.-- Display an image
        $(this).css('background-color', 'green');
        $(this).css('background-image', "url('/img/goku.jpeg')");
        $(this).css('background-size', 'contain');
        //#4 option B.-- Play a sound
        $('#pop')[0].play();
    }
});