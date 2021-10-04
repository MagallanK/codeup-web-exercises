'use strict';

//toggleClass is being used only so it can be users choice of on or off.

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
    $('ul li:nth-last-child(1)').toggleClass('list-highlight');
});

// Clicking titles for bottom ul will now bold each li text
$('h3').click(function(e){
    e.preventDefault();
    $('li').toggleClass('title-text')
});

// Clicking on any li will now change font color to 'deepskyblue'
$('li').click(function(e){
    e.preventDefault();
    $('ul li:nth-of-type(1)').toggleClass('text-color');
});
