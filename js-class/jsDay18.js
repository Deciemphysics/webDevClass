// AJAX
// Creates a request to grab something from a server
// xhttp request
// Allows a request to be sent, then the JS continues to load.
// AJAX can load a page and then dynamically load in data AFTER
// A web service is like a door to your server
// AJAX is going and getting it, JSON is the object itself

// http://uxcobra.com/js/myweatherajax.html

/*
function getmyinfo(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (xhttp.readyState == 4 && xhttp.status == 200){
            var obj = JSON.parse(xhttp.responseText);
            document.getElementById('currentconditions').innerHTML = obj.weath[0].description;
            document.getElementById('weatherimage').src = "http://openweathermap.org/img/w/" + obj.weather[0].icon + ".png";
        }
    };
    xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ thecityname +"&appid=cc8ef8e5c209d938ab3801daa42b5e31", true);
    xhttp.send();
}
*/

// The json it returns is an object you can go through and parse.

// REST
// Representational State Transfer