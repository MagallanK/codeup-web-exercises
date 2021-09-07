// Define a function named timesFour that takes in an input and multiples that input by four if it is numeric. If the input is not numeric, then return false.
// timesFour(0) //0
// timesFour("5") //20
// timesFour(-5) //-20
// timesFour('Texas') //false
// timesFour([2,1,0]) //false
// timesFour(true) //false
// timesFour(null) //false

function timesFour(input) {
    if (isNaN(input)) {
        return false;
    }
    if (!isNaN(parseInt(input))) {
        return parseInt(input) * 4;
    }
}


// Define a function named convertDaystoHours that takes in one input Days. Return the conversion of the number of days into total hours. If the input is not numeric or a numeric string, convertDaystoHours, should return false.
// convertDaystoHours(0) //0
// convertDaystoHours('5') // 120
// convertDaystoHours('Texas') //false
// convertDaystoHours([2, 1, 0]) //false
// convertDaystoHours(true) //false
// convertDaystoHours(false) //false

function convertDaysToHours(input){
    if(isNaN(input)){
        return false;
    }
    var numDays = input;
    var totalHours = numDays * 24

    if(!isNaN(parseInt(input))){
        return  totalHours;
    }
}



// Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: “$XX.XX”. If either or both inputs are not numeric or numeric strings, calculateTax should return false.
// calculateTax(25, 8)				 // “$27.00"
// calculateTax(10, 12)             // “$11.20”
// calculateTax(120, 15.5)			 //	“$138.60"
// calculateTax(10, true)           // false
// calculateTax([1, 2, 3], 10)      // false
// calculateTax(“Codeup”, 100)      // false
// calculateTax()                   // false

function calculateTax(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        return false;
    }
    var totalPaid = num1;
    var taxPercent = num2 / 100;
    var totalAmount = totalPaid + (taxPercent * totalPaid);
    totalAmount.toFixed(2);

    if(!isNaN(parseFloat(num1)) || !isNaN(parseFloat(num2))){
        return "$" + parseFloat(totalAmount);
    }
}
