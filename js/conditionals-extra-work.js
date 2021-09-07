/* Which Generation Are You?
 * Try finding your ancestors and offspring with code.
 *
 * Create a function named generation that takes a number x and a character y ("m" for male, "f" for female), and returns the
 * name of an ancestor (m/f) or descendant (m/f).
 *
 * If the number is negative, return the related ancestor.
 * If positive, return the related descendant.
 * You are generation 0. In the case of 0 (male or female), return "me!".
 * Examples
 * >> generation(2, "f") ➞ "granddaughter"
 * >> generation(-3, "m") ➞ "great grandfather"
 * >> generation(1, "f") ➞ "daughter"
 *
 * Generation	Male	Female
 * -3	great grandfather	great grandmother
 * -2	grandfather	grandmother
 * -1	father	mother
 * 0	me!	me!
 * 1	son	daughter
 * 2	grandson	granddaughter
 * 3	great grandson	great granddaughter
 */

function generation(x, y){
    if(x === 1 && y === "m"){
       return "son"
    }
    if(x === 2 && y === "m"){
        return "grandson"
    }
    if(x === 3 && y === "m"){
        return "great grandson"
    }
    if(x === 0){
        return "me!"
    }
    if(x === -1 && y === "m"){
        return "father"
    }
    if(x === -2 && y === "m"){
        return "grandfather"
    }
    if(x === -3 && y === "m"){
        return "great grandfather"
    }
    if(x=== 1 && y === "f"){
        return "daughter"
    }
    if(x === 2 && y === "f"){
        return "granddaughter"
    }
    if(x === 3 && y === "f"){
        return "great granddaughter"
    }
    if(x === -1 && y === "f"){
        return "mother"
    }
    if(x === -2 && y === "f"){
        return "grandmother"
    }
    if(x === -3 && y === "f"){
       return "great grandmother"
    }
}


/* Say "Hello" Say "Bye"
 * Write a function named sayHelloBye that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.
 *
 * Examples
 * >> sayHelloBye("alon", 1) ➞ "Hello Alon"
 * >> sayHelloBye("Tomi", 0) ➞ "Bye Tomi"
 * >> sayHelloBye("jose", 0) ➞ "Bye Jose"
 *
 * Notes
 * The name you return must be capitalized.
 */


function sayHelloBye(name, num){
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    if(num === 1){
        return "Hello " + name;
    }else{
        return "Bye " + name;
    }
}


/* Tile Teamwork Tactics
 * In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
 *
 * Given you and your friend's tile number, create a function named possibleBonus that returns if it's possible to earn a bonus when you roll the dice.
 *
 * Examples
 * >> possibleBonus(3, 7) ➞ true
 * >> possibleBonus(1, 9) ➞ false
 * >> possibleBonus(5, 3) ➞ false
 *
 * Notes
 * You cannot move backward (which is why example #3 doesn't work).
 * If you are already on the same tile, return false, as you would be advancing away.
 * Expect only positive integer inputs.
 */

function possibleBonus(you, friend){
    if(friend - you >= 1 && friend - you <= 6){
        return true;
    }
    else{
        return false;
    }
}



/* Integer in Range?
 * Create a function named intWithinBounds that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
 *
 * Examples
 * >> intWithinBounds(3, 1, 9) ➞ true
 * >> intWithinBounds(6, 1, 6) ➞ false
 *
 * >> intWithinBounds(4.5, 3, 8) ➞ false
 *
 * Notes
 * The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
 * Bounds will be always given as integers.
 */

function intWithinBounds(num1, num2, num3){
    if(parseInt(num1) !== parseFloat(num1)){
        return false;
    }
    if(num1 >= num2 && num1 < num3){
        return true;
    }
    return false;
}



/* Perimeters with a Catch
 * Write a function named perimeter that takes a number and returns the perimeter of either a circle or a square. The input will be in the form (letter l, number num) where the letter will be either "s" for square, or "c" for circle, and the number will be the side of the square or the radius of the circle.
 *
 * Use the following formulas:
 *
 * Perimeter of a square: 4 * side.
 * Perimeter of a circle: 6.28 * radius.
 *
 * The catch is you can only use arithmetic or comparison operators, which means:
 *
 * No if... else statements.
 * No objects.
 * No arrays.
 * No formatting methods, etc.
 * The goal is to write a short, branch-free piece of code.
 *
 * Examples
 * >> perimeter("s", 7) ➞ 28
 * >> perimeter("c", 4) ➞ 25.12
 * >> perimeter("c", 9) ➞ 56.52
 */

function perimeter(string, num1){
    if(string === "s"){
        return 4 * num1;
    }
    else if(string === "c"){
        return 6.28 * num1;
    }
}
