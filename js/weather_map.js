"use strict";

// added map to get display on site
mapboxgl.accessToken = mapboxApiKey;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 9,
    center: [-98.4936, 29.4241],
    dragRotate: true,
});

//Function to display layout of cards when showing weather and info
function renderWeather(weather) {
    var html = "";
    html += "<div>";
    html += "<p>" + convertDateTime(weather.dt) + "</p>";
    html += "<img src='" + "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png" + "'>"
    html += "<p> humidity: " + weather.humidity + "</p>";
    html += "<p> pressure: " + weather.pressure + "</p>";
    html += "<p> temp: " + weather.temp.day + "</p>";
    html += "<p> weather: " + weather.weather[0].main + "</p>";
    html += "</div>";

    return html;
}

// open weather map layout for 5 day forecast including loop and appending to html
var eightDayWeather
$.get("https://api.openweathermap.org/data/2.5/onecall", {
    APPID: mapboxWeatherKey,
    lat: 29.4241,
    lon: -98.4936,
    units: 'imperial',
    exclude: 'hourly, minutely, alerts',
}).done(function (data) {
    console.log(data);
    eightDayWeather = data.daily;
//loop through amount of days want displayed with weather
    for (var i = 0; i <= 4; i++) {
        var html = renderWeather(eightDayWeather[i]);
        $(".weatherInfo").eq(i).append(html);
    }
});

// function for converting the date to readable format
function convertDateTime(time) {

    var date = new Date(time * 1000);
    return date.toLocaleDateString("en-US");
}

//Create function to display markers and update weather at that location after clicks on map
