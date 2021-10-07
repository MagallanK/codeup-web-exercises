"use strict";

// added map to get display on website of map
mapboxgl.accessToken = mapboxApiKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 9,
    center: [-98.4916, 29.4252],
    dragRotate: true,
});

// open weather map layout for one call forecast
$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: mapboxWeatherKey,
    lat: 29.4252,
    lon: -98.4916,
    units: 'imperial',
    exclude: 'minutely, hourly, alerts'
}).done(function(data) {
    console.log(data);
});