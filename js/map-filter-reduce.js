"use strict";

//Copied from curriculum

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Exercise #2: Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

let threeLanguages = users.filter(function(amount){
    return amount.languages.length >= 3;
});
console.log("Exercise # 2: ")
console.log("Those with at least 3 languages: ");
console.log(threeLanguages);
console.log("");


//Exercise #3: Use .map to create an array of strings where each element is a user's email address

console.log("~~~~~Adding space for question 3~~~~~~")

let userEmail = users.map(function(email){
    return email.email;
});
console.log("Exercise # 3: ");
console.log("User's email addresses: ");
console.log(userEmail);
console.log("");


//Exercise # 4: Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

console.log("~~~~~Adding space for question 4~~~~~~");


let yearsExp = users.reduce((total, number) => {
    return (total + number.yearsOfExperience);
}, 0);

// Get average outside of function otherwise it will loop through function and get average in the function which is incorrect.
let averageYears = yearsExp / users.length;

console.log("Exercise # 4: ");
console.log("Total years experience: ");
console.log(yearsExp);
console.log("Average of experience: ");
console.log(averageYears);
console.log("");


//Exercise # 5: Use .reduce to get the longest email from the list of users.
console.log("~~~~~Adding space for question 5~~~~~~");

let longestEmail = users.reduce((total, email) => {
    if(total.email.length > email.email.length){
        return total;
    }else{
        return email;
    }
}).email;

console.log("Exercise # 5: ");
console.log("The longest email is: ");
console.log(longestEmail);
console.log("");

//Exercise # 6 Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
console.log("~~~~~Adding space for question 6~~~~~~");

let listNames = users.reduce((name, user) => {
    return name = [...name, user.name];
}, []).join(', ');

console.log("Exercise # 6: ");
console.log("List of all usernames in a string: ");
console.log(listNames);
console.log("");


//Bonus question # 1 Use .reduce to get the unique list of languages from the list of users.
console.log("~~~~~Adding space for Bonus question 1~~~~~~");

let listOfLanguages = users.reduce((name, language) => {
    return name = [...name, language.languages];
}, []).join('; ');

console.log("Bonus Exercise # 1:");
console.log("List of languages from all Users: ");
console.log(listOfLanguages);