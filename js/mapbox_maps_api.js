"use strict";

// Start in current city I live

mapboxgl.accessToken = mapboxApiKey
console.log(mapboxApiKey)
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 10,
    center: [-98.4916,29.4252],
    dragRotate: false,
});

var marker = new mapboxgl.Marker({color: 'blue'})
    .setLngLat([-98.4861, 29.4260])
    .addTo(map);

var myTown = new mapboxgl.Popup()
    .setText('This is the city in which I currently live.')
    .addTo(map)

marker.setPopup(myTown)

//geocode has to be address, reverseGeocode is {lat: and lng:}
geocode('1130 Fremont Blvd # 201, Seaside, CA 93955', mapboxApiKey).then(function (results) {
    var popup = new mapboxgl.Popup()
        .setText('Here is The Breakfast Club, my favorite Restaurant!')

    new mapboxgl.Marker()
        .setLngLat(results)
        .setPopup(popup)
        .addTo(map)
    map.flyTo({center: results, zoom: 19, speed: .25, curve: 1})
});