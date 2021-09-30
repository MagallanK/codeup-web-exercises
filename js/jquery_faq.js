// 'use strict';
//
//     $('#make-visible').click(function(){
//         $('.invisible').addClass('visible');
// });


'use strict';

//Pressing link shows hidden text elements for all 'titles'
$('#make-visible').click(function(e){
    e.preventDefault();
    $('.invisible').toggleClass('visible');
});

//Clicking each 'title' will now highlight the toggled 'title'
$('dt').click(function(){
    $(this).toggleClass('highlight');
});