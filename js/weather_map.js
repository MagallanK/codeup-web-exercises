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

var dailyData = [];

$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: mapboxWeatherKey,
    lat: 29.4241,
    lon: -98.4936,
    units: 'imperial',
    exclude: 'hourly, minutely, alerts',
}).done(function(data) {
    console.log(data);
    dailyData = data.daily;
});


//Work on getting one weather date to display.
//Array of days of the week, want to loop through the array and append each to the html buttons for weather info
// var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// console.log one weather report when clicking button for monday
$("button[data-target='#collapseMonday']").click(function(e){
    e.preventDefault();
    console.log(dailyData[1]); // can declare index here for specific days of the week [#]
})

//Need to append to html to display weather in the Monday div container after clicking button.

$(document).ready(function(){
    $.get("https://api.openweathermap.org/data/2.5/onecall", function(data){
        var html = "";
        $.each(data, function(index){
            html += "<div>";
            html += "<p>" + data[index].day + "</p>";
            html += "</div>";
        });
        $("#collapseMonday").append(html);
    });
});



















// function for converting the date to standard notation
// function parseDate(timestamp) {
//     return new Date(timestamp * 1000).toLocaleDateString();
// }
// function convertDateTime(time){
//
//     var date = new Date(time * 1000);
//     console.log(date.toLocaleDateString("en-US"));
// }