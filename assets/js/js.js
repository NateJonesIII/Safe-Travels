// Initialization for the selector
//block declaration of map
let map;

//Contains markers 
var marker;
//Initializes the map ID Tag to create map functionality; Currently displays default lat & lng; map will take input of lat, lng to display location                     
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
} //End of initMap()

//This key is to be used for google applications i.e google maps
var googleApiKey = "AIzaSyA-a6D0sOzccD1ryQr0w6T-K8-g-YOHZik";
//Locations to be stored from covid-19 api lat, lng
var locations = [];

$(document).ready(function () {

    $('.modal').modal();
    $("select").formSelect();
});
