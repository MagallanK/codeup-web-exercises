"use strict";


//EX: 1
// for (var i = 0; i <= 50; i++) {
//     if(i % 2 === 0){
//         console.log(i + " is even")
//     }
//     else {
//         console.log(i + " is odd");
//     }
// }


    do {
        var userInput = prompt("Enter an odd number between 1 and 50.");

    } while(userInput % 2 === 0 && userInput >= 1 && userInput <= 50)

console.log("The number to skip is: " + userInput);
console.log(" ");


    for (var i = 1; i <= 50; i++) {
        if(i == userInput) {
            console.log("Yikes! Skipping number: " + i);
        }
        else if(i % 2 !== 0) {
            console.log("Here is an odd number: " + i);
        }
        else {
            continue;
        }
}