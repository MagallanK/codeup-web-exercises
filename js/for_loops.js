"use strict";

//EX: 1
function showMultiplicationTable(x){
    for (var i = 1; i <= 10; i++) {
        if(i * x){
            console.log(x + " x " + i + " = " + (i * x));
        }
    }
}

console.log(showMultiplicationTable(7));


//EX: 2
function random(max, min) {
    for (var i = 0; i < 10; i++) {

        var randomNum = Math.floor(Math.random() * 180) + 20;
        var numberValue = randomNum % 2 == 0 ? "even" : "odd";
        console.log(randomNum + " is " + numberValue);
    }
}


//EX: 3
for (var i = 0; i <= 20; i++) {


    if (i === 0) {
        console.log(i + " is even");
    }
    else if(i % 2 === 0){
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}


//EX: 4
for (var i = 1; i < 10; i++) {
    var output = "";

    for ( var j = 0; j < i; j++) {
       output += i;
    }
    console.log(output);
}
    for (let i = 1; i < 10; i++) {
        console.log(i.toString().repeat(i));
    }


///EX: 5
for (var i = 100; i <= 100; i -= 5){
    if(i === 0){
        break;
    }
    console.log(i);
}

