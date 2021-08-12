"use strict";
// numbers are prompts
// use an alert to show the results

var movie1 = prompt("How many days did you rent your first movie?");
var movie2 = prompt("How many days did you rent movie number 2?");
var movie3 = prompt("How many days did you rent your third movie?");

var totalPrice = movie1 * 3 + movie2 * 3 + movie3 * 3;

alert("The total amount for all your movies is going to be: $" + totalPrice);
