//TODO: Finish coding this program. You need to stop the setInterval() method after the showTime() function has run five times


let count = 0;

function showTime() {

    // return new date and time
    let dateTime = new Date();

    // return the time
    let time = dateTime.toLocaleTimeString();

    count += 1;

    //if the count reaches 5, stop the program.
    if(count >= 5){
        clearInterval(display);
    }
    console.log(time)
}

let display = setInterval(showTime, 5000);



function greet(){
    console.log("Hello World!");
}

var delayedGreeting = window.setTimeout(greet, 3000);


window.clearTimeout(delayedGreeting);

