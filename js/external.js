"use strict";
// numbers are prompts
// use an alert to show the results

var work1 = 400;
var work2 = 380;
var work3 = 350;

var input1 = prompt("How many hours did you work with Google?");
var input2 = prompt("How many hours did you work with Amazon?");
var input3 = prompt("How many hours did you work with Facebook?");

var totalPay = work1 * input1 + work2 * input2 + work3 * input3;

alert("Based on the pay rate of each employer, you have earned: $" + totalPay + " so far this week.");
