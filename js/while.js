"use strict";
// While loops exercise
var i = 1;

while (i < 65536) {
    if (i * 2) {
        console.log(i *= 2);
    }
}


//Do While loop

// This is how you get a random number between 50 and 100
var totalCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
var boughtCones = Math.floor(Math.random() * 5) + 1;

console.log("There are " + totalCones + " cones total.");

do {
    var leftOverCones = totalCones - boughtCones;
    console.log("There are " + leftOverCones + " cones left over.");
} while (totalCones <= 0);

console.log("Here are the amount of cones you bought: " + boughtCones);
