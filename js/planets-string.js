(function(){
    "use strict";

     var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
     var planetsArray = planetsString.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

     console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    //string with <br> tags
    var planetsString = planetsArray.join("<br>");
    console.log(planetsString);


    // array with <br> tags
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    function newPlanetsArray(planetsString) {
        var newPlanetString = [];
        // split the string into individual planets
        var newPlanetArr = planetsString.split(' ');
        newPlanetArr.forEach(function(planetString){
            // remove | from the string & add <br> tags
            var cleanPlanetsArray = planetString.split("|").join('<br>');
            newPlanetString.push(cleanPlanetsArray);
        });
        return newPlanetString;
    }
    var newPlanets = newPlanetsArray(planetsString);
    console.log(newPlanets);
 })();


