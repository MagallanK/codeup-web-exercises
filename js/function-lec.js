"use strict";

(function(){
    console.log("Welcome to functions!");

//Define named functions
    function sayHello() {
        console.log("Hello!");
}

    console.log("In the file after creating the sayHello function");

    sayHello();

//Define an anonymous function
    var sayHowdy = function() {
        console.log("Howdy!");
}
//sayHowdy(); to run as the page loads, call the function here.
//sayHowdy(); if not called in script, call in console to allow function to run.
    sayHowdy();

//Arguments and Parameters

//when declaring a function () is the parameter.
    function add(x, y) {
        return x + y;
}

//When calling the named function () is now the argument.
    add(2, 3);

//To let function "add" appear, we need to call to the console.
    console.log("add(2,3)= " + add(2, 3));

    function subtract(x, y) {
        return x - y;
}

//Scope var outside the function is a global scope.
//Scope any var within {} of the function is a Local scope.
    var instructor = "Douglas";
    var day = "Friday";

    function tellTheDay(){
        return "Tell " + instructor + " it's " + day + "!";
}

    function greeting(){
        var username = "Kenneth"
        return "Hi, " + username;
}

    console.log(greeting());
    // console.log(username);

    function checkDay(){
        var day = "Monday";
        return day;
}

    console.log("It's " + checkDay());
})();






