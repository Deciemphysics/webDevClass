// Google Maps API
// Press A to grab your destiny
// Promises, and it still feels all so wasted...
// We're learning how to put pins on a map
function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}
