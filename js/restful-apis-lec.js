// console.log("Hello restful APIs");
//
// const API_URL = 'https://vagabond-glacier-verse.glitch.me/dogs';

//Get all the dogs
// function getDogs(){
//     return fetch(API_URL)
//     .then((response) => response.json());
// }

// getDogs().then((dogs) => console.log(dogs));

//Get a dog by ID.
// function getDog(id){
//     return fetch(`${API_URL}/${id}`)
//         .then((response) => response.json());
// }

// getDog(11).then((dog) => console.log(dog));


//Edit a dog by ID.
// function editDog(dog){
//     let options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dog), //Convert the JS object into a JSON string before sending it up to the server.
//     };
//     return fetch(`${API_URL}/${dog.id}`, options)
//         .then((response) => response.json());
// }
// //
// let piper = {
//     name: 'Piper',
//     isGoodDog: true,
//     id: 11,
//     age: 8,
// };
// editDog(piper).then((data) => console.log(data))


//Delete dog by ID.
// function deleteDog(id){
//     let options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     }
//     fetch(`${API_URL}/${id}`, options)
// }

//Create a dog by ID.
// function createDog(dog){
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(dog), //Convert the JS object into a JSON string before sending it up to the server.
//     };
//     return fetch(`${API_URL}/${dog.id}`, options)
//         .then((response) => response.json());
// }
//
// let pepper = {
//     name: 'Pepper',
//     isGoodDog: true,
//     age: 15,
// };

// createDog(pepper).then((newDog) => console.log(newDog))