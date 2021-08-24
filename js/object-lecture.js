//What's going on with these objects?
//Well: an OBJECT is a grouping of data + functionality
//Our data. . we call properties [in a 'key:value' pair]
//Our functions . . we call methods.

//Let's set up an object and .log it to see what we're looking at:

var myCounty = {
    name: "Bexar",
    countySeat: "San Antonio",
    currentPop: 2003554
}

// console.log(myCounty);

var myDog = {
    name: "Fenix",
    age: 11,
    breed: "Pembroke Welsh Corgi"
}

// console.log(myDog);myDog

//.log-ing the above gets us the object 'printed' or 'viewed' in the console where we can click into the object to see its shape [properties]

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
* New Object Instance vs. Object Literal Notation *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We can call the 'constructor' for an object and use it to create our objects:


//More often, we'll use this object literal notation structure as shown above and below:


//* TODO: Create a new Object and call it 'myCar' using either way to do so shown above (object instance or object literal)

// var myCar = {};
// myCar.year = '2013';
// myCar.color = 'white';
// myCar.transmission = 'manual';
// myCar.type = 'Hyundai Genesis Coupe';
// myCar['model'] = '2.0t r-spec';
// console.log(myCar);

// That's great! But our car object doesn't have much going on, does it? There's no depth or meat to it - how can we fill our object in?

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                   Properties                    *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

// We assign properties to objects - properties are pieces of data and fill in the guts / details of our object

//Let's take myCar. . and actually line out what my car is.

// We can use dot notation to do so:

// myCar.year = '2013';
// myCar.color = 'white';
// myCar.transmission = 'manual';
// myCar.type = 'Hyundai Genesis Coupe';


// Or array notation:
// myCar['model'] = '2.0t r-spec';

//In general, dot notation is preferred of the two notations
//We can also set up our objects and properties/methods during object creation
// var sigOtherCar = {
//     make: 'Kia',
//     model: 'Rio',
//     year: 2009
// }
// // console.log(myCar);
//
// console.log(sigOtherCar);

// TODO: Fill in your myCar object with properties of make, model, and year with the correct values. If you don't own a vehicle, fill in the details with your favorite vehicle.
var myOwnCar = {};
myOwnCar.year = '2013';
myOwnCar.color = 'white';
myOwnCar.transmission = 'manual';
myOwnCar.type = 'Hyundai Genesis Coupe';
myOwnCar['model'] = '2.0t r-spec';

console.log(myOwnCar);

//For me? I'm missing the year for myCar so. .

// console.log(myCar);

//Now I have a completed example of the myCar object - the model and make were added above in prior examples

/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*           Object Properties && Methods          *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//With our myCar objects set up, let's start utilizing them and diving into them!
//We can use dot notation or array notation in similar ways to start accessing these properties

//Let's share some information about our cars :)
    //alert("Hey I own a " + myOwnCar.type + " " + myOwnCar['model']);

//We can tap into our prior understanding of assigning variables thus far and assign a property to a variable:

// var myCarYear = myOwnCar.year;
//
// alert("Sorry I forgot to include the year of my car. It is " + myCarYear);

//What if we wanted to create a more complicated piece of data? Perhaps a list of our cars FEATURES?



//Now we could do something like this. . a list of those features in the console

// TODO: Add an array of features that your vehicle has!

myOwnCar.features = ['Power Steering', 'Brembo brakes', 'Bluetooth', ' 3 pedals'];

for(var i =0; i < myOwnCar.features.length; i++){
    console.log("Here is one of my car's features: " + myOwnCar.features[i]);
}
//I already added an array of features above in the lecture, so I'm good to go.

//What about who owns our car? That could be an object itself if we think it through - the owner has a firstName and a lastName at the very least, right?



//Let's try nesting this object inside of our car object we've been building out



// TODO: Nest a 'carOwner' object of your own into this growing myCar object and console.log the results!

var carOwner = {
    firstName: 'Kapena',
    lastName: 'Magallan',
    age: 28,
    zipCode: 78229,
    contactPhone: 'mobile',
    phoneNumber: 8317310492
}
myOwnCar.owner = carOwner;

console.log(myOwnCar);

//An object can also contain within itself a method (function). We can set it up similarly to our properties, but with a value that is the function expression

var turnMyCarOn = function() {
    alert("Putting the key in the ignition and fired up the " + this.type + " " + this.model);
};
myOwnCar.turnOn = turnMyCarOn;
console.log(myOwnCar.turnOn());

//OPTION A:
// myOwnCar.turnOn = turnMyCarOn;


/*
* * * * * * * * * * * * * * * * * * * * * * * * * *
*                 Arrays of Objects               *
* * * * * * * * * * * * * * * * * * * * * * * * * *
*/

//Let's tie some things together: Let's make a garage with another car!

 var sigOtherCar = {
     type: 'Kia',
     model: 'Rio',
     year: 2009,
     owner: {firstName: "Vicki",
     lastName: "Sanchez"},
     turnOn: turnMyCarOn
 };

//  var theGarage = [myOwnCar, sigOtherCar];
//
//  console.log(theGarage);
//
// //Now: loop through an ARRAY of OBJECTS, accessing our turnOn function for our vehicles
//
// theGarage.forEach(function(car){
//     car.turnOn();
// })

//Also note: we used the keyword *this* on the other vehicle's turnOn function, so this will be a good experiment to see the results


//One final TODO: A bigger task - set up your own garage and add at least another vehicle into it. Log your garage array to verify it contains the cars you want - once your garage has the right cars, write a loop to access some properties or a method from them!

var dreamCar = {
    type: "Mustang",
    model: "Fastback",
    year: 1967,
    owner: {firstName: "Kapena",
        lastName: "Magallan"},
    turnOn: turnMyCarOn
};

var myGarage = [myOwnCar, sigOtherCar, dreamCar];

console.log(myGarage);

myGarage.forEach(function(car){
    car.turnOn();
})
