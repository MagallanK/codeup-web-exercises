"use strict";


// var dice = Math.floor(Math.random() * 6);
//
// function rollSixSided(rollAmount) {
//     for (var i = 1; i <= 10; i++)
//
//     return dice;
// }
//
// console.log(rollSixSided());


function rollSixSided(num) {

    for(var i = 0; i < num; i++) {

        var random = Math.floor(Math.random() * (6 -1 +1) + 1);

        console.log("Your rolls are: " + random + " on your dice!");
    }

}
