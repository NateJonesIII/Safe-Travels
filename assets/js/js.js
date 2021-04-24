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



  
    /* document.getElementById("select").addEventListener("change", function(event) {
      event.preventDefault(); 
      var input1=document.getElementById("userInput").value;
      if(!input1) {
        alert("Please enter the IATA code of an airport.");
      } else {
    document.getElementById("userInput").innerText=input1;
    var requesturl1= ('https://covid-api.thinklumo.com/airport='+input1+"x-api-key: dc0ed05b189544008f76b8d75ecb930f") */
      
   /*  fetch(requesturl1).then(function(response) {
     
         return response.json ();
         
     }).then(function(data) {
       console.log(data);
       $("#restrictions").text(JSON.stringify(data, null, ''));  */

fetch("https://covid-19-testing.github.io/locations/florida/complete.json").then(function(response) {
  return response.json ();
   }) .then (function(data) {
  console.log(data);
 
  $("#testsites").text(JSON.stringify(data));

//Activates when you click a select option 
document.getElementById("select").addEventListener("change", function(event) {
  event.preventDefault(); 
  //assigns a variable input to represent the id userinput 
  var input=document.getElementById("userInput").value;
  //Alert needs to change to modal or just disappear
  if(!input) {
    alert("Please enter the name of a city.");
  } else {
document.getElementById("userInput").innerText=input;
var requesturl= ("https://www.trackcorona.live/api/cities/"+input)
  }
  fetch(requesturl).then(function(response) {
 /*    if(!response.ok) {alert("No information found for "+input)}; */
    return response.json ();
    
}).then(function(data) {
  console.log(data);
   

    $("#stats").text(JSON.stringify(data, null, '\t'));  
   
    console.log(data);
  
})
 ;});

})


