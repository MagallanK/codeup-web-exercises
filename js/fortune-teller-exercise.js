//My solo solution
// function tellFortune(children, name, location, title){
//     var name = "Vicki".toLowerCase();
//     var location = "San Antonio".toLowerCase();
//     var title = "Web Developer".toLowerCase();
//     var children = 3;
//         console.log("You will be a " + title + " in " + location + ", and married to " + name + " with " + children + " kids.");
// }
//
// tellFortune(3,Vicki,San Antonio, Web Developer);


// Review exercise from morning solution
function tellFortune(numChildren, partnerName, geoLocation, jobTitle) {
    var output = "You will have " + numChildren + " children and work as a " + jobTitle + " living in " + geoLocation + " married to your wonderful partner " + partnerName;

    return output;
}

tellFortune(3, "Vicki", "Texas", "Web Developer");