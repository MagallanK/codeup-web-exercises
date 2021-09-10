"use strict";
// While loops exercise
var i = 1;

while(i < 65536){
    if(i * 2){
        console.log(i*=2);
    }
}


//Do While loop

var allCones = Math.floor(Math.random() * 50) + 50;


do {
    console.log("Here are the amount of cones you bought: " + Math.floor(Math.random() * 5) + 1);
} while(allCones < 50);



