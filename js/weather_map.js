"use strict";



$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: mapboxWeatherKey,
    q:     "San Antonio, US",
    units: 'imperial',
}).done(function(data) {
    console.log(data);
});