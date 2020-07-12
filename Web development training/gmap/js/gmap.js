/**
 * Created by league on 2/25/15.
 */

console.log("Loading gmap.js");
var map;

function initialize() {
    console.log("Initializing...");
    var mapOptions = {
        center: { lat: 40.6928, lng: -73.9903},
        zoom: 12
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    //var marker = new google.maps.Marker({
    //    position: { lat:40.690691, lng:-73.980033 },
    //    map: map,
    //    title:"LIU COMPUTER SCIENCE!!"
    //});
    //google.maps.event.addListener(marker, 'click', function() {
    //    console.log("YOU CLICKED ON US!!!")
    //});
}
google.maps.event.addDomListener(window, 'load', initialize);

var showMeShakeShack = function() {
    var ssPosition = { lat:40.692269, lng:-73.988603 };
    var marker = new google.maps.Marker({
        position: ssPosition,
        map: map,
        title:"Shake Shack"
    });
    map.setCenter(ssPosition);
    map.setZoom(12);
}


