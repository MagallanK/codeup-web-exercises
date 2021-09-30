'use strict';

//Pressing button shows hidden text elements for all 'titles'
$('#make-visible').click(function(e){
    e.preventDefault();
    $('.invisible').toggleClass('visible');
});

//Clicking each 'title' will now highlight the toggled 'title'
$('dt').click(function(){
    $(this).toggleClass('highlight');
});

//Pressing 2nd button will highlight all last items in ul
$('#facts-btn').click(function(e){
    e.preventDefault();
    $('li').last().css('background-color', 'yellow');
});
