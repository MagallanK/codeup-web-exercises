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
$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: mapboxWeatherKey,
    lat: 29.4241,
    lon: -98.4936,
    units: 'imperial',
    exclude: 'hourly, minutely, alerts',
}).done(function(data) {
    console.log(data);
});


//Work on getting one weather date to display.
//Array of days of the week, want to loop through the array and append each to the html buttons for weather info
var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
$(".monday").click(function(e){
    e.preventDefault();
    $.get("https://api.openweathermap.org/data/2.5/onecall").done(function(data, status){

    })
})

// function for converting the date to standard notation
// function parseDate(timestamp) {
//     return new Date(timestamp * 1000).toLocaleDateString();
// }