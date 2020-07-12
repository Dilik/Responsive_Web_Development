/**
 * Created by league on 2/25/15.
 */

var map;

var initialize = function() {
    console.log("Initializing...");
    var mapOptions = {
        center: { lat: 40.6928, lng: -73.9903},
        zoom: 12
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    var markIst = new google.maps.Marker({
        position: { lat:41.020093, lng:28.973726 },
        map: map,
        title:"Istanbul"
    });
    var markAu = new google.maps.Marker({
        position: { lat:-33.854115, lng:151.214242 },
        map: map,
        title:"Sydney Harbour"
    });
    var markCa = new google.maps.Marker({
        position: { lat:37.742755, lng:-122.482531 },
        map: map,
        title:"Sunset District"
    });
    var markJp = new google.maps.Marker({
        position: { lat:35.717902, lng:139.775748 },
        map: map,
        title:"Tokyo Museum"
    });
    google.maps.event.addListener(markAu, 'click', function() {
        clickNav(0);
    });
    google.maps.event.addListener(markCa, 'click', function() {
        clickNav(1);
    });
    google.maps.event.addListener(markJp, 'click', function() {
        clickNav(2);
    });
    google.maps.event.addListener(markIst, 'click', function() {
        clickNav(3);
    });
    clickNav(0);
}
google.maps.event.addDomListener(window, 'load', initialize);

var clickNav = function(di) {
    var dest = document.getElementById("destChoice");
    // Make the right nav active
    for(i = 0; i < dest.children.length; i++) {
        if(i == di) {
            dest.children[i].setAttribute("class", "active");
        } else {
            dest.children[i].removeAttribute("class");
        }
    }
    var destPic = document.getElementById("destPic");
    switch(di) {
        case 0: // Australia
            destBlurb.innerHTML = "I visited Sydney and Melbourne in 2003. Here is the famous Sydney Opera House, from a boat ride in the harbour.";
            destPic.src = "images/sydney-opera.jpg";
            destPic.width = 320;
            destPic.height = 213;
            map.panTo({lat:-35.833255, lng:148.566684});
            map.setZoom(6);
            break;
        case 1: // California
            destBlurb.innerHTML = "I end up in Northern California every few years or so, but this picture is from one of my very first trips."
            destPic.src = "images/california-sunset.jpg";
            destPic.width = 320;
            destPic.height = 213;
            map.panTo({lat:37.572895, lng:-122.283791});
            map.setZoom(6);
            break;
        case 2: // Japan
            destBlurb.innerHTML = "I visited Tokyo and Kyoto when I attended a friend's wedding in 2004.";
            destPic.src = "images/tokyo-sakura.jpg";
            destPic.width = 320;
            destPic.height = 240;
            map.panTo({lat:35.632055, lng:139.693909});
            map.setZoom(8);
            break;
        case 3: // Turkey
            destBlurb.innerHTML = "Loved the food in Istanbul.";
            destPic.src = "images/bosphorous.jpg";
            destPic.width = 320;
            destPic.height = 213;
            map.panTo({lat:40.864227, lng:28.951755});
            map.setZoom(7);
            break;
    }
}

