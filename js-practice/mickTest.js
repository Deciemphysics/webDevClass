var getCoords = {};
navigator.geolocation.getCurrentPosition(function(location){
    getCoords.latitude = location.coords.latitude;
    getCoords.longitude = location.coords.longitude;
});

