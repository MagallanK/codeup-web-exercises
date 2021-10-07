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


var daysOfTheWeek =['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

daysOfTheWeek.forEach(function(input){
    geocode(daysOfTheWeek, mapboxApiKey).then(function (results) {
        var popup = new mapboxgl.Popup()

        new mapboxgl.Marker({color: 'green'})
            .setLngLat(results.coordinate)
            .setPopup(popup)
            .addTo(map)
    });
});

