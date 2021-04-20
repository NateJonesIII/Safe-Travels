//block declaration of map
let map;
//This key is to be used for google applications i.e google maps
var googleApiKey = "AIzaSyA-a6D0sOzccD1ryQr0w6T-K8-g-YOHZik";
//Locations to be stored from covid-19 api lat, lng
var locations = [];
//Contains markers 
var marker;
//location of Florida in lat,lng
var centerCoord = { lat: 27.994402, lng: -81.760254 };
//Initializes the map ID Tag to create map functionality; Currently displays default lat & lng;                  
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: centerCoord,
        zoom: 8,
    });
    // Create a <script> tag and set the USGS URL as the source.
    const script = document.createElement("script");
    // The script source from covid api
    // 
    script.src =
        "";
    document.getElementsByTagName("head")[0].appendChild(script);
}//End of initMap()

// Loop through the results array and place a marker for each
// set of coordinates.
const eqfeed_callback = function (results) {
    for (let i = 0; i < results.features.length; i++) {

        const latLng = new google.maps.LatLng(coords[1], coords[0]);
        new google.maps.Marker({
            position: latLng,
            map: map,
        });
    }

};

$(document).ready(function () {

    $('.modal').modal();
    $("select").formSelect();
});
