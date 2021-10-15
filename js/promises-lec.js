"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

// var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
// return of fetch request is a Promise object

//TODO: console log the results of the above Promise. What is the result?
// console.log(pokemonAPI);
//TODO: add a method that runs if the Promise resolves successfully
//TODO: add a method that runs if the Promise fails
//TODO: In the callback function of the .then method, parse the response into JSON

// pokemonAPI.then(function (results) {
//     console.log(results);
//     // results.text().then((text) => {console.log(text)});
//     results.json().then((resultsObject) => {
//         console.log(resultsObject)
//     });
// }).catch(function (err) {
//     console.log(err);
// })

/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.

// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(function(results){
//     console.log(results);
//     // results.text().then((text) => {console.log(text)});
//     results.json()
//         .then((resultsObject) => {return resultsObject.results})
//         .then((pokemon) => console.log(pokemon[0]));
// }).catch(function(err){
//     console.log(err);
// })
//
//
// fetch('https://pokeapi.co/api/v2/pokemon')
//     .then((response) => response.json())
//     .then((jsonData) => jsonData.results)
//     .then((results) => results.forEach((result) => console.log(result.name)));


// BONUS: Is there a way for us to clean up our code?

// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API
// fetch("https://swapi.dev/api/films")
// // TODO: Use Promise chaining to console log the json response
//     .then((response) => {
//         return response.json();
//     })
//     .then((starWarsFilmsData) => { // <<<<< This is the parsed object from the call to response.json()
//         console.log(starWarsFilmsData.results); // <<<< the objects (purple words) are in the api itself and you can live grab what you want to display or log.
//         starWarsFilmsData.results.forEach(function(film){
//             console.log(film.title)
//         })
// })
// TODO: chain another method that iterates through the results array and console logs the names

// TODO: Demonstrate Promise.all and Promise.race
//
// var pokemonAPI = fetch('https://pokeapi.co/api/v2/pokemon');
// let starWarsAPI = fetch("https://swapi.dev/api/films");

// Promise.all([pokemonAPI, starWarsAPI])
//     .then((responses) => {
//         //Responses contains the resolved promises in the same order that they were passed into the all method.
//         //You don't have to do this console.log below
//         // console.log(responses[0].json().then((parsedData) => {console.log(parsedData)}));
//         //You could write it out as below to get both api's into two separate arrays by using .map
//         return Promise.all(responses.map((response) => {
//                 return response.json()
//             }
//         ))
//     }).then((parsedResults) => {
//         console.log(parsedResults);
// });

// Promise.race([pokemonAPI, starWarsAPI])
//     .then((response) => {
//         console.log(response)
//     })


//Restful API Lecture

