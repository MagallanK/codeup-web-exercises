function calculateDogAge(puppyAge){
    var puppyHumanAge = puppyAge * 7;
    if(puppyAge * 7 === puppyHumanAge){
        return "Your doggie is " + puppyHumanAge + " years old in dog years!"
    }
    else{
        return "Please enter a whole number."
    }
}


function calculateDogAge(puppyAge, myAge){
    var puppyHumanAge = puppyAge * 7;
    var myDogAge = myAge * 7;
    if(puppyAge * 7 === puppyHumanAge && myAge * 7 === myDogAge){
        return "Your doggie is " + puppyHumanAge + " years old in dog years! Also my age in dog years is " + myDogAge + " Ouch what an old timer! XD"
    }
    else{
        return "Please enter a whole number."
    }
}