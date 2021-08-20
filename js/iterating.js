(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['Kapena', ' Andrew', ' Matthew', ' Magallan'];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */


    console.log(names [0]);
    console.log(names [1]);
    console.log(names [2]);
    console.log(names [3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (var i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + ' is: ' + names[i]);
    }



    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(name, index, array) {
        console.log('Here is the name: ' + name + ' and the index number is: ' + index + ' and here is the whole array: ' + array);
    });



    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    var example = ['1', '2', '3', '4', '5']


    function first(example) {
        console.log("The first element is: " + example[0]);
    }


    function second(example) {
        console.log("The second element is: " + example[1]);
    }


    function last(example) {
        console.log("The last element is: " + example[example.length-1]);
    }

    first(example);
    second(example);
    last(example);


})();

