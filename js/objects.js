(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Kapena",
        lastName: "Magallan",
    };
    console.log(person.firstName);
    console.log(person.lastName);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    var sayHello = function(){
        console.log("Hello from " + this.firstName + " " + this.lastName + "!");
    };
    person.sayHi = sayHello;
    console.log(person.sayHi());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320},

    ];

    shoppers.forEach(function(shopper) {
        if (shopper.amount >= 200) {
            var discount = shopper.amount * .12;
            console.log(shopper.name + "'s discount is 12%. The total discount is $" + discount + " The new total is $" + (shopper.amount - discount));
        }
        else {
            console.log(shopper.name + " did not have a discount at this time so " + shopper.name + "'s total is $" + shopper.amount);
        }

    });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var book1 ={
        title: "The Salmon of Doubt",
        author: {
        firstName: "Douglas",
        lastName: "Adams"},
       // eachBook: bookInfo
    };
    var book2 ={
        title: "First and Only",
        author: {
        firstName: "Dan",
        lastName: "Abnett"},
       // eachBook: bookInfo
    };
    var book3 ={
        title: "Think Big",
        author: {
        firstName: "Dr. Robert",
        lastName: "Anthony"},
        //eachBook: bookInfo
    }
    var book4 ={
        title: "On Tyranny",
        author: {
        firstName: "Timothy",
        lastName: "Snyder"},
        //eachBook: bookInfo
    }
    var book5 ={
        title: "A Military Miscellany",
        author: {
        firstName: "Thomas",
        lastName: "Ayres"},
        //eachBook: bookInfo
    }

    var books = [book1, book2, book3, book4, book5];

    console.log(books);
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // var bookInfo = function() {
    //
    //     console.log("Book # " + books + "Title:  " + this.title + " Author: " + this.firstName + " " + this.lastName);
    // }
    //
    // books.eachBook = bookInfo;
    // console.log(books.eachBook());
    //
    // var myBooks = [book1, book2, book3, book4, book5];
    // console.log(myBooks);
    // myBooks.forEach(function(book) {
    //     book.eachBook();
    // });

    //Shanshan's review
    books.forEach(function(book, index) {
        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log(" ")
    });




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    //Shanshan's review

    function createBook(title, name) {
        // get name array
        var nameArr = name.split(" ");
        var firstName = nameArr[0];
        var lastName = nameArr[1];
        return {
            title: title,
            author: {
                firstName: firstName,
                lastName: lastName
            }
        }
    }

    var books = [
        createBook('A Promised Land', 'Barack Obama'),
        createBook('The Midnight Library', 'Matt Haig')
    ];

    function showBookInfo(book) {
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log(" ");
    }

    books.forEach(function(book, index) {
        console.log("Book: # " + (index +1));
        showBookInfo(book);
    });


})();