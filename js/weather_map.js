"use strict";

// added map to get display on website of map
mapboxgl.accessToken = mapboxApiKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 9,
    center: [-98.4936, 29.4241],
    dragRotate: true,
});

// open weather map layout for 5 day forecast
$.get("https://api.openweathermap.org/data/2.5/forecast", {
    APPID: mapboxWeatherKey,
    q: 'San Antonio, US',
    units: 'imperial',
}).done(function(data) {
    console.log(data);
});


//Work on getting one weather date to display.
$("#userSearch").click(function (e) {
    e.preventDefault();
    let query = $("#searchValue").val(); // a string that was input
    console.log(query);
});



//Array of days of the week, want to loop through the array and append each to the html buttons for weather info
// var daysOfTheWeek =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
//
// daysOfTheWeek.forEach(function(input){


// function for converting the date to standard notation
// function parseDate(timestamp) {
//     return new Date(timestamp * 1000).toLocaleDateString();
// }