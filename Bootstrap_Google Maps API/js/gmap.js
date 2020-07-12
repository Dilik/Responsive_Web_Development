/**
 * Created by Dilmurod on 2/28/2015.
 */
var map;

function initialize() {
    var mapOptions = {
        center: { lat: 55.7500, lng: 37.6167},
        zoom: 5
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var marker0 = new google.maps.Marker({
        position: {lat: 55.7500, lng: 37.6167},
        map: map,
        title: "Moscow,Russia"
    });
    var marker1 = new google.maps.Marker({
        position: {lat: 50.1167,lng: 8.6833},
        map: map,
        title: "Frankfurt,Germany"
    });
    var marker2 = new google.maps.Marker({
        position: {lat: 48.8567,lng: 2.3508},
        map: map,
        title: "Paris,Germany"
    });

    var marker3 = new google.maps.Marker({
        position: {lat: 50.8500,lng: 4.3500},
        map: map,
        title: "Brussels,Belgium"
    });

    var marker4 = new google.maps.Marker({
        position: {lat: 40.7127, lng: -74.0059},
        map:map,
        title: "New York City, USA",
        draggable: true
    });

    google.maps.event.addListener(marker0, 'click', gotoMoscow);
    google.maps.event.addListener(marker1, 'click', gotoFrank);
    google.maps.event.addListener(marker2, 'click', gotoParis);
    google.maps.event.addListener(marker3, 'click', gotoBrussel);
    google.maps.event.addListener(marker4, 'click', gotoNYC);
}
google.maps.event.addDomListener(window, 'load', initialize);

var gotoMoscow = function(){
    gotoDestination(55.750, 37.6167, "Moscow,Russia", "Moscow is Russia's capital city and is the largest city in the " +
        "country. As of January 1, 2010, Moscow's population was 10,562,099, which also makes it" +
        "one of the top ten largest cities in the world.", "images/moscow.jpg", 0);
};

var gotoFrank = function(){
    gotoDestination(50.1167, 8.6833, "Frankfurt,Germany", "Frankfurt am Main is the largest " +
        "city in the German state of Hesse and the fifth-largest " +
        "city in Germany, with a population of 701,350 within its " +
        "administrative boundaries", "images/frank.jpg",1);
};

var gotoParis = function(){
    gotoDestination(48.8567, 2.3508, "Paris,Germany", "Since 508 A.D, Paris is the capital of France, the largest " +
        "country of Western Europe with 550 000 km2 (the second in population with 66 millions " +
        "inhabitants).Paris has 2.275 million inhabitants (last census in 2011). She is the core of " +
        "the Paris metropolitan area, known as Ile de France region (11.9 million people).", "images/paris.jpg",2);
};

var gotoBrussel = function(){
    gotoDestination(50.8500, 4.3500, "Brussels,Belgium", "Brussels city is quickly becoming a trendy spot for weekend getaways and holidays." +
        " Apart from its famous chocolates and beers there are many attractions that most visitors cannot begin to" +
        " imagine. It is a centre of European culture, officially nicknamed ‘the European Village", "images/brussel.jpg",3);
};

var gotoNYC = function() {
    gotoDestination(40.7127, -74.0059, "New York City, USA", "New York – often called New York City or the City " +
        "of New York to distinguish it from the State of New York, of which it is " +
        "a part – is the most populous city in the United States and the center of " +
        "the New York metropolitan area, the premier gateway for legal immigration to the " +
        "United States", "images/NYC.jpg",4);
};
var gotoDestination = function(lat, lng, title, text1, image,pos){
    var ssPosition = {lat: lat, lng: lng};
    var marker = new google.maps.Marker({
        position: ssPosition,
        map: map,
        title: title
    });
    var text = document.getElementById("text");
    text.innerText = text1;

    document.getElementById("image").src = image;
    var ch_nav = document.getElementById("choice_nav");
    for(var i = 0; i < 5; i++ )
    {
        ch_nav.children[i].setAttribute("class","");
    }

    ch_nav.children[pos].setAttribute("class","active");

    google.maps.event.addListener(marker, 'click', function() {
        var text = document.getElementById("text");
        text.innerText = text1;
        document.getElementById("image").src = image;

        var ch_nav = document.getElementById("choice_nav");
        for(var i = 0; i < 5; i++ )
        {
            ch_nav.children[i].setAttribute("class","");
        }

        ch_nav.children[pos].setAttribute("class","active");
    });

    map.setCenter(ssPosition);
    map.setZoom(5);

};

var city = function(num) {
    switch (num) {
        case (0):
            gotoMoscow();
            break;
        case (1):
            gotoFrank();
            break;
        case (2):
            gotoParis();
            break;
        case (3):
            gotoBrussel();
            break;
        case (4):
            gotoNYC();
            break;
    }
};