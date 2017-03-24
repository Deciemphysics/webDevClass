/*
REVIEW TODAY
I need to work on ducktyping

    Possible Topics
    1. Promises **
    2. Google API **
    3. Ajax/JSON **
    4. RegEx
    5. Prototypes/Constructors **
    6. Closures
    7. localStorage

*/

// Promises. Chaining Google API with it.
// var notPromise = new Promise(executor);
// Need a function that creates a resolve or reject.
//function executor(resolve, reject){

//}
var geoLocationPromise = getGeoLocation();
geoLocationPromise.then(displayLocation);

function displayLocation(position){
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    document.getElementById('lat').innerText = lat;
    document.getElementById('lng').innerText = lng;
}
// get geo location - promise

    // get golf courses nearby - promise

// populate a dropdown with those courses - register this with a promise

// populate tee box options


// location-service.js
function getGeoLocation(){
    return new Promise(executor);
    function executor(resolve, reject){
        if("geolocation" in navigator){
            navigator.geolocation.getCurrentPosition(
                function(position){ // success
                    resolve(position);
                },
                function(error){ // error
                    reject({message: error.message});
                });
        } else {
            reject({message: 'No geolocation data available.'});
        }
    }
}

// golfcourse-service.js
