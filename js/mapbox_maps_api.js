"use strict";

// Start in current city I live

mapboxgl.accessToken = mapboxApiKey
console.log(mapboxApiKey)
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 10,
    center: [-98.4916, 29.4252],
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
//First restaurant
// geocode('The breakfast club, Seaside, CA 93955', mapboxApiKey).then(function (results) {
//     var popup = new mapboxgl.Popup()
//         .setText('Here is The Breakfast Club, my favorite Restaurant!')
//
//     new mapboxgl.Marker({color: 'red'})
//         .setLngLat(results)
//         .setPopup(popup)
//         .addTo(map)
//     map.flyTo({center: results, zoom: 19, speed: .25, curve: 1})
// });
//
// //Second restaurant
// geocode('1000 N Davis Rd, Salinas, CA, 93907', mapboxApiKey).then(function (results) {
//     var popup2 = new mapboxgl.Popup()
//         .setText('Here is Fujiyama, my second favorite Restaurant!')
//
//     new mapboxgl.Marker({color: 'green'})
//         .setLngLat(results)
//         .setPopup(popup2)
//         .addTo(map)
// });
//
// //Third restaurant
// geocode('8224 Fredericksburg Rd, San Antonio, TX, 78229', mapboxApiKey).then(function (results) {
//     var popup3 = new mapboxgl.Popup()
//         .setText("Here is Sarita's Mexican Restaurant, my favorite Restaurant in San Antonio so far!")
//
//     new mapboxgl.Marker({color: 'orange'})
//         .setLngLat(results)
//         .setPopup(popup3)
//         .addTo(map)
// });


//Array of restaurants from above with information about them
var restaurants = [
    {
        name: 'The Breakfast Club',
        type: 'Brunch',
        coordinate: 'The Breakfast Club',
        myDish: 'Banana Foster French Toast'
    },
    {
        name: 'Fujiyama',
        type: 'Lunch/Dinner',
        coordinate: '1000 N Davis Rd, Salinas, CA, 93907',
        myDish: 'Filet Mignon and Lobster'
    },
    {
        name: "Sarita's Mexican Restaurant",
        type: 'Breakfast/Lunch/Dinner',
        coordinate: '8224 Fredericksburg Rd, San Antonio, TX, 78229',
        myDish: '3 cheese enchiladas plate w/ rice and beans'
    }
]

//Creat forEach loop to loop through restaurants array and show information for each restaurant

restaurants.forEach(function(input){
    geocode(restaurants, mapboxApiKey).then(function (results) {
        var popup = new mapboxgl.Popup()

        new mapboxgl.Marker({color: 'green'})
            .setLngLat(results.coordinate)
            .setPopup(popup)
            .addTo(map)
    });
});